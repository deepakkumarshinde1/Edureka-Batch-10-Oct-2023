import { configureStore } from "@reduxjs/toolkit";
import reducer from "./combineReducer";
const store = configureStore({
  reducer,
});

export default store;
