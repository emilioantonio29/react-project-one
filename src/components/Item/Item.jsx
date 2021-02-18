
import {Link} from 'react-router-dom';


const Item = ({product}) => {

    const test = () => {
        console.log(product.id)
    }

    return <div className="card col-md-6">
        <h3>{product.nombre}</h3>
        <p>Precio: {product.precio} {product.moneda}</p>
        <p>Stock: {product.cantidad}</p>
        <Link to={`/ItemDetailContainer/${product.id}`}><button>Comprar</button></Link>
        {/* <button onClick={test}> test2</button> */}
    </div>
    
}

export default Item;