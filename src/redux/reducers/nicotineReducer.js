import { CHANGE_CHECKED_LIST }from "../utils/actionTypes"

const initialState = {
    checkedList: ["Средний", "Крепкий", "Очень крепкий"],
    indeterminate: true,
    checkAll: false
}

export const nicotineReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CHECKED_LIST:
            return {...state, checkedList: action.list}
        default:
            return state
    }
}