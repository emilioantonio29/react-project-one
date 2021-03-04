import React, {useState, useEffect} from 'react';
import { GlobalContext } from "../../context/GlobalContext";


const Test = ({producto}) => {
    
    const [cantidad2, setCantidad2] = useState(1);
    const [cantidad, setCantidad] = useState(producto.cantidad)
    const [show, setShow] = useState(true);
    const {cart,setCart,prueba, setPrueba, globalTest, products, setProducts,load, setLoad} = React.useContext(GlobalContext);

    React.useEffect(()=>{
        document.title = `${cantidad2}`
        console.log("mounted cantidad2")
        console.log(producto.id)
        setPrueba(producto)
        //
        document.title = `${cantidad}`
        console.log("mounted cantidad")
        if(localStorage.getItem(producto.id) === null){
            setCantidad(producto.cantidad)
            console.log("localNull")
        }else{
            let variableCarrito = JSON.parse(localStorage.getItem(producto.id))
            setCantidad(producto.cantidad - variableCarrito[3])
        }
        return () => {
            console.log("unmounted RIP ----")
        }
    },[cantidad2]);

    function agregarCarrito(){
        if(cantidad2 <= cantidad){
            setCantidad(cantidad - cantidad2)
            setCantidad2(1)
            setShow(false)
            addLocalStorage()
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
            addLocalStorage()
        }else{
            alert("No hay mas Stock")
        }
    } 

    function sumaCantidad(){
        if(cantidad2 <= cantidad - 1){
            setCantidad2(cantidad2 + 1)
        }
    }
 
    const addLocalStorage = () => {
        localStorage.setItem(producto.id, JSON.stringify([
            producto.id,
            producto.nombre,
            producto.precio,
            producto.cantidad - (cantidad - cantidad2),//cantidad agregada al carrito
            producto.moneda,
            producto.tipo,
            producto.descript,
            producto.imagen,
            producto.cantidad-(producto.cantidad - (cantidad - cantidad2)),
            producto.cantidad//stock disponible
        ]))
        
    }
    const test4 = () => {
        console.log(JSON.parse(localStorage.getItem(producto.id))[4])
    }
    

    return <div className="card col-md-6">

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
                    {/* <button onClick={() => {console.log(cart)}}>console.log</button> */}
                </div>
                <div>
                     {show ? ("" ) : (<p>Items Agregados al carrito: {producto.cantidad - cantidad}</p> )}
                </div>
            </div>
    </div>
    
}

export default Test;

