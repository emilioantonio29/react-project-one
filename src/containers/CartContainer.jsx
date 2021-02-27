import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ItemDetailList from '../components/ItemDetailList/ItemDetailList';
// import ItemDetailList from '../components/ItemDetailList/ItemDetailList';
import ProductList from '../mocks/ProductList';
import ItemCart from '../components/Item/ItemCart';
import Item from '../components/Item/Item';
import Test from '../components/Item/Test';
import { GlobalContext } from '../context/GlobalContext';


const CartContainer = () =>{
    const {cart, setCart, cartLine} = React.useContext(GlobalContext);
    

    
    const test3 = () => {
        console.log(cart)
        // console.log(products2)
    }

    return(
        <>
            <button onClick={test3}> ConsoleLog</button>
            <button onClick={() => {setCart([...cart, {id:2,name:"example"}])}}> Agregar item de prueba al carrito</button>
            <div>
                carrito
            </div>  
            <h1>ItemID: {cart[0].name}</h1>
            <div>
                <ul>
                    {
                        cart.map((productCart)=>{
                                return <ItemCart key={productCart.id} productCart={productCart}/>
                      })
                        
                    }
                </ul>
            </div>  
        </>
    )

}

export default CartContainer;



















































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