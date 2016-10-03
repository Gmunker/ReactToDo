import React from 'react';
import AddTodo from 'AddTodo';
import Search from 'Search';
import TodoList from 'TodoList';

var TodoApp = React.createClass({
  getInitialState() {
    return {
      showCompleted: false,
      searchText: "",
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        },
        {
          id: 3,
          text: 'Do the Dishes'
        },
        {
          id: 4,
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
  handleAddNewTodo(newTodo) {
    var {todos} = this.state;
    var newId = todos.length + 1;
    
    var newTodos = todos.push({id: newId, text: newTodo});

    this.setState({
      todos: todos
    });      
  },
  render() {
    var {todos} = this.state;
    return (
      <div>
        <h1>TodoApp Components</h1>
        <Search/>
        <TodoList todos={todos}/>
        <AddTodo onAddNewTodo={this.handleAddNewTodo}/>
      </div>
    ) 
  }
});

module.exports = TodoApp;