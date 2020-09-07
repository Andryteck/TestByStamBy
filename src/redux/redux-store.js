import thunk from 'redux-thunk';
import {cardReducer} from "./card-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";


let reducers = combineReducers({
    card: cardReducer
})

const store = createStore(reducers, applyMiddleware(thunk));
export default store

