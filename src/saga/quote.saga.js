import axios from 'axios';
import QuoteTypes from '../actionTypes/quote.types';
import url from '../URL/url';
import { put, takeEvery } from 'redux-saga/effects'


export function* getNewQuotes() {
    try{
        console.log("Passed to Me");
        console.log(url.BASE_URL);
        const newQuote = yield axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(newQuote);
        yield put({type:QuoteTypes.SHOW_NEW_JOKE,quote:newQuote.data[0].name})
    }
    catch(err){
        console.log(err);
    }
};

//use Saga Here, Don't use Promises
//Create another URL file and import that and use here.

export default function* mysaga(){
    yield takeEvery('GET_NEW_QUOTE',getNewQuotes);
}