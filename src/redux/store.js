import {createStore, combineReducers } from 'redux';
import {testReducer} from './reducers/testReducer';
import {testReducer2} from './reducers/testReducer2';
import { composeWithDevTools } from 'redux-devtools-extension';
import { snusReducer } from "./reducers/snusReducer";
import { inputReducer } from "../redux/reducers/inputReducer";
import { nicotineReducer } from "../redux/reducers/nicotineReducer";
import { priceReducer } from "../redux/reducers/priceReducer";

const rootReduser = combineReducers({
    testReducer,
    testReducer2,
    snusReducer,
    inputReducer,
    nicotineReducer,
    priceReducer
})

export const store = createStore(rootReduser, composeWithDevTools() )