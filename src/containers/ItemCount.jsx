import './style.css'
import React, {useState, useEffect} from 'react';


  const ItemCount = () =>{
    const [cantidad, setCantidad] = useState(1);

    useEffect(()=>{
        // consultas a la BD, suscripciones como addeventlistener
        document.title = `${cantidad}`
        console.log("mounted")
        return () => {
            // remove listener
            // desuscripción BD
            console.log("unmounted RIP")
        }
    },[]) 
    // [] filtro para saber cuando se ejecuta el useEffect
    // corchete vacio: Se ejecuta el useEffect en el onMount

    // se vuelve a renderizar, validaciones
    // console.log("por Renderizar")
    return(
        <>
            <div className="d-flex align-items-center justify-content-between cajaCount">
                <div>
                    <button onClick={()=>{setCantidad(cantidad < 2 ? cantidad : cantidad - 1 )}}>-</button> 
                </div>
                <div>
                    <p>{cantidad}</p>
                </div>
                <div className="">
                <button onClick={()=>{setCantidad(cantidad + 1)}}>+</button>
                </div>
            </div>
        </>
    )

}
  
  
  export default ItemCount;