var React = require('react');

var AddTodo = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();

    var addedTodo = this.refs.todoInput.value;
    this.refs.todoInput.value = "";
    this.props.onAddNewTodo(addedTodo);
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Enter a Todo here..." ref="todoInput" />
          <button className="button primary">Submit</button>
        </form>
      </div>
    )
  }
});

module.exports = AddTodo;