import { actionTypes } from "./actionTypes";
var cart = {current: [], placed: []}
export const cartInitialState = cart



const cartReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.addToCart:
            return {...state, current: [...state.current, {...action.payload, quantity: 1} ]}
        
        case actionTypes.removeFromCart:
            const current = state.current.filter((item)=>item.item_id !== action.payload.item_id)
            return {...state, current: current}

        case actionTypes.addQuantity:
            const newCurrentAdd = [...state.current]
            const itemIndexAdd = state.current.findIndex((item)=>item.item_id === action.payload.item_id)
            const itemAtIndexAdd = { ...state.current[itemIndexAdd], quantity: state.current[itemIndexAdd].quantity + 1}
            newCurrentAdd[itemIndexAdd] = itemAtIndexAdd
            return {...state, current: newCurrentAdd}
        
        case actionTypes.decreaseQuantity:
            const newCurrentDecrease = [...state.current]
            const itemIndexDecrease = state.current.findIndex((item)=>item.item_id === action.payload.item_id)
            const itemAtIndexDecrease = { ...state.current[itemIndexDecrease], quantity: state.current[itemIndexDecrease].quantity - 1}
            newCurrentDecrease[itemIndexDecrease] = itemAtIndexDecrease
            return {...state, current: newCurrentDecrease}

        case actionTypes.placeOrder:
            return {placed: [state.current, ...state.placed], current: []}

        default:
            return state;

    }
}


export default cartReducer