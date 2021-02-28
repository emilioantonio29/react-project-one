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
        //     // setCarrito([JSON.parse(localStorage.getItem(localStorage.key(i)))])
        //     // console.log(xxx)
        //     // console.log(xxx)
        //     // setCarrito([...carrito, {1}]
        //     // console.log(i)
        //   }
        // setCarrito([...carrito, {(1)}]
        console.log("mounted carrito")
        console.log(localStorage.length)
        setCarrito(Object.values(localStorage))
        console.log(carrito)
        console.log(JSON.parse('{ "name":"John", "age":30, "city":"New York"}'))
        // console.log(JSON.parse(`${carrito}`))
        // console.log(carrito)
        // console.log(JSON.parse(carrito[1]))
        return () => {
            // remove listener
            // desuscripción BD
            console.log("unmounted RIP")
        }
    },[]);

    const allStorage = () =>  {

        var archive = [],
        keys = Object.keys(localStorage),
        i = 0, key;

        for (; key = keys[i]; i++) {
            archive.push( key + '=' + localStorage.getItem(key));
        }

        // console.log(archive[1])
        console.log(JSON.parse(archive))
    }
    
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
        console.log(typeof(Object.keys(localStorage)))
        console.log(Object.keys(localStorage))
        console.log(typeof(Object.values(localStorage)))
        console.log(JSON.parse(Object.values(localStorage)))
        // console.log(stor)
        let xxx = Object.values(localStorage)
        console.log(xxx)
        
        
    }

    function talfy(){
        localStorage.forEach((element, index) => {
            console.log(`Current index: ${index}`);
            console.log(element);
        });
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
                        // cart.map((productCart)=>{
                        //     return <ItemCart key={productCart.id} productCart={productCart}/>
                        // })
                       
                        <ItemCart />
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