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
          text: 'Walk the dog'
        },
        {
          id: uuid(),
          text: 'Clean the yard'
        },
        {
          id: uuid(),
          text: 'Do the Dishes'
        },
        {
          id: uuid(),
          text: 'Make a todo app'
        }
      ]
    }
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
          text: todoText
        }
      ]
    });    
  },
  render() {
    var {todos} = this.state;
    return (
      <div>
        <h1>TodoApp Components</h1>
        <Search/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    ) 
  }
});

module.exports = TodoApp;