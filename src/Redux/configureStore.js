import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import missionsReducer, { getMissionsFromAPI } from './Missions/missions';
import rocketsReducer, { getRocketsFromAPI } from './Rockets/rockets';

const reducer = combineReducers({
  rocketsReducer,
  missionsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(getRocketsFromAPI());
store.dispatch(getMissionsFromAPI());
export default store;
