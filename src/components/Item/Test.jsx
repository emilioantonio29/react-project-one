import * as React from 'react'; 
import {Link} from 'react-router-dom';
import Item2 from './Item2';
import { GlobalContext } from "../../context/GlobalContext";
import Test from '../Item/Test'


const ItemCart = ({productTotal}) => {



    const [show, setShow] = React.useState(false);
    const {cart, setCart, globalTest,globalTest4,globalTest3,prueba, setPrueba} = React.useContext(GlobalContext);


    const [cantidad2, setCantidad2] = React.useState(1);
    const [cantidad, setCantidad] = React.useState(productTotal[9])//stock
    const[total,setTotal] = React.useState(0);
    
    React.useEffect(()=>{
        document.title = `${cantidad2}`
        //
        document.title = `${cantidad}`
        console.log("mounted cantidad")
        if(localStorage.getItem(productTotal[0]) === null){
            setCantidad(productTotal[9])
            console.log("localNull")
        }else{
            let variableCarrito = JSON.parse(localStorage.getItem(productTotal[0]))
            setCantidad(productTotal[9] - variableCarrito[3])
        }



        return () => {
            console.log("unmounted RIP ----")
        }
    },[cantidad2]);
   
    const consoleLogItemCard = () => {
        // console.log(cart)
        // localStorage.getItem("2")
        // let user = JSON.parse(localStorage.getItem(productTotal))
        // console.log(user.idProducto)
        // console.log(JSON.parse(productTotal).id)
        // console.log(productTotal.length)
        // console.log(cart[0])
        console.log(cart)
        
        for(let i =0; i < cart.length; i++){
            console.log(cart[i][2])
            
        }
        // console.log(JSON.parse(localStorage.getItem(productTotal[0]))[0])
        // console.log(productTotal[9])
        // console.log(cantidad+" "+cantidad2)
        // console.log(productTotal[9]-cantidad)
        // console.log(typeof(productTotal[2]))
    }

    const eliminarItem = () => {

        localStorage.removeItem(JSON.parse(localStorage.getItem(productTotal[0]))[0])
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
            setCart([...cart, JSON.parse(localStorage.getItem(productTotal[0]))])
            
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
        if(productTotal[9]-cantidad>1 ){
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
        localStorage.setItem(productTotal[0], JSON.stringify([
            productTotal[0],
            productTotal[1],
            productTotal[2],
            productTotal[9] - (cantidad - cantidad2),//cantidad agregada al carrito
            productTotal[4],
            productTotal[5],
            productTotal[6],
            productTotal[7],
            productTotal[3]-(productTotal[3] - (cantidad - cantidad2)),
            productTotal[9]//stock disponible
        ]))
        
    }
    const addLocalStorage2 = () => {
        localStorage.setItem(productTotal[0], JSON.stringify([
            productTotal[0],
            productTotal[1],
            productTotal[2],
            productTotal[9] - (cantidad + cantidad2),//cantidad agregada al carrito
            productTotal[4],
            productTotal[5],
            productTotal[6],
            productTotal[7],
            productTotal[3]-(productTotal[3] - (cantidad + cantidad2)),
            productTotal[9]//stock disponible
        ]))
        
    }
    // const test4 = () => {
    //     console.log(JSON.parse(localStorage.getItem(producto.id))[4])
    // }


    return <div className="card col-md-6">
        

        <h1>s</h1>
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

