import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ItemDetailList from '../components/ItemDetailList/ItemDetailList';
// import ItemDetailList from '../components/ItemDetailList/ItemDetailList';
import ProductList from '../mocks/ProductList';
import Item2 from '../components/Item/Item2';
import Item from '../components/Item/Item';
import Test from '../components/Item/Test';


const ItemDetailContainer = () =>{
    const { productoID } = useParams();
    // const [products, setProducts] = React.useState([]);
    // const arrayProductos = [
    //     {id:1, name: "emi", price: 2000, idCate:4},
    //     {id:2, name: "zun", price: 3000, idCate:4}
    // ]

    // React.useEffect(() => {
    //     let products = arrayProductos.filter(function(producto){
    //         return producto.id == productoID
    //     })
        
    //     console.log(products[0])
    //     // console.log(productoMostrar.name)
    // },[productoID]); 

    const [products, setProducts] = React.useState([]);
    const [load, setLoad] = React.useState("CARGANDO . . .");

    React.useEffect(() => {
        const myPromise = new Promise ((resolve, reject) => {
            // setTimeout(() => {
            //     resolve(ProductList), 3000);
            // }
            setTimeout(() => {    
                resolve(ProductList);
                setLoad("");    
            }, 3000);
    });
    
        myPromise.then((result) => setProducts(result));

    },[]);    
    
    // const [products2, setProducts] = React.useState([]);

    // React.useEffect(() => {
    //     const myPromise = new Promise ((resolve, reject) => {
    //         setTimeout(() => resolve(ProductList), 5000);
    // });
    
    //     myPromise.then((result) => setProducts(result));
    // },[]);     

    // const mostrarProducto = products2.map(producto => {
    //     if(producto.id == productoID){
    //         return producto
    //     }
    // })

    
    const test3 = () => {
        console.log(products)
        console.log(productoID)
        console.log(load)
        // console.log(products2)
    }

    return(
        <>
            {/* <button onClick={test3}> test3</button> */}

            <h1>ItemID: {productoID}</h1>
            <p>DETALLE DE PRODUCTO DEL ITEMDETAILCONTAINER</p>
            {/* <h1>ItemID: {productoMostrar}</h1> */}
            <div className="d-flex justify-content-center">
                <h1>{load}</h1>
            </div>
            
            <div>
                <ul>
                    {/* {products.map((producto)=>{
                          if(producto.id == productoID){
                            return <Item2 key={producto.id} producto={producto}/>

                          }
                    })} */}
                    {
                        products.filter(product => parseInt(product.id) === parseInt(productoID))
                            .map((producto)=>{
                                return <Item2 key={producto.id} producto={producto}/>
                      })
                        
                    }
                </ul>
            </div>  
        </>
    )

}

export default ItemDetailContainer;



















































///////
// const ItemDetailContainer = () =>{
//     const { productoID } = useParams();
  

//     const [products2, setProducts] = React.useState([]);

//     React.useEffect(() => {
//         const myPromise = new Promise ((resolve, reject) => {
//             setTimeout(() => resolve(ProductList), 5000);
//     });
    
//         myPromise.then((result) => setProducts(result));
//     },[]);     

//     const mostrarProducto = products2.map(producto => {
//         if(producto.id == productoID){
//             return producto
//         }
//     })

//     const test3 = () => {
//         console.log(productoID)
//         console.log(products2)
//     }

//     return(
//         <>
//             <button onClick={test3}> test3</button>
//             <div className="contaniner">
//                 <div>
//                     <ul>
//                         {/* {products2.map((producto)=>{
//                             if(products2[1].id == 2 ){
//                                 return <Item2 key={producto.id} producto={producto}/>

//                             }
//                             // return <Item2 key={product.id} product={product}/>;
//                         })} */}
                        
//                     </ul>
//                 </div>



//                 <div className="d-flex justify-content-center">
//                     <h1 className="">Esto es el ItemDetailContainer</h1>
//                     <p>Al configurarlo con el router, esto reemplazará al itemListContainer, mostrando el itemList o informacion del producto seleccionado en el modulo ItemListContainer</p>
//                 </div>
//                 {/* <ItemDetailList products={products}/> */}
//                 <ItemDetailList products2={products2} productoID={productoID}/>
//             </div>

            

//         </>
//     )

// }

// export default ItemDetailContainer;