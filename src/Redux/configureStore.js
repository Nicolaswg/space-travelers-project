import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer, { getMissionsFromAPI } from './Missions/missions';
import rocketsReducer, { getRocketsFromAPI } from './Rockets/rockets';

const reducer = combineReducers({
  rocketsReducer,
  missionsReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

store.dispatch(getMissionsFromAPI());
store.dispatch(getRocketsFromAPI());
export default store;
