import axios from 'axios';
import QuoteTypes from '../actionTypes/quote.types';
import url from '../URL/url';
import { put, takeEvery } from 'redux-saga/effects'


function* getNewQuotes() {
    try{
        const newQuote = yield axios.get(url.BASE_URL);
        yield put({type:QuoteTypes.SHOW_NEW_JOKE,quote:newQuote.data.joke})
    }
    catch(err){
        yield put({type:QuoteTypes.SHOW_ERROR_MESSAGE,quote:'Some Error Occured'});
    }
};

//use Saga Here, Don't use Promises
//Create another URL file and import that and use here.

export default function* quoteSaga(){
    yield takeEvery('GET_NEW_QUOTE',getNewQuotes);
}