import React from 'react';
import AddTodo from 'AddTodo';
import Search from 'Search';
import TodoList from 'TodoList';
import uuid from 'node-uuid';

var TodoApp = React.createClass({
  getInitialState() {
    return {
      showCompleted: false,
      searchText: "",
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog',
          completed: false
        },
        {
          id: uuid(),
          text: 'Clean the yard',
          completed: true
        },
        {
          id: uuid(),
          text: 'Do the Dishes',
          completed: true
        },
        {
          id: uuid(),
          text: 'Make a todo app',
          completed: false
        }
      ]
    }
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
    var {todos} = this.state;
    return (
      <div>
        <h1>TodoApp Components</h1>
        <Search onSearch={this.handleSearch}/>
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    ) 
  }
});

module.exports = TodoApp;