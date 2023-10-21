import { call, put } from "redux-saga/effects";
import { getCategoriesService } from "./products.service";
import { saveCategoryList, setError } from "../../product.slice";

export function* getCategoriesHandler() {
  try {
    console.log("handler");
    let data = yield call(getCategoriesService);
    yield put(saveCategoryList(data));
  } catch (error) {
    //console.log(error);
    yield put(setError("Unable to get data"));
  }
}
