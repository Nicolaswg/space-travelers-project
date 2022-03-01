import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer, { getMissionsFromAPI } from './Missions/missions';
// import rocketsReducer from './Rockets/rockets';
// import profileReducer from './Profile/profile';

const reducer = combineReducers({
  missionsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

store.dispatch(getMissionsFromAPI());
console.log(store);
export default store;
