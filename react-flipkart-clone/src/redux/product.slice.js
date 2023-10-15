import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    productList: [],
    categories: [],
  },
  reducers: {
    saveProductList: (state, action) => {
      state.productList = action.payload;
    },
    saveCategoryList: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export default ProductSlice;
export const { saveProductList, saveCategoryList } = ProductSlice.actions;
