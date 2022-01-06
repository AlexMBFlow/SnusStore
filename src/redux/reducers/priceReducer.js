import { SET_SELECTED_PRICE_SLIDER } from "../utils/actionTypes";
import { SET_SORT_PRICE_SELECT } from "../utils/actionTypes";

const initialState = {
    defaultPrice: [400, 500],
    selectedPrice: [400, 500],
    min: 100,
    max: 650,
    sort: null
}

export const priceReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SELECTED_PRICE_SLIDER:
            return {...state, selectedPrice: action.selectedPrice}
        case SET_SORT_PRICE_SELECT:
            return {...state, sort: action.sort}
        default:
            return state
    }
}