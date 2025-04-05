import { configureStore } from "@reduxjs/toolkit";
import userreducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice"

const appStore = configureStore({
  reducer: {
    user: userreducer,
    movies: moviesReducer,
    gpt: gptReducer
  },
});

export default appStore;