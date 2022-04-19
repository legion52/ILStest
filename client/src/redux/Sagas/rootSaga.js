import { all } from 'redux-saga/effects'
import currentTaskWatcher from './currentTaskSaga'
import taskWatcher from './taskSaga'

export default function* rootSaga() {
  yield all([
    taskWatcher(),
    currentTaskWatcher(),
  ])
  // code after all-effect
}
