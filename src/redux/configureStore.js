import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rocketsReducer from './rockets/rockets';
import missionReducer from './mission/mission';

export const reducer = combineReducers({
  rockets: rocketsReducer,
  missionReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
