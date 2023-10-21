import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import reducer from "./combineReducer";
import { rootSaga } from "./saga/rootSaga";
let sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
export default store;
