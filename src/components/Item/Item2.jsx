import ItemCount from "../../containers/ItemCount"
import React, {useState, useEffect} from 'react';
import { GlobalContext } from "../../context/GlobalContext";
import {Link} from 'react-router-dom';


const Item2 = ({producto}) => {
    
    const [cantidad2, setCantidad2] = useState(1);
    const [cantidad, setCantidad] = useState(producto.cantidad)
    // const [producto, setproducto] = React.useState([]);

    const [show, setShow] = useState(true);
    const {cart,setCart,prueba, setPrueba, globalTest, products, setProducts,load, setLoad} = React.useContext(GlobalContext);
    // const {prueba, setPrueba} = React.useContext(GlobalContext);
    // const cart = React.useContext(GlobalContext);
    console.log(cart)

    React.useEffect(()=>{
        // consultas a la BD, suscripciones como addeventlistener
        document.title = `${cantidad2}`
        console.log("mounted cantidad2")
        console.log(producto.id)
        setPrueba(producto)
        // console.log('esto es cart'+cart)
        return () => {
            // remove listener
            // desuscripción BD
            console.log("unmounted RIP ITEM2")
            // globalTest()
        }
    },[cantidad2]);

    React.useEffect(()=>{
        // consultas a la BD, suscripciones como addeventlistener
        document.title = `${cantidad}`
        // setCantidad(1)
        console.log("mounted cantidad")
        if(localStorage.getItem(producto.id) === null){
            setCantidad(producto.cantidad)
            console.log("localNull")
        }else{
            let variableCarrito = JSON.parse(localStorage.getItem(producto.id))
            // alert(variableCarrito[3])
            setCantidad(producto.cantidad - variableCarrito[3])
            // setCantidad("SIN STOCK")
        }
        return () => {
            // remove listener
            // desuscripción BD
            console.log("unmounted RIP")
        }
    },[]);

    function agregarCarrito(){
        if(cantidad2 <= cantidad){
            setCantidad(cantidad - cantidad2)
            setCantidad2(1)
            setShow(false)
            // setCart(cart.push(producto))
            // setCart([...cart, {producto}])
            test3()
            // alert(producto.cantidad - cantidad)
            setCart([...cart, JSON.parse(localStorage.getItem(producto.id))])
            
        }else{
            alert("test")
        }
    } 
    function agregarCarrito2(){
        if(cantidad2 <= cantidad){
            setCantidad(cantidad - cantidad2)
            setCantidad2(1)
            setShow(false)
            // setCart(cart.push(producto))
            // setCart([...cart, {producto}])
            test3()
            // alert(producto.cantidad - cantidad)
            // setCart([...cart, [producto.id,producto.nombre]])
            globalTest()
        }else{
            alert("No hay mas Stock")
        }
    } 

    function sumaCantidad(){
        if(cantidad2 <= cantidad - 1){
            setCantidad2(cantidad2 + 1)
        }
    }

    // function restaCantidad(){

    // }

    // function agregar(){
    //     setCart(cart.push(producto))
       
    // }


    
    const test3 = () => {
        // console.log(producto.cantidad)
        // console.log(cantidad)
        // console.log('esto es cart'+cart)
        // console.log(producto)
        // console.log(producto2)
        // setPrueba([...cart, {id:2,name:"example"}])
    //  sirve localStorage.setItem(producto.id, JSON.stringify({id:producto.id,nombre:producto.nombre,precio:producto.precio,cantidad:producto.cantidad - (cantidad - cantidad2),moneda:producto.moneda,tipo:producto.tipo,descript:producto.descript,imagen:producto.imagen,stock:producto.cantidad-(producto.cantidad - (cantidad - cantidad2))}))
    //   localStorage.setItem(producto.id, JSON.stringify([{
    //     id:producto.id,
    //     nombre:producto.nombre,
    //     precio:producto.precio,
    //     cantidad:producto.cantidad - (cantidad - cantidad2),
    //     moneda:producto.moneda,
    //     tipo:producto.tipo,
    //     descript:producto.descript,
    //     imagen:producto.imagen,
    //     stock:producto.cantidad-(producto.cantidad - (cantidad - cantidad2))
    //   }]))
        localStorage.setItem(producto.id, JSON.stringify([
            producto.id,
            producto.nombre,
            producto.precio,
            producto.cantidad - (cantidad - cantidad2),
            producto.moneda,
            producto.tipo,
            producto.descript,
            producto.imagen,
            producto.cantidad-(producto.cantidad - (cantidad - cantidad2))
        ]))
    //   stock:producto.cantidad-(producto.cantidad - (cantidad - cantidad2)
    //   cantidad:producto.cantidad - (cantidad - cantidad2)
        // localStorage.setItem(producto.id, JSON.stringify({idproducto:producto.id,precioproducto:producto.precio,stockDisponible:producto.cantidad,cantidadAgregada:producto.cantidad - (cantidad - cantidad2)}))

        // localStorage.setItem(producto.cantidad, JSON.stringify(producto.cantidad - cantidad))
        // localStorage.setItem(producto.id, JSON.stringify({cantidad:producto.cantidad - (cantidad - cantidad2)}))
        
        //  localStorage.setItem(producto.id, JSON.stringify([{producto:producto, cantidad:cantidad - (cantidad - cantidad2)}]))

        // localStorage.setItem(producto.id, cantidad - (cantidad - cantidad2))
        // let prod = JSON.stringify(producto);
        // let cant = JSON.stringify(cantidad - (cantidad - cantidad2));
        // let cadena = [prod,cant]
        // localStorage.setItem(producto.id, prod)

        
    }
    const test4 = () => {
        // console.log(producto.cantidad)
        // console.log(cantidad)
        // console.log('esto es cart'+cart)
        // console.log(producto)
        // console.log(producto2)
        // console.log(typeof(cart))
        console.log(JSON.parse(localStorage.getItem(producto.id))[4])
        // console.log("cart")
        // console.log(producto)
        // localStorage.getItem(producto.id)
        // localStorage.getItem("session")
        // console.log(cantidad - cantidad2)
        // let xx = localStorage.getItem(producto.id) 
        // console.log(xx)
        // let user = JSON.parse(localStorage.getItem(producto.id))
        // console.log(user.idproducto)
        // globalTest()
    }
    

    return <div className="card col-md-6">
        <Link to={`/`}>
            <button>volver</button>
        </Link>
        <button onClick={() => {console.log(producto.id)}}>console.log</button>
            
        <button onClick={test3}> Push</button>
        <button onClick={test4}> consoleLog</button>
        
        <img src={`../imagenes/${producto.imagen}.png`} alt=""/>
        <h3>{producto.nombre}</h3>
        <p>Precio: {producto.precio} {producto.moneda}</p>
        {/* <p>Stock: {producto.cantidad}</p> */}
        <p>Stock: {cantidad}</p>
        <p>Categoria: {producto.tipo}</p>
        <p>Descripción: {producto.descript}</p>
        <div className="d-flex justify-content-between">
            {show ? (
                <div className="d-flex align-items-center justify-content-between cajaCount">
                    <div>
                        <button onClick={()=>{setCantidad2(cantidad2 < 2 ? cantidad2 : cantidad2 - 1 )}}>-</button> 
                    </div>
                    <div>
                        <p>{cantidad2}</p>
                    </div>
                    <div className="">
                        <button onClick={()=>{sumaCantidad()}}>+</button> 
                    </div>      
                </div>
            ) : ("")} 

            <div className="d-flex justify-content-end">
                {/* <button type="button" onClick={() => {setShow(!show);}}>Seguir Agregando al carrito {show ? 'Div 2' : 'Div 1'}</button> */}
                {show ? ("" ) : (<button type="button" onClick={() => {setShow(!show);}}>Seguir Agregando al carrito {show ? 'Div 2' : 'Div 1'}</button>)}

            </div>
        </div>    
            <div className="d-flex justify-content-between">   
                <div className="">
                    {/* <button onClick={()=>{setCantidad(cantidad2 < producto.cantidad + 1 ? cantidad - cantidad2 : cantidad2)}}>Agregar al Carrito</button>  */}
                    {/* <button onClick={()=>{agregarCarrito()}}>Agregar al Carrito</button>  */}
                    {/* {show ? (<button onClick={()=>{agregarCarrito()}}>Agregar al Carrito</button> ) : (<button className="btn btn-success" onClick={()=>{alert("proximo paso; agregar elementos al carrito")}}>Ir a Comprar</button>)} */}
                    {/* {show ? (<button onClick={()=>{agregarCarrito()}}>Agregar al Carrito</button> ) : (<button className="btn btn-success" onClick={()=>{alert("proximo paso; agregar elementos al carrito")}}>Ir a Comprar</button>)} */}
                    {/* <button onClick={() => {setCart([...cart, [producto.id,producto.nombre]])}}> Agregar item de prueba al carrito</button> */}
                    <button onClick={() => {{agregarCarrito2()}}}> Agregar item de prueba al carrito</button>

                    <button onClick={() => {console.log(cart)}}>console.log</button>
                </div>
                <div>
                     {show ? ("" ) : (<p>Items Agregados al carrito: {producto.cantidad - cantidad}</p> )}
                     {/* checklater */}
                </div>
            </div>
            {/* <div>
                <button type="button" onClick={() => {setShow(!show);}}>
                    Mostrar {show ? 'Div 2' : 'Div 1'}
                </button>

                {show ? (<button onClick={()=>{agregarCarrito()}}>Agregar al Carrito</button> ) : ("WAZAAA")}
            </div> */}
    </div>
    
}

export default Item2;

