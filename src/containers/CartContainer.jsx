import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ItemDetailList from '../components/ItemDetailList/ItemDetailList';
import ProductList from '../mocks/ProductList';
import ItemCart from '../components/Item/ItemCart';
import Item from '../components/Item/Item';
import { GlobalContext } from '../context/GlobalContext';
import {Link} from 'react-router-dom';
import { getFirestore } from '../firebase';


const CartContainer = () =>{
    const {buyers, setBuyers,cart,setCart,firstAsync,globalTest3,globalTest4,total, setTotal,arrayCart,globalTest,render, setRender,renderFunction} = React.useContext(GlobalContext);
    // const [show, setShow] = React.useState(true);
    const [carrito, setCarrito] = React.useState([]);
    const [carritoS, setCarritoS] = React.useState([]);
    const [carritoFire, setCarritoFire] = React.useState([]);
    const [fireName, setFireName] = React.useState("");
    const [firePhone, setFirePhone] = React.useState("");
    const [fireMail, setFireMail] = React.useState("");
    const [disabled, setDisabled] = React.useState(false);
    
    React.useEffect(() => {
       
        setCarrito([])
        setCarritoS([])
        const myPromise = new Promise ((resolve, reject) => {
            // setTimeout(() => resolve(ProductList), 3000);
            resolve(arrayCart);
    });
    
        myPromise.then((result) => setCarritoS(result));
    },[render]);   
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
    },[render]);

    // {comprador: {nombre: "emilio", email:"test@test", telefono: "111155554"}, items: [... carritoFire], total: total}
    // const fireBuy = () => {
        
    //     for(let i =0; i < localStorage.length; i++){
    //         const bd = getFirestore();
    //         let key = JSON.parse(localStorage.getItem(localStorage.key(i)))
    //         // console.log(key[0])
    //         // console.log(key)
    //         // carritoFire.push(key); 
    //         carritoFire.push([{producto:{
    //             id: key[0],//idproducto
    //             nombre: key[1],//nombre del producto
    //             precio: key[2], //precio actual del producto
    //             cantidadComprada: key[3], // cantidad comprada por el cliente
    //             categoria: key[5],
    //             stockAfterBuy: key[8] // stock que quedará si se realiza la compra
    //         }}])
    //         // console.log(carritoFire)
    //         // console.log(fireName)
    //     }
    //     console.log({comprador: {nombre: fireName, email: fireMail, telefono: firePhone}, items: [... carritoFire], total: total, date: "fecha"})
    // }

    const fireBuy = async () =>{
        if(localStorage.length!=0){
            for(let i =0; i < localStorage.length; i++){
                const bd = getFirestore();
                let key = JSON.parse(localStorage.getItem(localStorage.key(i)))
                carritoFire.push({
                    id: key[0],//idproducto
                    nombre: key[1],//nombre del producto
                    precio: key[2], //precio actual del producto
                    cantidadComprada: key[3], // cantidad comprada por el cliente
                    categoria: key[5],
                    stockAfterBuy: key[8] // stock que quedará si se realiza la compra
                })
            }
            let newOrder = {comprador: {nombre: fireName, email: fireMail, telefono: firePhone}, items: carritoFire, total: total, date: new Date()}
            const db = getFirestore()
            const ordenesCollection = db.collection("ordenes")
            ordenesCollection.add(newOrder).then()
            eliminarTodo()
            setDisabled(true)
        }
    }

    const ConsoleLogCompradores = () => {
        console.log(fireName)
        console.log(firePhone)
        console.log(fireMail)
        const db = getFirestore()
        const itemCollection = db.collection("ordenes");// guardamos la referencia
        itemCollection.get().then((value) => {
            // console.log(value.docs.keys)
            let temp = value.docs.map(element => {
                // return {...element.data(), id:element.id}
                return {"ordenes": {...element.data(), id:element.id}}
            })
                
            // value.docs.map(element => {console.log(element.data())})
            // value.docs.map(element => {console.log({...element.data(), id:element.id})})
            setBuyers(temp)
        })
        console.log(buyers)
        console.log(localStorage.length)
    }
    const eliminarTodo = () => {
        localStorage.clear()
        globalTest3()
        globalTest4()
        // window.location.reload(false)
        // setCarrito([])
        // setTotal(0)
        // setCart([])
        renderFunction()
       
    }



    return(
        <>
        <div className="d-flex justify-content-center">
        <div className="col-md-8">
            <Link to={`/`}>
                <button type="" className=" " data-toggle="" data-target="">   
                    volver
                </button>
            </Link>
            <br/>
            <h6>Datos Personales</h6>
            <form>
                <div className="form-group row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Nombre Completo:</label>
                    <div className="col-sm-10">
                        <input type="text" id="name" placeholder="Emilio Martinez" className="form-control" required onChange={(e) => setFireName(e.target.value)}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="cel" className="col-sm-2 col-form-label">Teléfono:</label>
                    <div className="col-sm-10">
                        <input type="text" id="cel" placeholder="11-99998888" className="form-control" required onChange={(e) => setFirePhone(e.target.value)}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="cel" className="col-sm-2 col-form-label">Teléfono:</label>
                    <div className="col-sm-10">
                        <input type="text" id="cel" placeholder="emilio@example.com.ar"  className="form-control" required onChange={(e) => setFireMail(e.target.value)}/>
                    </div>
                </div>

                {/* <label htmlFor="name">Nombre: </label>
                <input type="text" id="name"  required onChange={(e) => setFireName(e.target.value)}/> */}

            </form>
            
            <button onClick={ConsoleLogCompradores}> ConsoleLogCompradores</button>
            
            {/* <button onClick={ConsoleLogCar}> ConsoleLogcar</button> */}

            {/* <h1>ItemID: {cart[0].name}</h1> */}
            
            {/* <div>
                {show ? ("") : ("hola")}
            </div> */}
            <div>
                
                    {   
                        // cart.map((productCart)=>{
                        //         return <ItemCart key={productCart.id} productCart={productCart}/>
                        carritoS.map((productCart)=>{
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
            {/* <h1>TOTAL: {arrayCart}</h1> */}
            <button onClick={eliminarTodo}> VaciarCarrito</button>
            <button onClick={fireBuy} className="btn-success" disabled={false}>Comprar</button>
            </div></div>
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