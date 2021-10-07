import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rocketsReducer from './rockets/rockets';

export const reducer = combineReducers({
  rockets: rocketsReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
