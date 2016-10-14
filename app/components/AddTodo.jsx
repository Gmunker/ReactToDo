import React from 'react';

var AddTodo = React.createClass({
	handleSubmit(e) {
		e.preventDefault();

		var todoText = this.refs.todoInput.value;
		if (todoText.length > 0) {
			this.refs.todoInput.value = "";
			this.props.onAddTodo(todoText);
		}
	},
	render() {
		return (
			<div className="container__footer">
				<form onSubmit={this.handleSubmit}>
					<input type="text" placeholder="Enter a Todo here..." ref="todoInput"/>
					<button className="button">Submit</button>
				</form>
			</div>
		);
	}
});

module.exports = AddTodo;
