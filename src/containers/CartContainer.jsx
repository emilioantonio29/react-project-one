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
    const {fireMail, setFireMail,firePhone, setFirePhone,fireName, setFireName,buyers, setBuyers,cart,setCart,firstAsync,globalTest3,globalTest4,total, setTotal,arrayCart,globalTest,render, setRender,renderFunction} = React.useContext(GlobalContext);
    // const [show, setShow] = React.useState(true);
    const [carrito, setCarrito] = React.useState([]);
    const [carritoS, setCarritoS] = React.useState([]);
    const [carritoFire, setCarritoFire] = React.useState([]);
    // const [fireName, setFireName] = React.useState("");
    // const [firePhone, setFirePhone] = React.useState("");
    // const [fireMail, setFireMail] = React.useState("");
    const [disabled, setDisabled] = React.useState(false);
    const [showCart, setShowCart] = React.useState(true);
    
    // React.useEffect(() => {
       
    //     setCarrito([])
    //     setCarritoS([])
    //     const myPromise = new Promise ((resolve, reject) => {
    //         resolve(arrayCart);
    //     });
    //     myPromise.then((result) => setCarritoS(result));
    // },[render]);   
    React.useEffect(()=>{
        if(localStorage.length!=0){
            setShowCart(false)
        }else{
            setShowCart(true)
        }
        setCarrito([])
        setCarritoS([])
        const myPromise = new Promise ((resolve, reject) => {
            resolve(arrayCart);
        });
        myPromise.then((result) => setCarritoS(result));
       
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
        console.log(arrayCart)
        // if(showCart===true){
        //     setShowCart(false)
        // }else{
        //     setShowCart(true)
        // }
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
        {showCart ? (    
        <div className="d-flex flex-column">
            <div className="d-flex justify-content-center" >
                <div className="col-md-8 d-flex justify-content-left align-items-center noPad">
                    <p >
                        <Link to={`/`}>
                        <button className="btn">Todos los productos</button>
                        </Link>
                    </p>
                    <p><i class="fa fa-angle-right"></i></p>
                    <p style={{paddingLeft:"10px"}}> Cart</p>
                </div>
            </div>
            <div className="d-flex justify-content-center" >
                <div className="col-md-8 d-flex justify-content-center align-items-center cajaCart">
                    <img src={`../imagenes/cEmpty.png`} alt="ImagenCartEmpty"/>
                </div>
            </div>
            <div className="d-flex justify-content-center" >
                <div className="col-md-8 d-flex justify-content-center align-items-center">
                    <p>No hay productos agregados al carrito ...</p>
                    <button onClick={ConsoleLogCompradores}> ConsoleLogCompradores</button>
                </div>
            </div>
        </div>
        ) : (
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
            <div className="container col-md-12" >
                <div className="">
                    <table className="table"> 
                        <thead className="fondo shoC">
                            <tr>
                                <th style={{width:"25%"}}></th>
                                <th style={{width:"25%"}}>PRODUCTO</th>
                                <th style={{width:"16%"}} className="centre">PRECIO</th>
                                <th style={{width:"16%"}} className="centre">CANTIDAD</th>
                                <th style={{width:"16%"}} className="centre">SUBTOTAL</th>
                            </tr>
                        </thead>
                        {/* BODY START */}
                        <tbody>
                            <tr></tr>
                        </tbody>
                        {/* FOOT START */}
                        <tfoot class="">
                            <tr></tr>
                        </tfoot>
                    </table>
                </div>
            </div>
            
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
            <div className="container col-md-12">
                <div className="table-responsive">
                    <table className="table tableFix"> 
                        <thead className="fondo shoC">
                            <tr></tr>
                        </thead>
                        {/* BODY START */}
                        <tbody>
                            <tr></tr>
                        </tbody>
                        {/* FOOT START */}
                        <tfoot class="">
                            <tr class="" style={{height: "100px;"}}>
                                <th class="" style={{width:"25%"}}></th>
                                <th class="" style={{width:"25%"}}>
                                    <label class="d-flex justify-content-left"></label>
                                </th>
                                <th class="" style={{width:"16%"}}>
                                    <label class="d-flex justify-content-center"></label>
                                </th>
                                <th class=" fondo" style={{width:"16%"}}>
                                    <div class="d-flex justify-content-center">
                                        <button type="button" class="btn btn-sm btn-toggle" data-toggle="button" aria-pressed="false"
                                            autocomplete="off" id="moneda">
                                            <div class="handle"></div>
                                        </button>
                                    </div>
                                </th>
                                <th class=" fondo" style={{width:"16%"}}>
                                    <div>
                                        <label class="d-flex justify-content-center">TOTAL</label>
                                    </div>
                                </th>
                            </tr>
                            <tr class="" style={{height: "100px;"}}>
                                <th class="" style={{width:"25%"}}>
                                    <div class="d-flex justify-content-center fixC">
                                        <p class="" id=""><button onClick={eliminarTodo}> VaciarCarrito</button></p>
                                    </div>
                                </th>
                                <th class="monedaArs" style={{width:"25%"}}>
                                    <div class="d-flex justify-content-center fixC">
                                        <p class="" id=""><button onClick={fireBuy} className="btn-success" disabled={false}>Comprar</button></p>
                                    </div>
                                </th>
                                <th class=" monedaUsd" style={{width:"16%"}}>
                                    <div class="d-flex justify-content-center fixC">
                                        <p class="" id=""></p>
                                    </div>
                                </th>
                                <th class=" monedaArs" style={{width:"16%"}}>
                                    <div class="d-flex justify-content-center fixC">
                                        <div class="alert-box2 addDown">$</div>
                                        <p class="" id="total">ARS:</p>
                                    </div>
                                </th>
                                <th class=" monedaUsd" style={{width:"16%"}}>
                                    <div class="d-flex justify-content-center fixC">
                                        <p class="" id="totalDolar">{total}</p>
                                    </div>
                                </th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

            </div></div>

        )} 

        
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