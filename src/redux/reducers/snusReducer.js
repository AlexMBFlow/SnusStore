import { snusStore } from "../snusStore/snusStore";

const initialState = snusStore

export const snusReducer = (state = initialState, action) => {
    switch(action.type) {

        case "ADD" :
            return { ...state, value: state.value + action.value }

        default:
            return state
    }
}