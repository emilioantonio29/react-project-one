import ItemCount from "../../containers/ItemCount"
import React, {useState, useEffect} from 'react';
import { GlobalContext } from "../../context/GlobalContext";


const Item2 = ({producto}) => {
    
    const [cantidad2, setCantidad2] = useState(1);
    const [cantidad, setCantidad] = useState(producto.cantidad);
    const [show, setShow] = useState(true);
    const {cart, setCart} = React.useContext(GlobalContext);
    // const cart = React.useContext(GlobalContext);
    console.log(cart)
    React.useEffect(()=>{
        // consultas a la BD, suscripciones como addeventlistener
        document.title = `${cantidad2}`
        console.log("mounted")
        // console.log('esto es cart'+cart)
        return () => {
            // remove listener
            // desuscripción BD
            console.log("unmounted RIP")
        }
    },[cantidad2]);

    React.useEffect(()=>{
        // consultas a la BD, suscripciones como addeventlistener
        document.title = `${cantidad}`
        // setCantidad(1)
        console.log("mounted")
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
            
        }else{
            alert("test")
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
        console.log('esto es cart'+cart)
        console.log(producto)
        // console.log(products2)
    }

    return <div className="card col-md-6">
                    
        {/* <button onClick={test3}> test3</button> */}
        
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
                    {show ? (<button onClick={()=>{agregarCarrito()}}>Agregar al Carrito</button> ) : (<button className="btn btn-success" onClick={()=>{alert("proximo paso; agregar elementos al carrito")}}>Ir a Comprar</button>)}
                </div>
                <div>
                     {show ? ("" ) : (<p>Items Agregados al carrito: {producto.cantidad - cantidad}</p> )}
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

