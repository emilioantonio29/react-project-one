import {Link} from 'react-router-dom';


const ItemCart = ({productCart}) => {

    const test = () => {
        console.log(productCart.id)
    }

    return <div className="card col-md-6">
        <h3>{productCart.id}</h3>
        <p>ID: {productCart.id}</p>
        <p>Stock: {productCart.name}</p>
        <button onClick={test}> test2</button>
    </div>
    
}

export default ItemCart;
