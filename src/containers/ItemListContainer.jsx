import * as React from 'react';
import ItemList from '../components/ItemList/ItemList';
import ProductList from '../mocks/ProductList';
import {Link} from 'react-router-dom';




const ItemListContainer = () =>{

    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        const myPromise = new Promise ((resolve, reject) => {
            setTimeout(() => resolve(ProductList), 3000);
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

            

        </>
    )

}

export default ItemListContainer;