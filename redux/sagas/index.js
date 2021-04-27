import { all, spawn } from "redux-saga/effects";

// Sagas
import todoSaga from "./todo-saga";
import musicSaga from "./music-saga";

// Export the root saga
export default function* rootSaga() {
  // console.log("Hello From Redux-Saga!");

  yield spawn(musicSaga);
}
