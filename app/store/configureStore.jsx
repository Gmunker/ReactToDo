const redux = require('redux');
const {combineReducers, createStore, compose} = require('redux');
const {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');

export let configure = (initialState = {}) => {
	let reducer = combineReducers({searchText: searchTextReducer, showCompleted: showCompletedReducer, todos: todosReducer});

	let store = createStore(reducer, initialState, compose(window.devToolsExtension
		? window.devToolsExtension()
		: f => f));
	return store;
};
