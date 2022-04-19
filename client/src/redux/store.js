import { applyMiddleware, createStore } from "redux";
import { initState } from "./initState";
import { rootReducer } from "./reducers/rootReducer";
import createSagaMiddleware from 'redux-saga'
import taskWatcher from "./Sagas/taskSaga";
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, initState, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(taskWatcher)
