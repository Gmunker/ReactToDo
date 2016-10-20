import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from 'actions';

let createMockStore = configureMockStore([thunk]);

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
			todo: {
				id: "jdjd22",
				text: "Something to test",
				completed: false,
				createdAt: 45454
			}
		};
		let res = actions.addTodo(action.todo);

		expect(res).toEqual(action);
	});

	it('should create todo and dispatch addTodo', (done) => {
		const store = createMockStore({});
		const todoText = 'My todo item';

		store.dispatch(actions.startAddTodo(todoText)).then(() => {
			const actions = store.getActions();
			expect(actions[0]).toInclude({type: 'ADD_TODO'});
			expect(actions[0].todo).toInclude({text: todoText});
			done();
		}).catch(done);
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
