import { ADD_SNUS_ON_BASKET } from "../utils/actionTypes";
import { REMOVE_SNUS_ON_BASKET } from "../utils/actionTypes";


export const basketAddAC = (item) => {
    return {
        type: ADD_SNUS_ON_BASKET,
        item: item
    }
}

export const basketRemoveAC = (item) => {
    return {
        type: REMOVE_SNUS_ON_BASKET,
        item: item
    }
}

