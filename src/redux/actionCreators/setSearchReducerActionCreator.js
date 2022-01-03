import { SEARCH_SNUS_INPUT }from "../utils/actionTypes"
export const snusSearchAC = (payload) => {
    return {
        type: SEARCH_SNUS_INPUT,
        payload: payload
    }
}