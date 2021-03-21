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
import ItemCartDatos from '../components/Item/ItemCartDatos';


const CartContainerConfirmar = () =>{
    const {fireEnvio, setFireEnvio,fireLocalidad, setFireLocalidad,fireCP, setFireCP,fireDireccion, setFireDireccion,fireMail, setFireMail,firePhone, setFirePhone,fireName, setFireName,buyers, setBuyers,cart,setCart,firstAsync,globalTest3,globalTest4,total, setTotal,arrayCart,globalTest,render, setRender,renderFunction} = React.useContext(GlobalContext);
    // const [show, setShow] = React.useState(true);
    const [carrito, setCarrito] = React.useState([]);
    const [carritoS, setCarritoS] = React.useState([]);
    const [carritoFire, setCarritoFire] = React.useState([]);
    const [disabled, setDisabled] = React.useState(false);
    const [showCart, setShowCart] = React.useState(false);
    const [showTable, setShowTable] = React.useState(true);
 
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

    async function fireBuy(newOrder) {
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
            const { id } = await db.collection("ordenes").add(newOrder)
            alert("TU NRO DE ORDEN ES :" + id)
            eliminarTodo()
            setDisabled(true)
        }
      }

    const fireBuy2 = async () =>{
        // if(localStorage.length!=0){
        //     for(let i =0; i < localStorage.length; i++){
        //         const bd = getFirestore();
        //         let key = JSON.parse(localStorage.getItem(localStorage.key(i)))
        //         carritoFire.push({
        //             id: key[0],//idproducto
        //             nombre: key[1],//nombre del producto
        //             precio: key[2], //precio actual del producto
        //             cantidadComprada: key[3], // cantidad comprada por el cliente
        //             categoria: key[5],
        //             stockAfterBuy: key[8] // stock que quedará si se realiza la compra
        //         })
        //     }
            let newOrder = {
                cantidad:15, 
                descript:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                id: 6,
                imagen: "test",
                moneda: "$",
                nombre: "PanDeJamonTest6",
                precio: 1250,
                tipo: "Panes de Jamon"

            }
            const db = getFirestore()
            const ordenesCollection = await db.collection("producto")
            ordenesCollection.add(newOrder).then()
            // eliminarTodo()
            // setDisabled(true)
        // }
    }

    const ConsoleLogCompradores = () => {
        fireBuy2()
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

    const showDireccion = () => {
        if (showTable===true){
            setShowTable(false)
            setFireEnvio(false)
        }else{
            setShowTable(true)
            setFireEnvio(true)
        }
        console.log(fireEnvio)
    }



    return(
        <>
        {showCart ? (
            <div className="d-flex flex-column">
            <div className="d-flex justify-content-center" >
                <div className="col-md-8 d-flex justify-content-left align-items-center noPad">
                    <p >
                        <Link to={`/`}>
                        <button className="btn">Home</button>
                        </Link>
                    </p>
                    <p><i class="fa fa-angle-right"></i></p>
                    <p style={{paddingLeft:"10px"}}> Cart</p>
                    <button onClick={ConsoleLogCompradores} onClick={ConsoleLogCompradores} style={{marginLeft:"500px"}}> ConsoleLogCompradores</button>

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
                    {/* <button onClick={ConsoleLogCompradores}> ConsoleLogCompradores</button> */}
                </div>
            </div>
        </div>


        ) : (

            <div className="d-flex flex-column">
            <div className="d-flex justify-content-center" >
                <div className="col-md-8 d-flex justify-content-left align-items-center noPad">
                    <p >
                        <Link to={`/`}>
                        <button className="btn">Home</button>
                        </Link>
                    </p>
                    <p><i class="fa fa-angle-right"></i></p>
                    <p style={{paddingLeft:"10px"}}> Cart</p>

                </div>
            </div>
            <div className="d-flex justify-content-center" >
            <div className="col-md-8 d-flex justify-content-left align-items-center ">
                    <p style={{padding:"0px 10px 0px 80px"}}> <span  class="material-icons subdirectory_arrow_right">
                    subdirectory_arrow_right
                    </span></p>
                    <p style={{padding:"0px 10px 0px 10px"}}>Paso 1/3: Checkout</p>
                    <p style={{padding:"0px 10px 0px 10px"}}><i class="fa fa-angle-right"></i></p>
                    <p style={{padding:"0px 10px 0px 10px"}}>Paso 2/3: Datos Cliente</p>
                    <p style={{padding:"0px 10px 0px 10px"}}><i class="fa fa-angle-right"></i></p>
                    <div class="cart_tab">
                        <div class="cart_tab_left_on" id="login_tab_select_left"></div>
                        <div class="cart_tab_on" id="login_tab_select">Paso 3/3: Confirmar Compra</div>
                        <div class="cart_tab_right_on" id="login_tab_select_right"></div>
                    </div>
                    {/* <Link to={`/carritoDatos`}>
                        <button className="btn">Home</button>
                    </Link> */}
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <div className="col-md-8">
                <br/>
                {/* <button onClick={ConsoleLogCompradores}> ConsoleLogCompradores</button> */}
                <div className="container col-md-12" >
                    <div className="">
                        <table className="table"> 
                            <thead className="fondo shoC">
                                <tr>
                                    <th style={{width:"20%"}}>DATOS PERSONALES</th>
                                    <th style={{width:"20%"}}></th>
                                    <th style={{width:"20%"}}></th>
                                    <th style={{width:"20%"}} className="">
                                        {fireEnvio ? ("DIRECCIÓN DE ENVÍO") : ("")}  
                                    </th>
                                    <th style={{width:"20%"}} className=""></th>
                                    {/* <th style={{width:"16%"}} className="centre"></th> */}
                                </tr>
                            </thead>
                            {/* BODY START */}
                            <tbody>
                                <tr>
                                    <td style={{width:"20%"}}>Nombre Completo:</td>
                                    <td style={{width:"20%"}}>{fireName}</td>
                                    <td style={{width:"20%"}} className=""></td>
                                    <td style={{width:"20%"}} className="">
                                        {fireEnvio ? ("Calle y Nro:") : ("")}  
                                    </td>
                                    <td style={{width:"20%"}} className="">{fireDireccion}</td>                       
                                </tr>
                                <tr>
                                    <td style={{width:"20%"}}>Teléfono:</td>
                                    <td style={{width:"20%"}}>{firePhone}</td>
                                    <td style={{width:"20%"}} className=""></td>
                                    <td style={{width:"20%"}} className="">
                                        {fireEnvio ? ("Codigo Postal:") : ("")}  
                                    </td>
                                    <td style={{width:"20%"}} className="">{fireCP}</td>                
                                </tr>
                                <tr>
                                    <td style={{width:"20%"}}>Email:</td>
                                    <td style={{width:"20%"}}>{fireMail}
                                    </td>
                                    <td style={{width:"20%"}} className=""></td>
                                    <td style={{width:"20%"}} className="centre">
                                        {fireEnvio ? ("Localidad") : ("")}  
                                    </td>
                                    <td style={{width:"20%"}} className="centre">{fireLocalidad}</td>
                                </tr>
                                <tr>
                                    <td style={{width:"20%"}}>Retiro en local:</td>
                                    <td style={{width:"20%"}} className="AgregarDireccion">
                                        {fireEnvio ? ("Si") : ("No")}
                                    </td>
                                    <td style={{width:"20%"}} className=""></td>
                                    <td style={{width:"20%"}} className="centre"></td>
                                    <td style={{width:"20%"}} className="centre"></td>
                                </tr>
                            </tbody>
                            {/* FOOT START */}
                            <tfoot class="">
                                <tr></tr>
                            </tfoot>
                        </table>
                    </div>
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
                                <tr></tr>
                            </tfoot>
                        </table>
                    </div>
                </div>

                </div>
            </div>      
            <div className="d-flex justify-content-center">
                <div className="col-md-8">
                <br/>
                
                {/* <button onClick={ConsoleLogCompradores}> ConsoleLogCompradores</button> */}
                <div className="container col-md-12" >
                    <div className="">
                        <table className="table"> 
                            <thead className="fondo shoC">
                                <tr>
                                    <th style={{width:"25%"}}>DETALLE DE PRODUCTOS</th>
                                    <th style={{width:"25%"}}></th>
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
                                return <ItemCartDatos key={productCart} productCart={productCart}/>
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
                                <tr class="" >
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
                                <tr class="" style={{height: "100px"}}>
                                    <th class="" style={{width:"25%"}}>
                                        <div class="d-flex justify-content-center fixC">
                                            {/* <p class="" id=""><button onClick={eliminarTodo}> VaciarCarrito</button></p> */}
                                        </div>
                                    </th>
                                    <th class="monedaArs" style={{width:"25%"}}>
                                        <div class="d-flex justify-content-center fixC">
                                            {/* <p class="" id=""><button onClick={fireBuy} className="btn-success" disabled={false}>Comprar</button></p> */}
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

                </div>
                
            </div>            
            <br />
            <div className="d-flex justify-content-center">
                <div className="col-md-8 d-flex justify-content-between align-items-center noPad">
                    <div className="col-md- d-flex justify-content-left align-items-center ">
                    </div>
                    <div className="col-md- d-flex justify-content-right align-items-center noPad2">
                        <div className="test">
                            {/* <button className="previo hoverS">Home</button> */}
                            <Link to={`/carritoDatos`} ><button className="previo    ">Paso Anterior</button></Link>
                            <Link to={`#`}  onMouseOver={e => e.preventDefault()}><button className="disabled " disabled>1</button></Link>
                            <Link to={`#`}  onMouseOver={e => e.preventDefault()}><button className="disabled " disabled>2</button></Link>
                            <Link to={`#`}  onMouseOver={e => e.preventDefault()}><button className="disabled activated" disabled>3</button></Link>
                            <Link to={`/carritoConfirmarCompra`} ><button className=" comprar" onClick={fireBuy}>COMPRAR</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )} 

        
        </>

    )

}

export default CartContainerConfirmar;
