import { ADD_SNUS_ON_BASKET } from "../utils/actionTypes";
import { REMOVE_SNUS_ON_BASKET } from "../utils/actionTypes";

const initialState = {
    snusBasket: []
}

export const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SNUS_ON_BASKET:
            return {...state, snusBasket: [...state.snusBasket, action.item]}
        case REMOVE_SNUS_ON_BASKET:
            return {...state, snusBasket: state.snusBasket.filter( el => el.id !== action.id)}
        default:
            return state
    }
} 