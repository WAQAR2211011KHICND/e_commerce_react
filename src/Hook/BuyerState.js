import React, { useState } from 'react'
import { buyerContext } from './buyerContext'

export const BuyerState = ({children}) => {

    let stateObject ={};

    const products = StateCreation(null);
    const carts = StateCreation(null);
    stateObject ={...stateObject, products,carts};


  return (
    <buyerContext.Provider value={{...stateObject}} >{children}</buyerContext.Provider >
  )

}

const StateCreation = (initialValue)=> {
    const [newState, setNewState] = useState(initialValue);
    return {
        value     : newState,
        setValue  : (newValue)=>setNewState(newValue) 
    }
}