import React from 'react';
import uuid from 'node-uuid';

import AddTodo from 'AddTodo';
import Search from 'Search';
import TodoList from 'TodoList';
import TodoAPI from 'TodoAPI';

var TodoApp = React.createClass({
  getInitialState() {
    return {
      showCompleted: false,
      searchText: "",
      todos: TodoAPI.getTodos()
    };
  },
  componentDidUpdate() {
    TodoAPI.setTodos(this.state.todos);
  },
  handleToggle(id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({todos: updatedTodos});
  },
  handleSearch(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  handleAddTodo(todoText) {
    this.setState({
      todos: [
          ...this.state.todos,
        {
          id: uuid(), 
          text: todoText,
          completed: false
        }
      ]
    });    
  },
  render() {
    let {todos, showCompleted, searchText} = this.state;
    let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    return (
      <div>
        <h1>TodoApp Components</h1>
        <Search onSearch={this.handleSearch}/>
        <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    ) 
  }
});

module.exports = TodoApp;