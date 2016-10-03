import React from 'react';

var AddTodo = React.createClass({
  handleSubmit(e) {
    e.preventDefault();

    var addedTodo = this.refs.todoInput.value;
    if (addedTodo.length > 2) {
      this.refs.todoInput.value = "";
      this.props.onAddNewTodo(addedTodo);
    }
  },
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Enter a Todo here..." ref="todoInput" />
          <button className="button primary">Submit</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;