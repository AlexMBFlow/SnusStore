const initialState = {
    govno: 1337
}

export const testReducer = (state = initialState, action) => {
    switch(action.type) {

        case "ADD" :
            return { ...state, value: state.value + action.value }

        default:
            return state
    }
}