const expect = require('expect');
const actions = require('actions');

describe('Actions', () => {
	it('should generate searchText action', () => {
		let action = {
			type: "SET_SEARCH_TEXT",
			searchText: 'Some Search Text'
		};

		let res = actions.setSearchText(action.searchText);

		expect(res).toEqual(action);
	});

	it('should generate toggleShowCompleted action', () => {
		let action = {
			type: 'TOGGLE_SHOW_COMPLETED'
		};
		let res = actions.toggleShowCompleted();

		expect(res).toEqual(action);
	});

	it('should generate addTodo action', () => {
		let action = {
			type: "ADD_TODO",
			text: "Something to Add"
		};
		let res = actions.addTodo(action.text);

		expect(res).toEqual(action);
	});

	it('should generate add todos action object', () => {
		let todos = [
			{
				id: '111',
				text: 'anything',
				completed: 'false',
				completedAt: undefined,
				createdAt: 33000
			}
		];
		let action = {
			type: 'ADD_TODOS',
			todos
		};
		let res = actions.addTodos(todos);

		expect(res).toEqual(action);
	});

	it('should generate toggleTodo action', () => {
		let action = {
			type: 'TOGGLE_TODO',
			id: 22
		};
		let res = actions.toggleTodo(action.id);

		expect(res).toEqual(action);
	});

});