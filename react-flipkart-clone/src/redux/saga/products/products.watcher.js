import { takeLatest } from "redux-saga/effects";
import { getCategoryList, getProductList } from "../../product.slice";
import {
  getCategoriesHandler,
  getProductListHandler,
} from "./products.handler";

export function* getCategoriesWatcher() {
  yield takeLatest(getCategoryList.type, getCategoriesHandler);
}

export function* getProductListWatcher() {
  yield takeLatest(getProductList.type, getProductListHandler);
}
