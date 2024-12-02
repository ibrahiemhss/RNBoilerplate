import { combineReducers } from '@reduxjs/toolkit';
import episodesReducer from 'store/slices/mainData.slice';
export default combineReducers({
  data: episodesReducer,
});
