import { applyMiddleware, createStore } from "redux";
import { initState } from "./initState";
import { rootReducer } from "./reducers/rootReducer";
import createSagaMiddleware from 'redux-saga'
import taskWatcher from "./Sagas/taskSaga";
import currentTaskWatcher from "./Sagas/currentTaskSaga";
import { composeWithDevTools } from 'redux-devtools-extension';
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, initState, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(taskWatcher)
sagaMiddleware.run(currentTaskWatcher)
