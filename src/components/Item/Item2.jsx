import ItemCount from "../../containers/ItemCount"
import React, {useState, useEffect} from 'react';
import { GlobalContext } from "../../context/GlobalContext";
import {Link} from 'react-router-dom';


const Item2 = ({producto}) => {
    
    const [contadorInicial, setContadorInicial] = useState(1);
    const [stockDisponible, setstockDisponible] = useState(producto.cantidad)
    const [show, setShow] = useState(true);
    const {cart,setCart,prueba, setPrueba, globalTest, products, setProducts,load, setLoad,globalTest4} = React.useContext(GlobalContext);

    React.useEffect(()=>{
        console.log("mounted cantidad")
        if(localStorage.getItem(producto.id) === null){
            setstockDisponible(producto.cantidad)
            console.log("localNull")
        }else{
            let variableCarrito = JSON.parse(localStorage.getItem(producto.id))
            setstockDisponible(producto.cantidad - variableCarrito[3])
        }
        document.title = `${contadorInicial}`
        document.title = `${stockDisponible}`
        return () => {
            console.log("unmounted RIP")
        }
    },[contadorInicial]);

    function agregarCarrito(){
        if(contadorInicial <= stockDisponible){
            setstockDisponible(stockDisponible - contadorInicial)
            setContadorInicial(1)
            setShow(false)
            localStorageAct()
            setCart([...cart, JSON.parse(localStorage.getItem(producto.id))])
            
        }else{
            alert("test")
        }
    } 
    function agregarCarrito2(){
        if(contadorInicial <= stockDisponible){
            setstockDisponible(stockDisponible - contadorInicial)
            setContadorInicial(1)
            setShow(false)
            localStorageAct()
        }else{
            alert("No hay mas Stock")
        }
    } 

    function sumaCantidad(){
        if(contadorInicial <= stockDisponible - 1){
            setContadorInicial(contadorInicial + 1)
        }
    }
    const localStorageAct = () => {
    //   localStorage.setItem(producto.id, JSON.stringify([{
    //     id:producto.id,
    //     nombre:producto.nombre,
    //     precio:producto.precio,
    //     cantidad:producto.cantidad - (cantidad - contadorInicial),
    //     moneda:producto.moneda,
    //     tipo:producto.tipo,
    //     descript:producto.descript,
    //     imagen:producto.imagen,
    //     stock:producto.cantidad-(producto.cantidad - (cantidad - contadorInicial))
    //   }]))
        localStorage.setItem(producto.id, JSON.stringify([
            producto.id,
            producto.nombre,
            producto.precio,
            producto.cantidad - (stockDisponible - contadorInicial),//cantidad agregada al carrito
            producto.moneda,
            producto.tipo,
            producto.descript,
            producto.imagen,
            producto.cantidad-(producto.cantidad - (stockDisponible - contadorInicial)),//stock disponible
            producto.cantidad //stock real
            
        ]))     
    }
    const test4 = () => {
        console.log(producto)
    }
    

    return <div className="card col-md-6">

        <p>Stock: {stockDisponible}</p>
        <p>{contadorInicial}</p>
        <p>{producto.cantidad - stockDisponible}</p>
        <br/>

        <img src={`../imagenes/${producto.imagen}.png`} alt=""/>
        <h3>{producto.nombre}</h3>
        <p>Precio: {producto.precio} {producto.moneda}</p>
        <p>Stock: {stockDisponible}</p>
        <p>Categoria: {producto.tipo}</p>
        <p>Descripción: {producto.descript}</p>
        <div className="d-flex justify-content-between">
            {show ? (
                <div className="d-flex align-items-center justify-content-between cajaCount">
                    <div>
                        <button onClick={()=>{setContadorInicial(contadorInicial < 2 ? contadorInicial : contadorInicial - 1 )}}>-</button> 
                    </div>
                    <div>
                        <p>{contadorInicial}</p>
                    </div>
                    <div className="">
                        <button onClick={()=>{sumaCantidad()}}>+</button> 
                    </div>      
                </div>
            ) : ("")} 

            <div className="d-flex justify-content-end">
                {show ? ("" ) : (<button type="button" onClick={() => {setShow(!show);}}>Seguir Agregando al carrito {show ? 'Div 2' : 'Div 1'}</button>)}
            </div>
        </div>    
            <div className="d-flex justify-content-between">   
                <div className="">
                    <button onClick={() => {{agregarCarrito2()}}}> Agregar item de prueba al carrito</button>
                </div>
                <div>
                     {show ? ("" ) : (<p>Items Agregados al carrito: {producto.cantidad - stockDisponible}</p> )}
                </div>
            </div>
    </div>
    
}

export default Item2;

