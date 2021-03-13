import { configureStore } from '@reduxjs/toolkit';
import DisplayGistReducer from "../DisplayGist/DisplayGistSlice";

export default configureStore({
    reducer: {
      DisplayGistReducer
    }
  })