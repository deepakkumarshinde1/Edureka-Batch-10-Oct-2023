import { all } from "redux-saga/effects";
import {
  getCategoriesWatcher,
  getProductListWatcher,
} from "./products/products.watcher";

export function* rootSaga() {
  let effectList = [getCategoriesWatcher(), getProductListWatcher()];
  yield all(effectList);
}
