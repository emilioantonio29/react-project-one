
import {Link} from 'react-router-dom';


const Item = ({product}) => {

    const test = () => {
        console.log(product.id)
    }

    return <div className="card col-md-6">
        {/* <button onClick={() => {console.log(product.producto)}}>console.log</button> */}
        <h3>{product.producto.nombre}</h3>
        <p>Precio: {product.producto.precio} {product.moneda}</p>
        <p>Stock: {product.producto.cantidad}</p>
        <Link to={`/ItemDetailContainer/${product.producto.id}`}><button>Comprar</button></Link>
        {/* <button onClick={test}> test2</button> */}
    </div>
    
}

export default Item;