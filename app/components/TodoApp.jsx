var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import AddTodo from 'AddTodo';
import TodoList from 'TodoList';
import Search from 'Search';

var TodoApp = React.createClass({
	render() {
		return (
			<div>
				<h1 className="page-title">Todo App</h1>
				<div className="row">
					<div className="column small-centered small-11 medium-6 large-5">
						<div className="container">
							<Search/>
							<TodoList/>
							<AddTodo/>
						</div>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = TodoApp;
