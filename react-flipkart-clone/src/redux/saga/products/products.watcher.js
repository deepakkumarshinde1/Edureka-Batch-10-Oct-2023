import { takeLatest } from "redux-saga/effects";
import { getCategoryList } from "../../product.slice";
import { getCategoriesHandler } from "./products.handler";

export function* getCategoriesWatcher() {
  console.log("watcher");
  yield takeLatest(getCategoryList.type, getCategoriesHandler);
}
