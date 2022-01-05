import { SET_SELECTED_PRICE }from "../utils/actionTypes"

export const priceAC = (selectedPrice) => {
    return {
        type: SET_SELECTED_PRICE,
        selectedPrice: selectedPrice
    }
}