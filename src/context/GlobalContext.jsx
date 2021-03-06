
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
    const [total, setTotal] = useState(0)
    const [unusedState, setUnusedState] = useState()
    const [TESTER, TESTERS] = useState([])
    // React.useEffect(() => {
    //     const myPromise = new Promise ((resolve, reject) => {
    //         setTimeout(() => {    
    //             resolve(ProductList);
    //             // setLoad("");    
    //         }, 1500);
    // });
        
    //     myPromise.then((result) => setProducts(result));

    // },[]);   
    React.useEffect(() => {
        const myPromise = new Promise ((resolve, reject) => {
            setTimeout(() => {    
                resolve(ProductList);
                // setLoad("");    
            }, 1500);
    });
        
        myPromise.then((result) => setProducts(result));

    },[]);   
    React.useEffect(()=>{
        // consultas a la BD, suscripciones como addeventlistener
        console.log("im glibal")
        // for(let i =0; i < localStorage.length; i++){
        //     let key = JSON.parse(localStorage.getItem(localStorage.key(i)))
        //     cart.push(key)
        // }
        return () => {

            console.log("unmounted RIP GLOBAL")

        }
    },[]);
    // const globalTest5 = () => {
       
    //     window.location.reload(false)
    // }
    const globalTest3 = () => {
       
        setCart([])
        // TESTERS(TESTER+1)
    }
    const globalTest4 = () => {
       
        for(let i =0; i < localStorage.length; i++){
            let key = JSON.parse(localStorage.getItem(localStorage.key(i)))
            cart.push(key)
        }

    }
    
    
    const globalTest = () => {
        TESTERS([])
        let total2 = 0
        for(let i =0; i < localStorage.length; i++){
            let key = JSON.parse(localStorage.getItem(localStorage.key(i)))
            console.log(key[0])
            // total2 = total2 + ((key[2])*(key[3]))
            TESTER.push(key); 

        }
     
        // setTotal(total2)
        // console.log(total2)
        // document.title = `${total}`
        // console.log(cart)
        // console.log(carrito)

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
            // alert(key)
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


    // console.log("soy el global")

    
    return <GlobalContext.Provider value={{cart,setCart,prueba, setPrueba, globalTest, products, setProducts,load, setLoad,globalTest2,cart2, setCart2,firstAsync,globalTest3,globalTest4,total, setTotal,TESTER}}>

        {children}
    </GlobalContext.Provider>
}