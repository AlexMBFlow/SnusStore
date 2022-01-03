import { SEARCH_SNUS_INPUT }from "../utils/actionTypes"
export const inputReducerAC = (payload) => {
    return {
        type: SEARCH_SNUS_INPUT,
        payload: payload
    }
}