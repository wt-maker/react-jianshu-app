import { combineReducers } from 'redux-immutable';
import { createStore, applyMiddleware, compose } from 'redux';
import { headerReducer } from './common/header/store';
import { homeReducer } from './pages/home/store'
import { detailReducer } from './pages/detail/store';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  headerStore: headerReducer,
  homeStore: homeReducer,
  detailStore: detailReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
	applyMiddleware(thunk)
));

export default store;
