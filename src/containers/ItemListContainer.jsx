import * as React from 'react';
import ItemList from '../components/ItemList/ItemList';
import ProductList from '../mocks/ProductList';
import {Link} from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import { CartContext } from '../context/CartContext';




const ItemListContainer = () =>{

    const [products, setProducts] = React.useState([]);
    const [load, setLoad] = React.useState("CARGANDO . . .");
    // const {cart, setCart} = React.useContext(GlobalContext);
    const cart = React.useContext(GlobalContext);
    console.log(cart)
    React.useEffect(() => {
        const myPromise = new Promise ((resolve, reject) => {
            // setTimeout(() => resolve(ProductList), 3000);
            setTimeout(() => {    
                resolve(ProductList);
                setLoad("");    
            }, 3000);
    });
    
        myPromise.then((result) => setProducts(result));
    },[]);     


    
    return(
        <>

            <div className="contaniner">
                <div className="d-flex justify-content-center">
                    <h1 className="">Bienvenidos al proyecto React</h1>
                </div>
                <ItemList products={products}/>
                {/* <button onClick={test}>yo</button> */}
                <Link to={`/ItemDetailContainer`}>test</Link>
            </div>
            <div className="d-flex justify-content-center">
                <h1>{load}</h1>
            </div>
            

        </>
    )

}

export default ItemListContainer;