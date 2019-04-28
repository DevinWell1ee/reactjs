// Saga = Worker + Watcher

import { put, takeEvery } from 'redux-saga/effects'
import fly from 'flyio'

// workerr
export function* randomAsync () {
  const res = yield fly.get('https://www.easy-mock.com/mock/5b9234da025e8441af034a43/api/random')
  const value = res.data.data.num
  console.log(value)
  yield put({ type: 'GAIN_RANDOM', value })
}

// watcher


// root
export default function* rootSaga() {
  console.log('@@@')
  yield takeEvery('RANDOM', randomAsync)
}

