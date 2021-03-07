import * as React from 'react'; 
import {Link} from 'react-router-dom';
import Item2 from './Item2';
import { GlobalContext } from "../../context/GlobalContext";



const ItemCart = ({productCart}) => {
    const [show, setShow] = React.useState(false);
    const {cart, setCart, globalTest,globalTest4,globalTest3,prueba, setPrueba, total,setTotal,renderFunction} = React.useContext(GlobalContext);
    const [productCarts, setProducts] = React.useState([]);
    const [contadorInicial, setContadorInicial] = React.useState(1);
    const [stockDisponible, setstockDisponible] = React.useState(productCart[9])//stock
   
    
    React.useEffect(()=>{
        console.log("CARTNOW")
        document.title = `${contadorInicial}`
        document.title = `${stockDisponible}`
        console.log("mounted stockDisponible")
        if(localStorage.getItem(productCart[0]) === null){
            setstockDisponible(productCart[9])
            console.log("localNull")
        }else{
            let variableCarrito = JSON.parse(localStorage.getItem(productCart[0]))
            setstockDisponible(productCart[9] - variableCarrito[3])
        }

        
        return () => {
            console.log("unmounted RIP ----")
        }
    },[contadorInicial]);
   
    const consoleLogItemCard = () => {
        console.log(total)
        // console.log(cart)
        // localStorage.getItem("2")
        // let user = JSON.parse(localStorage.getItem(productCart))
        // console.log(user.idProducto)
        // console.log(JSON.parse(productCart).id)
        // console.log(productCart.length)
        // console.log(cart[0])
        console.log(cart)
        

        // console.log(JSON.parse(localStorage.getItem(productCart[0]))[0])
        // console.log(productCart[9])
        // console.log(stockDisponible+" "+contadorInicial)
        // console.log(productCart[9]-stockDisponible)
        // console.log(typeof(productCart[2]))
    }

    const eliminarItem = () => {

        localStorage.removeItem(JSON.parse(localStorage.getItem(productCart[0]))[0])
        // window.location.reload(false)
        globalTest3()
        globalTest4()
        // window.location.reload(false)
        renderFunction()
      
    }
    ////////////////TEST
    function agregarCarrito(){
        if(contadorInicial <= stockDisponible){
            setstockDisponible(stockDisponible - contadorInicial)
            setContadorInicial(1)
            setShow(false)
            addLocalStorage()
            setCart([...cart, JSON.parse(localStorage.getItem(productCart[0]))])
            
        }else{
            alert("test")
        }
    } 
    function agregarCarrito2(){
        if(contadorInicial <= stockDisponible){
            setstockDisponible(stockDisponible - contadorInicial)
            setContadorInicial(1)
            setShow(false)
            addLocalStorage()
        }else{
            alert("No hay mas Stock")
        }
    } 
    function agregarCarrito3(){
        if(productCart[9]-stockDisponible>1 ){
            setstockDisponible(stockDisponible + contadorInicial)
            setContadorInicial(1)
            setShow(false)
            addLocalStorage2()
        }else{
            // alert("No hay mas Stock")
        }
    } 

    function sumastockDisponible(){
        if(contadorInicial <= stockDisponible - 1){
            setContadorInicial(contadorInicial + 1)
        }
    }
 
    const addLocalStorage = () => {
        localStorage.setItem(productCart[0], JSON.stringify([
            productCart[0],
            productCart[1],
            productCart[2],
            productCart[9] - (stockDisponible - contadorInicial),//stockDisponible agregada al carrito
            productCart[4],
            productCart[5],
            productCart[6],
            productCart[7],
            productCart[3]-(productCart[3] - (stockDisponible - contadorInicial)),
            productCart[9]//stock disponible
        ]))
        let total2 = 0
        for(let i =0; i < localStorage.length; i++){
            let key = JSON.parse(localStorage.getItem(localStorage.key(i)))
            console.log(key[0])
            total2 = total2 + ((key[2])*(key[3]))
            // total = total + key
        }
        setTotal(total2)
        console.log(total2)
        
    }
    const addLocalStorage2 = () => {
        localStorage.setItem(productCart[0], JSON.stringify([
            productCart[0],
            productCart[1],
            productCart[2],
            productCart[9] - (stockDisponible + contadorInicial),//stockDisponible agregada al carrito
            productCart[4],
            productCart[5],
            productCart[6],
            productCart[7],
            productCart[3]-(productCart[3] - (stockDisponible + contadorInicial)),
            productCart[9]//stock disponible
        ]))
        let total2 = 0
        for(let i =0; i < localStorage.length; i++){
            let key = JSON.parse(localStorage.getItem(localStorage.key(i)))
            console.log(key[0])
            total2 = total2 + ((key[2])*(key[3]))
            // total = total + key
        }
        setTotal(total2)
        console.log(total2)
        
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
        <p>stock Disponible: {stockDisponible}</p>
        <p>stockDisponible Agregada: {productCart[9]-stockDisponible}</p>
        <p>SubTotal: {(productCart[2]*(productCart[9]-stockDisponible))}</p>
        {/* <p>stockDisponible: { productCart[9]}</p> */}

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

