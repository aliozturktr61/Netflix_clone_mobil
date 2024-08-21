import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        movie => movie.id !== action.payload.id,
      );
    },
  },
});

export const {addFavorite, removeFavorite} = favoriteSlice.actions;

export const selectFavorites = state => state.favorites.favorites;

export default favoriteSlice.reducer;
