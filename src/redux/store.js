import {createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { snusReducer } from "./reducers/snusReducer";
import { inputReducer } from "../redux/reducers/inputReducer";
import { nicotineReducer } from "../redux/reducers/nicotineReducer";
import { priceReducer } from "../redux/reducers/priceReducer";

const rootReduser = combineReducers({
    snusReducer,
    inputReducer,
    nicotineReducer,
    priceReducer
})

export const store = createStore(rootReduser, composeWithDevTools())