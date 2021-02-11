import * as React from 'react';
import ItemDetailList from '../components/ItemDetailList/ItemDetailList';
// import ItemDetailList from '../components/ItemDetailList/ItemDetailList';
import ProductList from '../mocks/ProductList';




const ItemDetailContainer = () =>{

    const [products2, setProducts] = React.useState([]);

    React.useEffect(() => {
        const myPromise = new Promise ((resolve, reject) => {
            setTimeout(() => resolve(ProductList), 5000);
    });
    
        myPromise.then((result) => setProducts(result));
    },[]);     



    return(
        <>
            <div className="contaniner">
                <div className="d-flex justify-content-center">
                    <h1 className="">Esto es el ItemDetailContainer</h1>
                    <p>Al configurarlo con el router, esto reemplazará al itemListContainer, mostrando el itemList o informacion del producto seleccionado en el modulo ItemListContainer</p>
                </div>
                {/* <ItemDetailList products={products}/> */}
                <ItemDetailList products2={products2}/>
            </div>

            

        </>
    )

}

export default ItemDetailContainer;