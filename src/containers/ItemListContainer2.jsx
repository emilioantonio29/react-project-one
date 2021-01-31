
// 
import React, {useState, useEffect} from 'react';

// const ItemListContainer2 = () =>{
//     const [carrito, setCarrito] = useState('test');
//     return(
//         <>
//             {console.log(carrito)}
//             {carrito}
//             <button onClick={()=>{setCarrito('hola, soy el nuevo valor')}}> Cambiar estado</button>
            
//         </>
//     )

// }

const ItemListContainer2 = () =>{
    const [carrito, setCarrito] = useState([]);

    useEffect(()=>{
        // consultas a la BD, suscripciones como addeventlistener
        console.log("mounted")
        return () => {
            // remove listener
            // desuscripción BD
            console.log("unmounted RIP")
        }
    },[]) // filtro para saber cuando se ejecuta el useEffect
    // corchete vacio: Se ejecuta el useEffect en el onMount

    // se vuelve a renderizar, validaciones
    console.log("por Renderizar")
    return(
        <>
            {console.log(carrito)}
            {/* {carrito} */}
            <button onClick={()=>{setCarrito([...carrito, {name: 'producto test'}])}}> Cambiar estado</button>
            <div>
                {/* {carrito} */}
            </div>
           
        </>
    )

}

export default ItemListContainer2;