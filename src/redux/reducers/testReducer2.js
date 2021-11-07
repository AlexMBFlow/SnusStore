const initialState = {
    jopa: 228
}

export const testReducer2 = (state = initialState, action) => {
    switch(action.type) {

        case "ADD2" :
            return { ...state, value: state.value2 + action.value }

        default:
            return state
    }
}