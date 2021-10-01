import { ADD_CART, REM_CART } from "./actionTypes"

export const addToCart = (product)=>({
    type: ADD_CART,
    product
})

export const removeFromCart=(list)=>({
    type: REM_CART,
    list
})