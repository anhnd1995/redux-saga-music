import { call, put, takeEvery } from "@redux-saga/core/effects";
import * as ActionType from "../actions/music-action";

import { getAllTracks } from "../api/music-api";

// Get Tracks

function* getTracks() {
  yield put({ type: ActionType.SET_LOADING });
  const tracks = yield call(getAllTracks);

  yield put({ type: ActionType.GET_TRACKS, payload: tracks });
}

export default function* musicSaga() {
  yield takeEvery(ActionType.GET_TRACKS_REQUESTED, getTracks);
}
