import { SET_SELECTED_PRICE } from "../utils/actionTypes"

const initialState = {
    defaultPrice: [100, 650],
    selectedPrice: [],
    min: 100,
    max: 650,
}

export const priceReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SELECTED_PRICE:
            return {...state, selectedPrice: action.selectedPrice}
        default:
            return state
    }
}