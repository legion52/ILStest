import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_CURRENT_ADDRESS } from '../types/tasksType';
import axios from 'axios';
const ApiKey = '46c4928a-0d7b-403b-87a6-cf369f3d73ef'

const taskFetch = async (address) => {
  const address1 = await axios(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=${ApiKey}&geocode=${address[0]}`)
  const address2 = await axios(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=${ApiKey}&geocode=${address[1]}`)
  // console.log(address1);
  const res = [address1.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos, address2.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos]
  return res.join(',').split(' ').join(',').split(',')

}

function* taskWorker(action) {
   try {
      const task = yield call(taskFetch, action.payload);
      yield put({type: "GET_GEOCOD", payload:task});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}


function* currentTaskWatcher() {
  yield takeEvery(GET_CURRENT_ADDRESS, taskWorker);
}


export default currentTaskWatcher
