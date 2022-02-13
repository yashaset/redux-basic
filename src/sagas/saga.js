import { put, takeEvery, delay } from 'redux-saga/effects';

function* incrementAsync() {
  yield delay(4000);
  yield put({ type: 'INCREMENT_ASYNC', value: 1 });
}

export function* watchIncrement() {
  yield takeEvery('INCREMENT', incrementAsync);
}
