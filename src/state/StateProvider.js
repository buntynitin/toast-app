import React ,{ createContext, useContext ,useReducer } from "react";
export const CartContext = createContext();
export const CartStateProvider = ( {reducer, initialState, children}) => (
    <CartContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </CartContext.Provider>
)

export const useStateValue =() => useContext(CartContext)