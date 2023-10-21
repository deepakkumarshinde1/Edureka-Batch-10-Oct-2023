import { all } from "redux-saga/effects";
import { getCategoriesWatcher } from "./products/products.watcher";

export function* rootSaga() {
  console.log("rootSaga");
  let effectList = [getCategoriesWatcher()];
  yield all(effectList);
}
