import * as React from 'react';
import ItemList from '../components/ItemList/ItemList';
import ProductList from '../mocks/ProductList';




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
            </div>

            

        </>
    )

}

export default ItemListContainer;