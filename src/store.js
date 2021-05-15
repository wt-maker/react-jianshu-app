import { combineReducers } from 'redux-immutable';
import { createStore, applyMiddleware } from 'redux';
import { headerReducer } from './common/header/store';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  headerStore: headerReducer
});

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
