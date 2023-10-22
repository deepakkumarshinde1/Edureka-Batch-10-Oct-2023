import { call, put } from "redux-saga/effects";
import {
  getCategoriesService,
  getProductListService,
} from "./products.service";
import {
  saveCategoryList,
  saveProductList,
  setError,
} from "../../product.slice";

export function* getCategoriesHandler() {
  try {
    let data = yield call(getCategoriesService);
    yield put(saveCategoryList(data));
  } catch (error) {
    //console.log(error);
    yield put(setError("Unable to get data"));
  }
}

export function* getProductListHandler(action) {
  try {
    let data = yield call(getProductListService, { c_id: action.payload });
    yield put(saveProductList(data));
  } catch (error) {
    yield put(setError("Unable to get product details."));
  }
}
