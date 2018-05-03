import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import artistReducer from "./artists";
import eventReducer from "./events"; 
import contactReducer from "./contacts"; 

const globalState = {
    artists: artistReducer,
    events: eventReducer, 
    contacts: contactReducer
};

const store = createStore(combineReducers(globalState), applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

export default store;