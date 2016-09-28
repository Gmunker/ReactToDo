var React = require('react');
var AddTodo = require('AddTodo');
var Search = require('Search');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
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
  render: function() {
    var {todos} = this.state;
    return (
      <div>
        <h1>TodoApp Components</h1>
        <Search/>
        <TodoList todos={todos}/>
        <AddTodo/>
      </div>
    ) 
  }
});

module.exports = TodoApp;