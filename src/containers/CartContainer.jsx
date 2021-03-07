import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ItemDetailList from '../components/ItemDetailList/ItemDetailList';
import ProductList from '../mocks/ProductList';
import ItemCart from '../components/Item/ItemCart';
import Item from '../components/Item/Item';
import { GlobalContext } from '../context/GlobalContext';
import {Link} from 'react-router-dom';


const CartContainer = () =>{
    const {cart,setCart,firstAsync,globalTest3,globalTest4,total, setTotal,TESTER,globalTest} = React.useContext(GlobalContext);
    // const [show, setShow] = React.useState(true);
    const [carrito, setCarrito] = React.useState([]);
    const [carritoS, setCarritoS] = React.useState([]);
    const[arrecho, setArrecho] = React.useState([]);
    
    
    // console.log("doSo")
    // console.log(cart)
    React.useEffect(() => {
        const myPromise = new Promise ((resolve, reject) => {
            // setTimeout(() => resolve(ProductList), 3000);
            resolve(TESTER);
    });
    
        myPromise.then((result) => setCarritoS(result));
    },[]);   
    React.useEffect(()=>{
        // globalTest4()
        // window.location.reload(false)
        // for(let i =0; i < localStorage.length; i++){
        //     let key = JSON.parse(localStorage.getItem(localStorage.key(i)))
        //     console.log("doSo") 
        //     cart.push(key)
          
        // }
        // globalTest4()
        globalTest()
        console.log("soy el cart")
        // setCarrito([])
        let total2 = 0
        let prueba = []
        for(let i =0; i < localStorage.length; i++){
            let key = JSON.parse(localStorage.getItem(localStorage.key(i)))
            console.log(key[0])
            total2 = total2 + ((key[2])*(key[3]))
            carrito.push(key); 

        }
        setTotal(total2)
        console.log(total2)
        document.title = `${total}`
        console.log(cart)
        console.log(carrito)
        return () => {

            console.log("soy el cart unmon")
            // globalTest3()
            // setCarrito([])
            // setCart([])
            globalTest3()
            globalTest()
        }
    },[]);

    
    const ConsoleLog = () => {
        globalTest()
        console.log(TESTER)
        // globalTest3()
    }
    const ConsoleLogCar = () => {
        console.log(total)
    }
    const eliminarTodo = () => {
        localStorage.clear()
        globalTest3()
        globalTest4()
        window.location.reload(false)
        // setCarrito([])
        // setTotal(0)
        // setCart([])
        
    }



    return(
        <>
            <button onClick={ConsoleLog}> ConsoleLog</button>
            <button onClick={ConsoleLogCar}> ConsoleLogcar</button>
            <Link to={`/`}>
                    <button type="button" className="btn notification" data-toggle="modal" data-target="#staticBackdrop2">   
                        volver
                    </button>
            </Link>

            <div>
                carrito
            </div>  
            {/* <h1>ItemID: {cart[0].name}</h1> */}
            
            {/* <div>
                {show ? ("") : ("hola")}
            </div> */}
            <div>
                
                    {   
                        // cart.map((productCart)=>{
                        //         return <ItemCart key={productCart.id} productCart={productCart}/>
                        carritoS.map((productCart)=>{
                            console.log("test")
                            console.log("cart")
                            return <ItemCart key={productCart} productCart={productCart}/>
                        })
                                              
                        // <ItemCart  />
                        // carrito.map(cards => {
                        //     return <pre>{"s"}</pre>
                        // })
                        
                    }
                


            </div>  
            <h1>TOTAL: {total}</h1>
            <h1>TOTAL: {TESTER}</h1>
            <button onClick={eliminarTodo}> VaciarCarrito</button>
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