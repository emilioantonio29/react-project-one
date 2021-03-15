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


const CartContainerDatos = () =>{
    const {fireEnvio, setFireEnvio,fireLocalidad, setFireLocalidad,fireCP, setFireCP,fireDireccion, setFireDireccion,fireMail, setFireMail,firePhone, setFirePhone,fireName, setFireName} = React.useContext(GlobalContext);
    // const [show, setShow] = React.useState(true);
    const [carrito, setCarrito] = React.useState([]);
    const [carritoS, setCarritoS] = React.useState([]);
    const [carritoFire, setCarritoFire] = React.useState([]);
    const [disabled, setDisabled] = React.useState(false);
    const [showCart, setShowCart] = React.useState(false);
    const [showTable, setShowTable] = React.useState(true);
    const [aria, setAria] = React.useState();
   
   
    React.useEffect(()=>{
        if(localStorage.length!=0){
            setShowCart(false)
        }else{
            setShowCart(true)
        }
        console.log("renders")
        console.log(fireEnvio)
        if(fireEnvio===false){
            setShowTable(true)
            setAria("btn btn-sm btn-toggle")
          
        }else{
            setShowTable(false)
            setAria("btn btn-sm btn-toggle active")
        }
        return () => {

        }
    },[]);

    const showDireccion = () => {
        if (showTable===true){
            setShowTable(false)
            setFireEnvio(true)
        }else{
            setShowTable(true)
            setFireEnvio(false)
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
                    <p><i className="fa fa-angle-right"></i></p>
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
                    <p><i className="fa fa-angle-right"></i></p>
                    <p style={{paddingLeft:"10px"}}> Cart</p>
                </div>
            </div>
            <div className="d-flex justify-content-center" >
            <div className="col-md-8 d-flex justify-content-left align-items-center ">
                    <p style={{padding:"0px 10px 0px 80px"}}> <span  className="material-icons subdirectory_arrow_right">
                    subdirectory_arrow_right
                    </span></p>
                    <p style={{padding:"0px 10px 0px 10px"}}>Paso 1/3: Checkout</p>
                    <p style={{padding:"0px 10px 0px 10px"}}><i className="fa fa-angle-right"></i></p>
                    <div className="cart_tab">
                        <div className="cart_tab_left_on" id="login_tab_select_left"></div>
                        <div className="cart_tab_on" id="login_tab_select">Paso 2/3: Datos Cliente</div>
                        <div className="cart_tab_right_on" id="login_tab_select_right"></div>
                    </div>
                    <p style={{padding:"0px 10px 0px 10px"}}><i className="fa fa-angle-right"></i></p>
                    <p style={{padding:"0px 10px 0px 10px"}}>Paso 3/3: Confirmar Compra</p>
                    {/* <Link to={`/carritoConfirmarCompra`}>
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
                                        {showTable ? ("") : ("DIRECCIÓN DE ENVÍO")}  
                                    </th>
                                    <th style={{width:"20%"}} className=""></th>
                                    {/* <th style={{width:"16%"}} className="centre"></th> */}
                                </tr>
                            </thead>
                            {/* BODY START */}
                            <tbody>
                                <tr>
                                    <td style={{width:"20%"}}>Nombre Completo:</td>
                                    <td style={{width:"20%"}}>
                                        <input type="text" id="name" placeholder="Emilio Martinez" className="form-control" required onChange={(e) => setFireName(e.target.value)}/>
                                    </td>
                                    <td style={{width:"20%"}} className=""></td>
                                    <td style={{width:"20%"}} className="">
                                        {showTable ? ("") : ("Calle y Nro:")}  
                                    </td>
                                    <td style={{width:"20%"}} className="">
                                        {showTable ? ("") : (
                                            <input type="text" id="calleNro" placeholder="CallePrueba 1160" className="form-control" required onChange={(e) => setFireDireccion(e.target.value)}/>
                                        )}  
                                    </td>                       
                                </tr>
                                <tr>
                                    <td style={{width:"20%"}}>Teléfono:</td>
                                    <td style={{width:"20%"}}>
                                        <input type="text" id="cel" placeholder="11-99998888" className="form-control" required onChange={(e) => setFirePhone(e.target.value)}/>
                                    </td>
                                    <td style={{width:"20%"}} className=""></td>
                                    <td style={{width:"20%"}} className="">
                                        {showTable ? ("") : ("Codigo Postal:")}  
                                    </td>
                                    <td style={{width:"20%"}} className="">
                                        {showTable ? ("") : (
                                            <input type="text" id="cp" placeholder="1162" className="form-control" required onChange={(e) => setFireCP(e.target.value)}/>
                                        )}
                                    </td>                
                                </tr>
                                <tr>
                                    <td style={{width:"20%"}}>Email:</td>
                                    <td style={{width:"20%"}}>
                                        <input type="text" id="email" placeholder="emilio@example.com.ar"  className="form-control" required onChange={(e) => setFireMail(e.target.value)}/>
                                    </td>
                                    <td style={{width:"20%"}} className=""></td>
                                    <td style={{width:"20%"}} className="centre">
                                        {showTable ? ("") : ("Localidad")}  
                                    </td>
                                    <td style={{width:"20%"}} className="centre">
                                        {showTable ? ("") : (
                                            <input type="text" id="localidad" placeholder="CABA" className="form-control" required onChange={(e) => setFireLocalidad(e.target.value)}/>
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{width:"20%"}}>Envío a domicilio:</td>
                                    <td style={{width:"20%"}} className="AgregarDireccion">
                                        {fireEnvio ? (
                                            <button id="" onClick={showDireccion} type="button" className={aria} data-toggle="button" aria-pressed="false"
                                            autoComplete="off" id="">
                                            <div className="handle"></div>
                                            </button>
                                        ) : (
                                            <button id="" onClick={showDireccion} type="button" className={aria} data-toggle="button" aria-pressed="false"
                                            autoComplete="off" id="">
                                            <div className="handle"></div>
                                            </button>
                                        )}
                                        {/* <button onClick={()=>{console.log(fireEnvio)}}> ConsoleLogCompradores</button>
 */}
                                    </td>
                                    <td style={{width:"20%"}} className=""></td>
                                    <td style={{width:"20%"}} className="centre"></td>
                                    <td style={{width:"20%"}} className="centre"></td>
                                </tr>
                            </tbody>
                            {/* FOOT START */}
                            <tfoot className="">
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
                            <tfoot className="">
                                <tr></tr>
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
                            <Link to={`/carrito`} ><button className="previo    ">Paso Anterior</button></Link>
                            <Link to={`#`}  onMouseOver={e => e.preventDefault()}><button className="disabled " disabled>1</button></Link>
                            <Link to={`#`}  onMouseOver={e => e.preventDefault()}><button className="disabled activated" disabled>2</button></Link>
                            <Link to={`#`}  onMouseOver={e => e.preventDefault()}><button className="disabled" disabled>3</button></Link>
                            <Link to={`/carritoConfirmarCompra`} ><button className="previo ">Siguiente</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )} 

        
        </>

    )

}

export default CartContainerDatos;
