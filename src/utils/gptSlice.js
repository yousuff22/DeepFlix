import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    showDeepseek: false,
    moiveNames: null,
    movieResults: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    toggleDeepseek: (state) => {
      state.showDeepseek = !state.showDeepseek;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResult } = action.payload; 
      state.moiveNames = movieNames;
      state.movieResults = movieResult;
    },
  },
});

export const { toggleDeepseek, toggleGptSearchView, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
