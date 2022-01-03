import {SET_INITIAL_SNUS} from "../utils/actionTypes";

const plainOptions = ["Легкий", "Средний", "Крепкий", "Очень крепкий"];
const defaultCheckedList = ["Средний", "Крепкий", "Очень крепкий"];    

const initialState = {
    checkedList: ["Средний", "Крепкий", "Очень крепкий"],
    indeterminate: true,
    checkAll: false
}

export const setInitialNicotineReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIAL_SNUS:            
            return [...state, ]
        default:
            return state
    }
} 