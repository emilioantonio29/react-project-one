import * as React from 'react'; 
import {Link} from 'react-router-dom';


const ItemCart = ({productCart}) => {

    React.useEffect(()=>{
        console.log("mountedItemCart")
        console.log(productCart)
        // console.log(carrito[localStorage.key])
        // console.log(carrito[1])
        // JSON.parse(carrito)
        // console.log(carrito)
        // console.log(Object.values(localStorage))
        return () => {
            // remove listener
            // desuscripción BD
            console.log("unmounted RIP")
        }
    },[]);

    const test = () => {
        console.log(productCart)
    }
    // for(let i =0; i < localStorage.length; i++){
    //     // console.log("TS")
    //     console.log(i)
    //     // console.log(Object.values(localStorage))
    //     carrito = JSON.parse(window.localStorage.getItem(i));
    //   }
    // console.log(carritoS)


    return <div className="card col-md-6">
        {/* <h3>{products.id}</h3> */}
        {/* <p>ID: {Object.values(localStorage)}</p> */}
        <p>ID: {productCart}</p>
        {/* <p>Stock: {products.producto.nombre}</p> */}
        <button onClick={test}> test2</button>
    </div>
    
}

export default ItemCart;

// gold
// var arr = ["124857202", "500255104", "78573M104"];
// var res = arr.reduce(function(s, a){
//     s.push({name: a});
//     return s;
//   }, [])
  
// console.log(res);
