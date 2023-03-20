import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"


import globalReducer from "./global/reducer";




const rootReducer = combineReducers({
    global: globalReducer
})


export const Store = createStore(rootReducer, applyMiddleware(thunk))