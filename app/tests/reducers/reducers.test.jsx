const expect = require('expect');
const df = require('deep-freeze-strict');
const reducers = require('reducers');

describe('Reducers', () => {

	describe('searchTextReducer', () => {
		it('should set searchText', () => {
			let action = {
				type: 'SET_SEARCH_TEXT',
				searchText: 'Testing Text'
			};
			let res = reducers.searchTextReducer(df(''), df(action));

			expect(res).toEqual(action.searchText);
		});
	}); // searchTextReducer

	describe('showCompletedReducer', () => {
		it('should set true if false', () => {
			let action = {
				type: 'TOGGLE_SHOW_COMPLETED'
			};
			let res = reducers.showCompletedReducer(df(false), df(action));

			expect(res).toEqual(true);
		});
	}); // searchTextReducer

	describe('todosReducer', () => {
		it('should add new todo', () => {
			let action = {
				type: 'ADD_TODO',
				text: "Walk the Dog"
			};
			let res = reducers.todosReducer(df([]), df(action));

			expect(res.length).toEqual(1);
			expect(res[0].text).toEqual(action.text);
		}); // Should add new todo

		it('should toggle todo', () => {
			let todos = [
				{
					id: 120,
					text: 'Something',
					createdAt: 123,
					completed: true,
					completedAt: 125
				}
			];

			let action = {
				type: 'TOGGLE_TODO',
				id: 120
			};

			let res = reducers.todosReducer(df(todos), df(action));
			expect(res[0].completed).toEqual(false);
			expect(res[0].completedAt).toEqual(undefined);
		}); // Should return opposite

		it('should add exsisting todos', () => {
			let todos = [
				{
					id: 120,
					text: 'Something',
					createdAt: 123,
					completed: false,
					completedAt: undefined
				}
			];

			let action = {
				type: 'ADD_TODOS',
				todos
			};
			let res = reducers.todosReducer(df([]), df(action));

			expect(res.length).toEqual(1);
			expect(res[0]).toEqual(todos[0]);
		});
	}); // Todos Reducer
}); // Reducers
