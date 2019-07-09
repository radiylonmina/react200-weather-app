import { combineReducers } from 'redux';
import searchbarReducer from './components/SearchBar/searchbarReducer.js';

const rootReducer = combineReducers({
// add reducers
  weatherInfo: searchbarReducer
});

export default rootReducer;
