

import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const [cart, setCart] = useState([{id:1,name:"emi"}])

    
    //useEffect
    return <GlobalContext.Provider value={{cart,setCart}}>
        {children}
    </GlobalContext.Provider>
}