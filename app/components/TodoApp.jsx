var React = require('react');
var AddTodo = require('AddTodo');
var Search = require('Search');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  render: function() {
    return (
      <div>
        <h1>TodoApp Components</h1>
        <Search/>
        <TodoList/>
        <AddTodo/>
      </div>
    ) 
  }
});

module.exports = TodoApp;