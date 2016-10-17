var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import AddTodo from 'AddTodo';
import TodoList from 'TodoList';
import Search from 'Search';
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
	getInitialState() {
		return {showCompleted: false, searchText: "", todos: TodoAPI.getTodos()};
	},
	componentDidUpdate() {
		TodoAPI.setTodos(this.state.todos);
	},
	handleSearch(showCompleted, searchText) {
		this.setState({showCompleted: showCompleted, searchText: searchText.toLowerCase()});
	},
	handleAddTodo(todoText) {
		this.setState({
			todos: [
				...this.state.todos, {
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
		var {todos, showCompleted, searchText} = this.state;
		var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
		return (
			<div>
				<h1 className="page-title">Todo App</h1>
				<div className="row">
					<div className="column small-centered small-11 medium-6 large-5">
						<div className="container">
							<Search onSearch={this.handleSearch}/>
							<TodoList/>
							<AddTodo onAddTodo={this.handleAddTodo}/>
						</div>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = TodoApp;
