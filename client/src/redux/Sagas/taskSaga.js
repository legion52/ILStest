import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_ALL_ADDRESS } from '../types/tasksType';
import axios from 'axios';

const taskFetch = async () => {
  const data = await axios('/')
return data.data.allAddress

}

function* taskWorker(action) {
   try {
      const tasks = yield call(taskFetch);
      console.log(tasks);
      yield put({type: "GET_ALL_ADDRESS_FROM_SERVER", payload:tasks});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}


function* taskWatcher() {
  yield takeEvery(GET_ALL_ADDRESS, taskWorker);
}



export default taskWatcher;
