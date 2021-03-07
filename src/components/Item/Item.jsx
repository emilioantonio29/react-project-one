import {Link} from 'react-router-dom';
import * as React from 'react';


const Item = ({product}) => {
    const [stockDisponible, setstockDisponible] = React.useState(product.producto.cantidad)


    React.useEffect(()=>{
        console.log("ItemJsx Mounted")
        if(localStorage.getItem(product.producto.id) === null){
            setstockDisponible(product.producto.cantidad)
            console.log("ItemJsx: Storage localNull")
        }else{
            let variableCarrito = JSON.parse(localStorage.getItem(product.producto.id))
            setstockDisponible(product.producto.cantidad - variableCarrito[3])
        }
        document.title = `${stockDisponible}`
        return () => {

            console.log("ItemJsx Unmounted")

        }
    },[]);

    const test = () => {
        console.log(product.producto.id)
        
    }

    return <div className="card col-md-6">
        {/* <button onClick={() => {console.log(product.producto)}}>console.log</button> */}
        <h3>{product.producto.nombre}</h3>
        <p>Precio: {product.producto.precio} {product.producto.moneda}</p>
        <p>Stock: {stockDisponible}</p>
        <Link to={`/ItemDetailContainer/${product.producto.id}`}><button>Comprar</button></Link>
        <br/>
        {/* <button onClick={test}> test2</button> */}
    </div>
    
}

export default Item;