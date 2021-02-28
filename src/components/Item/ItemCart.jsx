import {Link} from 'react-router-dom';


const ItemCart = ({products}) => {

    const test = () => {
        console.log(products)
    }

    return <div className="card col-md-6">
        {/* <h3>{products.id}</h3> */}
        {/* <p>ID: {products.producto.id}</p>
        <p>Stock: {products.producto.nombre}</p> */}
        <button onClick={test}> test2</button>
    </div>
    
}

export default ItemCart;
