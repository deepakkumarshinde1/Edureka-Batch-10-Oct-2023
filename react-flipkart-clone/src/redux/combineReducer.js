import { combineReducers } from "@reduxjs/toolkit";
import ProductSlice from "./product.slice";

const reducer = combineReducers({
  products: ProductSlice.reducer,
});

export default reducer;
