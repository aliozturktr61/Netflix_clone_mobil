import {combineReducers} from '@reduxjs/toolkit';
import MovieReducer from './movieSlice';
import FavoriteReducer from './favoriteSlice';

export const rootReducer = combineReducers({
  movie: MovieReducer,
  favorites: FavoriteReducer,
});
