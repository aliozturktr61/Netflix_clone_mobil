import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  trending: [],
  upcoming: [],
  topRated: [],
  movieDetail: {},
  movieCredits: [],
  movieSimilar: [],
  personDetail: {},
  personCredits: [],
  searchResults: [],
  loading: false,
  error: false,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setTrendingState: (state, action) => {
      state.trending = action.payload;
    },
    setUpcomingState: (state, action) => {
      state.upcoming = action.payload;
    },
    setTopRatedState: (state, action) => {
      state.topRated = action.payload;
    },
    setMovieDetailState: (state, action) => {
      state.movieDetail = action.payload;
    },
    setMovieCreditState: (state, action) => {
      state.movieCredits = action.payload;
    },
    setSimilarMoviesState: (state, action) => {
      state.movieSimilar = action.payload;
    },
    setPersonDetailState: (state, action) => {
      state.personDetail = action.payload;
    },
    setPersonMovieCreditsState: (state, action) => {
      state.personCredits = action.payload;
    },
    setSearchResultsState: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

export const {
  setTopRatedState,
  setTrendingState,
  setUpcomingState,
  setMovieDetailState,
  setMovieCreditState,
  setSimilarMoviesState,
  setPersonDetailState,
  setPersonMovieCreditsState,
  setSearchResultsState,
} = movieSlice.actions;

export default movieSlice.reducer;
