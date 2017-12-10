import { combineReducers } from 'redux';
import items from './items';

const opubApp = combineReducers({
  items,
})

export default opubApp;
