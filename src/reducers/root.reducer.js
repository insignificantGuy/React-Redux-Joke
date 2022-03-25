import {combineReducers} from 'redux';

import quoteReducer from './quote.reducers';
import todoReducer from './todo.reducers';

const rootReducer = combineReducers({
    quote:quoteReducer,
    todo:todoReducer,
});

export default rootReducer;