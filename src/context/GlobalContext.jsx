
import * as React from 'react';
import { createContext, useEffect, useState } from "react";
import ProductList from '../mocks/ProductList';

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    

    const [cart, setCart] = useState([])
    const [prueba, setPrueba] = useState([])
    console.log("soy el global")

    
    return <GlobalContext.Provider value={{cart,setCart,prueba, setPrueba}}>
        {children}
    </GlobalContext.Provider>
}