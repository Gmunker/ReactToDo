import * as redux from 'redux';
import thunk from 'redux-thunk';
import {combineReducers, createStore, compose, applyMiddleware} from 'redux';

import {searchTextReducer, showCompletedReducer, todosReducer} from 'reducers';

export let configure = (initialState = {}) => {
	let reducer = combineReducers({searchText: searchTextReducer, showCompleted: showCompletedReducer, todos: todosReducer});

	let store = createStore(reducer, initialState, compose(applyMiddleware(thunk), window.devToolsExtension
		? window.devToolsExtension()
		: f => f));
	return store;
};
