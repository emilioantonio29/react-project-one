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
        // console.log(Object.value(localStorage))
        for(let i =0; i < localStorage.length; i++){
            let key = localStorage.key(i);
            carrito.push((localStorage.getItem(key)))
        }
        // console.log(localStorage.key)
        console.log("yo")
        console.log(carrito)


        let carritoS = carrito.reduce(function(s, a){
            s.push({name: a});
            return s;
          }, [])
          console.log(carritoS)
        // setCarrito(Object.values(localStorage));
        // console.log(carrito);
        // let arr = carrito.reduce(function(s, a){
        //     s.push({name: a});
        //     return s;
        //   }, []);
        // console.log("mountedCartContainer")
        // console.log(arr)
        // setCarritoS(arr)
        // console.log(arr)
        // setCarritoS(arr)
        // consultas a la BD, suscripciones como addeventlistener
        // setCantidad(1)
        // if(localStorage.getItem(producto.id) === null){
        //     setCantidad(producto.cantidad)
        //     console.log("localNull")
        // }else{
        //     let variableCarrito = JSON.parse(localStorage.getItem(producto.id))
        //     setCantidad(producto.cantidad - variableCarrito.cantidad)
        // }
        // for(let i =0; i < localStorage.length; i++){
        //     // setCarrito( localStorage.getItem(i))
        //     // carrito = JSON.parse(str)
        //     // setCarrito([JSON.parse(localStorage.getItem(localStorage.key(i)))])
        //     // console.log(xxx)
        //     // console.log(xxx)
        //     // setCarrito([...carrito, {1}]
        //     // console.log(i)
        //     // console.log(localStorage.getItem(i))
        //     // console.log("TS")
        //     // console.log(i)
        //     // console.log(JSON.parse(carrito[i]))
        
        //   }
        // setCarrito([...carrito, {(1)}]
        // console.log("mounted carrito")
        // console.log(localStorage.length)
        // setCarrito(Object.values(localStorage))
        // console.log(Object.values(localStorage))
        // console.log(carrito)
        // console.log(carrito)
        // console.log(JSON.parse('{ "name":"John", "age":30, "city":"New York"} '))
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



        // console.log(JSON.parse(Object.values(localStorage)))
        // console.log(JSON.parse(`${carrito}`))
        // console.log(carrito)
        // console.log(JSON.parse(carrito[1]))
        // console.log("coño")
        // console.log(JSON.parse(carrito[0]))
        // console.log("coño2")
        // console.log(carrito)
        return () => {
            // remove listener
            // desuscripción BD
            console.log("unmounted RIP")
        }
    },[]);

    
    // let xxx = []
    const test3 = () => {
        // console.log(cart)
        // console.log(products)
        // console.log(products2)
        // let variableCarrito = JSON.parse(localStorage.getItem()
        // allStorage()
        
        for(let i =0; i < localStorage.length; i++){
            console.log((JSON.parse(localStorage.getItem(localStorage.key(i)))))
            // console.log(xxx)
            // console.log(xxx)
          }
        // console.log(stor)
    }
    const ConsoleLogCar = () => {
        // console.log(cart)
        // console.log(products)
        // console.log(products2)
        // let variableCarrito = JSON.parse(localStorage.getItem()
        // allStorage()
        // console.log(xxx)
        // console.log(typeof(Object.keys(localStorage)))
        // console.log(Object.keys(localStorage))
        // console.log(typeof(Object.values(localStorage)))
        // console.log(JSON.parse(Object.values(localStorage)))
        // // console.log(stor)
        // let xxx = Object.values(localStorage)
        // console.log(xxx)
        console.log(carrito)
        
    }


    return(
        <>
            <button onClick={test3}> ConsoleLog</button>
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
                        carrito.map((productCart)=>{
                            return <ItemCart key={productCart.id} productCart={productCart}/>
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