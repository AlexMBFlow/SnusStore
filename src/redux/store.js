import {createStore, combineReducers } from 'redux';
import {testReducer} from './reducers/testReducer';
import {testReducer2} from './reducers/testReducer2'
import { composeWithDevTools } from 'redux-devtools-extension'
import { snusReducer } from "./reducers/snusReducer"

const rootReduser = combineReducers({
    testReducer,
    testReducer2,
    snusReducer
})

export const store = createStore(rootReduser, composeWithDevTools() )