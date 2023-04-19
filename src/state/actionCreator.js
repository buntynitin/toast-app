import { actionTypes } from "./actionTypes"

export const addAction = (item) => {
    return {
        payload: item,
        type: actionTypes.addToCart
    }
}

export const removeAction = (item) => {
    return {
        payload: item,
        type: actionTypes.removeFromCart
    }
}

export const addQuantityAction = (item) => {
    return {
        payload: item,
        type: actionTypes.addQuantity
    }
}

export const decreaseQuantityAction = (item) => {
    return {
        payload: item,
        type: actionTypes.decreaseQuantity
    }
}

export const placeOrderAction = () => {
    return {
        type: actionTypes.placeOrder
    }
}

