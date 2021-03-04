import * as React from 'react'; 
import {Link} from 'react-router-dom';
import Item2 from './Item2';
import { GlobalContext } from "../../context/GlobalContext";
import Test from '../Item/Test'


const ItemCart = ({productCart}) => {
    const [show, setShow] = React.useState(false);
    const {cart, setCart, globalTest,globalTest4,globalTest3,prueba, setPrueba} = React.useContext(GlobalContext);
    const [productCarts, setProducts] = React.useState([]);

    const [cantidad2, setCantidad2] = React.useState(1);
    const [cantidad, setCantidad] = React.useState(productCart[9])//stock
    const[total,setTotal] = React.useState(0);
    
    React.useEffect(()=>{
        document.title = `${cantidad2}`
        //
        document.title = `${cantidad}`
        console.log("mounted cantidad")
        if(localStorage.getItem(productCart[0]) === null){
            setCantidad(productCart[9])
            console.log("localNull")
        }else{
            let variableCarrito = JSON.parse(localStorage.getItem(productCart[0]))
            setCantidad(productCart[9] - variableCarrito[3])
        }



        return () => {
            console.log("unmounted RIP ----")
        }
    },[cantidad2]);
   
    const consoleLogItemCard = () => {
        // console.log(cart)
        // localStorage.getItem("2")
        // let user = JSON.parse(localStorage.getItem(productCart))
        // console.log(user.idProducto)
        // console.log(JSON.parse(productCart).id)
        // console.log(productCart.length)
        // console.log(cart[0])
        console.log(cart)
        
        for(let i =0; i < cart.length; i++){
            console.log(cart[i][2])
        }
        // console.log(JSON.parse(localStorage.getItem(productCart[0]))[0])
        // console.log(productCart[9])
        // console.log(cantidad+" "+cantidad2)
        // console.log(productCart[9]-cantidad)
        // console.log(typeof(productCart[2]))
    }

    const eliminarItem = () => {

        localStorage.removeItem(JSON.parse(localStorage.getItem(productCart[0]))[0])
        // window.location.reload(false)
        globalTest3()
        globalTest4()
        window.location.reload(false)
    }
    ////////////////TEST
    function agregarCarrito(){
        if(cantidad2 <= cantidad){
            setCantidad(cantidad - cantidad2)
            setCantidad2(1)
            setShow(false)
            addLocalStorage()
            setCart([...cart, JSON.parse(localStorage.getItem(productCart[0]))])
            
        }else{
            alert("test")
        }
    } 
    function agregarCarrito2(){
        if(cantidad2 <= cantidad){
            setCantidad(cantidad - cantidad2)
            setCantidad2(1)
            setShow(false)
            addLocalStorage()
        }else{
            alert("No hay mas Stock")
        }
    } 
    function agregarCarrito3(){
        if(productCart[9]-cantidad>1 ){
            setCantidad(cantidad + cantidad2)
            setCantidad2(1)
            setShow(false)
            addLocalStorage2()
        }else{
            // alert("No hay mas Stock")
        }
    } 

    function sumaCantidad(){
        if(cantidad2 <= cantidad - 1){
            setCantidad2(cantidad2 + 1)
        }
    }
 
    const addLocalStorage = () => {
        localStorage.setItem(productCart[0], JSON.stringify([
            productCart[0],
            productCart[1],
            productCart[2],
            productCart[9] - (cantidad - cantidad2),//cantidad agregada al carrito
            productCart[4],
            productCart[5],
            productCart[6],
            productCart[7],
            productCart[3]-(productCart[3] - (cantidad - cantidad2)),
            productCart[9]//stock disponible
        ]))
        
    }
    const addLocalStorage2 = () => {
        localStorage.setItem(productCart[0], JSON.stringify([
            productCart[0],
            productCart[1],
            productCart[2],
            productCart[9] - (cantidad + cantidad2),//cantidad agregada al carrito
            productCart[4],
            productCart[5],
            productCart[6],
            productCart[7],
            productCart[3]-(productCart[3] - (cantidad + cantidad2)),
            productCart[9]//stock disponible
        ]))
        
    }
    // const test4 = () => {
    //     console.log(JSON.parse(localStorage.getItem(producto.id))[4])
    // }


    return <div className="card col-md-6">
        <h3>{productCart[1]}</h3>
        {/* <p>ID: {Object.values(localStorage)}</p> */}
        {/* <p>IdProducto: {productCart}</p>
        <p>nombre: {productCart}</p> */}
        {/* <p>stock Disponible: {productCart[3]}</p> */}
        <p>stock Disponible: {cantidad}</p>
        <p>Cantidad Agregada: {productCart[9]-cantidad}</p>
        <p>SubTotal: {(productCart[2]*(productCart[9]-cantidad))}</p>
        {/* <p>Cantidad: { productCart[9]}</p> */}

        {/* <p>IdProducto: {productCart}</p> */}
        {/* <p>Stock: {products.producto.nombre}</p> */}
        <button onClick={eliminarItem}> eliminarItem</button>
        <button onClick={consoleLogItemCard}> consoleLogItemCard</button>
        <button onClick={() => {{agregarCarrito2()}}}> +</button>
        <button onClick={() => {{agregarCarrito3()}}}> -</button>
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
