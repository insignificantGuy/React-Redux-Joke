//import { getNewQuotes} from "../saga/quote.saga";
import QuoteTypes from "../actionTypes/quote.types";

// Spread Operator

const INITIAL_STATE = {
    quote:'Let\'s Find a new Joke'
};

const quoteReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case QuoteTypes.GET_NEW_QUOTE:{
            console.log("Activated");
            // const newJoke = getNewQuotes();
            // console.log(newJoke);
            return {
                ...state
            };
        }
        case QuoteTypes.SHOW_NEW_JOKE:{
            return{
                ...state,
                quote:action.quote
            }
        }
        default:{
            return {...state}
        }
    }
}

export default quoteReducer;