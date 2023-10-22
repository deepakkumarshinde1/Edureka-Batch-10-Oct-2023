import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    productList: [],
    categories: [],
    error: {
      isError: false,
      message: "",
    },
  },
  reducers: {
    saveProductList: (state, action) => {
      state.productList = action.payload;
    },
    saveCategoryList: (state, action) => {
      state.categories = action.payload;
    },
    getCategoryList: (state, action) => {},
    getProductList: (state, action) => {},
    setError: (state, action) => {
      state.error = {
        isError: true,
        message: action.payload,
      };
    },
    resetError: (state) => {
      state.error = {
        isError: false,
        message: "",
      };
    },
  },
});

export default ProductSlice;
export const {
  resetError,
  setError,
  getCategoryList,
  saveProductList,
  saveCategoryList,
  getProductList,
} = ProductSlice.actions;
