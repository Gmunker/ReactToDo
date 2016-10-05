import React from 'react';
import uuid from 'node-uuid';
var moment = require('moment');

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
        todo.completedAt = todo.completed ? moment().unix() : undefined;
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
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });    
  },
  render() {
    let {todos, showCompleted, searchText} = this.state;
    let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <Search onSearch={this.handleSearch}/>
              <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
              <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
          </div>        
        </div>
      </div>
    ) 
  }
});

module.exports = TodoApp;