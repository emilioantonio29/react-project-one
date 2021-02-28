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
    const {cart, setCart} = React.useContext(GlobalContext);
    const [products, setProducts] = React.useState([]);
    const [load, setLoad] = React.useState("CARGANDO . . .");
    const [show, setShow] = React.useState(true);
    const [carrito, setCarrito] = React.useState([]);
    const [carritoS, setCarritoS] = React.useState([]);
    React.useEffect(() => {
        const myPromise = new Promise ((resolve, reject) => {
            setTimeout(() => {    
                resolve(ProductList);
                setLoad("");    
            }, 3000);
    });
    
        myPromise.then((result) => setProducts(result));

    },[]);    

    React.useEffect(()=>{
        // setCart([])
        for(let i =0; i < localStorage.length; i++){
            let key = localStorage.key(i);
            // console.log(i)
            if (localStorage.getItem(key) !== null) {
                    cart.push( localStorage.getItem( key ) ) 
    
            }
            // cart.push(JSON.parse(localStorage.getItem(key))) //Objects are not valid as a React child
            // cart.push( localStorage.getItem( key ) ) 
            
        }
        
        // for(let i =0; i < cart.length; i++){
        //     // console.log(JSON.parse(cart[i]))
        //     carritoS.push(JSON.parse(cart[i]))
        // }
        console.log([
            {
                "id": 1,
                "nombre": "Pan de Jamon",
                "precio": 1000,
                "cantidad": 10,
                "moneda": "$",
                "tipo": "Panes de Jamon",
                "descript": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "imagen": "pandejamon"
            },
            {
                "id": 2,
                "nombre": "Pan de Jamon con Tocineta",
                "precio": 1200,
                "cantidad": 12,
                "moneda": "$",
                "tipo": "Panes de Jamon",
                "descript": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "imagen": "pandejamon2"
            }]

        )
        // //test
        // console.log(cart)
        // return () => {
        //     // remove listener
        //     // desuscripción BD
        //     console.log("unmounted RIP")
        // }
        return () => {
            // remove listener
            // desuscripción BD
            console.log("unmounted RIPCARTC")
            setCart([])
            console.log("esto es cart")
            console.log(cart)
        }
    },[]);

    
    const ConsoleLog = () => {
        
        for(let i =0; i < localStorage.length; i++){
            console.log((JSON.parse(localStorage.getItem(localStorage.key(i)))))
            setCarritoS([...carritoS, (JSON.parse(localStorage.getItem(localStorage.key(i))))])
          }

    }
    const ConsoleLogCar = () => {
        // console.log(cart[0])
        // console.log(JSON.parse(cart[0]).id)
        // for(let i =0; i < cart.length; i++){
        //     console.log(JSON.parse(cart[i]))
        // }
        // console.log(carritoS.id)
        console.log(JSON.parse(cart).id)
        console.log(cart.length)
        if(cart.length===0){
            console.log("tests")
        }
    }


    return(
        <>
            <button onClick={ConsoleLog}> ConsoleLog</button>
            <button onClick={ConsoleLogCar}> ConsoleLogcar</button>
            {/* <button onClick={() => {setCart([...cart, {id:2,name:"example"}])}}> Agregar item de prueba al carrito</button> */}
            <button onClick={() => {setCart([...cart, {id:2,name:"example"}])}}> Agregar item de prueba al carrito</button>

            <div>
                carrito
            </div>  
            {/* <h1>ItemID: {cart[0].name}</h1> */}
            
            <div>
                {show ? ("") : ("hola")}
            </div>
            <div>
                <ul>
                    {
                        // cart.map((productCart)=>{
                        //         return <ItemCart key={productCart.id} productCart={productCart}/>
                        cart.map((productCart)=>{
                            return <ItemCart key={productCart} productCart={productCart}/>
                        })
                       
                        // <ItemCart  carrito={carritoS}/>


                        // cart.filter((value, index, categoryArray) => categoryArray.indexOf(value) === index)
                        // .map((productCart)=>{
                        //     return <ItemCart key={productCart.id} productCart={productCart}/>
                        // });
                        
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