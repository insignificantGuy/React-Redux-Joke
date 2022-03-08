import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import quoteReducer from'./reducers/quote.reducers';

import mysaga from './saga/quote.saga';
import thunk from 'redux-thunk';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk,sagaMiddleware]; 

const store = createStore(quoteReducer,applyMiddleware(...middlewares));

sagaMiddleware.run(mysaga);

export default store;




