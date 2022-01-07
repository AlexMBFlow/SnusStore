//import { SEARCH_SNUS_INPUT } from "../utils/actionTypes"

const initialState = {
    snusBasket: [{
        name: "Corvus",
        taste: "Клубника",
        packs: 25,
        nicotine: 50,
        saturation: "Средний",
        price: 450,
        avatar: 'https://snus-upi.ru/assets/images/products/641/small/66.jpg',
        id: 3
    },
    {
        name: "RED",
        taste: "Арбуз",
        packs: 20,
        nicotine: 50,
        saturation: "Крепкий",
        price: 500,
        avatar: 'https://snus-upi.ru/assets/images/products/641/small/66.jpg',
        id: 4
    }]
}

export const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_SNUS_TO_BASKET":            
            return {...state}
        default:
            return state
    }
} 