import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/root.reducer';

import rootSaga from './saga/root.saga';
import thunk from 'redux-thunk';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk,sagaMiddleware]; 

const store = createStore(rootReducer,applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;




