import * as React from 'react'; 
import {Link} from 'react-router-dom';
import Item2 from './Item2';


const ItemCart = ({productCart}) => {
    const [show, setShow] = React.useState(false);

    React.useEffect(()=>{
        console.log("mountedItemCart")
        // console.log("yo")
        // console.log(productCart.length)
        // console.log(carrito[localStorage.key])
        // console.log(carrito[1])
        // JSON.parse(carrito)
        // console.log(carrito)
        // console.log(Object.values(localStorage))
        // setShow(false)
        
        return () => {
            // remove listener
            // desuscripción BD
            console.log("unmounted RIPCART")
        
        }
    },[]);
   
    const consoleLogItemCard = () => {
        console.log(productCart)
        // localStorage.getItem("2")
        // let user = JSON.parse(localStorage.getItem(productCart))
        // console.log(user.idProducto)
        console.log(JSON.parse(productCart).id)
        // console.log(productCart.length)
    }

    const eliminarItem = () => {

        localStorage.removeItem(JSON.parse(productCart).id)
        window.location.reload(false)
    }



    return <div className="card col-md-6">
        {/* <h3>{products.id}</h3> */}
        {/* <p>ID: {Object.values(localStorage)}</p> */}
        <p>IdProducto: {JSON.parse(productCart).id}</p>
        <p>nombre: {JSON.parse(productCart).nombre}</p>
        <p>stock Disponible: {JSON.parse(productCart).stock}</p>
        <p>Cantidad Agregada: {JSON.parse(productCart).cantidad}</p>
        {/* <p>Stock: {products.producto.nombre}</p> */}
        <button onClick={eliminarItem}> eliminarItem</button>
        <button onClick={consoleLogItemCard}> consoleLogItemCard</button>
        {/* <Item2/> */}
        {/* {show ? (<p>hay items</p>) : (<p>NO HAY ITEMS AGREGADOS AL CARRITO</p> )} */}
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
