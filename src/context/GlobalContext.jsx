
import * as React from 'react';
import { createContext, useEffect, useState } from "react";
import ProductList from '../mocks/ProductList';

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const [load, setLoad] = React.useState("CARGANDO . . .");
    const [products, setProducts] = React.useState([]);
    const [cart, setCart] = useState([])
    const [cart2, setCart2] = useState([])
    const [prueba, setPrueba] = useState([])
    
    const globalTest = () => {
        console.log("soy el global")
        console.log(typeof(products))
        console.log("BATMAN BEGINS")
        if(localStorage.length===0){
            setCart([])}
   
        // setCart([JSON.parse(localStorage.getItem(1))])
        // if(localStorage.length===0){
        //     setCart([])
        // }
        // setCart([])
        for(let i =0; i < localStorage.length; i++){
            let key = JSON.parse(localStorage.getItem(localStorage.key(i)))
            // alert(cart)
            // alert(cart.length)
            // for(let i =0; i < cart.length; i++){
            //     alert(cart)
            // }
            // alert(key)
            // setCarritoS([...carritoS, (JSON.parse(localStorage.getItem(localStorage.key(i))))])
            // alert(key)
            // setCart([...cart, [key]])
            cart.push(key)
        }


        // }

    }
    const globalTest2 = () => {
        if(localStorage.length===0){
        setCart([])}
        // setCart([""])
        for(let i =0; i < localStorage.length; i++){
            let key = JSON.parse(localStorage.getItem(localStorage.key(i)))
            // alert(i)
            // alert(key)
            // setCarritoS([...carritoS, (JSON.parse(localStorage.getItem(localStorage.key(i))))])
            // alert(key)
            // setCart([...cart, [key]])
            alert(key)
            // setCart([...cart, [key]])
            cart.push(key)
        }
    }
    async function firstAsync() {
        let promise = new Promise((res, rej) => {
            // console.log("test")
            // res("Now it's done!")
            setTimeout(() => res("Now it's done!"), 3000)
        });
    
        // wait until the promise returns us a value
        let result = await promise; 
      
        // "Now it's done!"
        alert(result); 
        }   

    React.useEffect(() => {
        const myPromise = new Promise ((resolve, reject) => {
            setTimeout(() => {    
                resolve(ProductList);
                // setLoad("");    
            }, 1500);
    });
        
        myPromise.then((result) => setProducts(result));

    },[]);   

    // console.log("soy el global")

    
    return <GlobalContext.Provider value={{cart,setCart,prueba, setPrueba, globalTest, products, setProducts,load, setLoad,globalTest2,cart2, setCart2,firstAsync}}>

        {children}
    </GlobalContext.Provider>
}