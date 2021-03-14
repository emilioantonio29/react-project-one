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


const CartContainerConfirmar = () =>{
    const {fireEnvio, setFireEnvio,fireLocalidad, setFireLocalidad,fireCP, setFireCP,fireDireccion, setFireDireccion,fireMail, setFireMail,firePhone, setFirePhone,fireName, setFireName} = React.useContext(GlobalContext);
    // const [show, setShow] = React.useState(true);
    const [carrito, setCarrito] = React.useState([]);
    const [carritoS, setCarritoS] = React.useState([]);
    const [carritoFire, setCarritoFire] = React.useState([]);
    const [disabled, setDisabled] = React.useState(false);
    const [showCart, setShowCart] = React.useState(false);
    const [showTable, setShowTable] = React.useState(true);
 
    React.useEffect(()=>{
        console.log("testsrer")

        return () => {
            // setFireEnvio(false)
        }
    },[]);

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
        {showCart ? ("") : (

            <div className="d-flex flex-column">
            <div className="d-flex justify-content-center" >
                <div className="col-md-8 d-flex justify-content-left align-items-center noPad">
                    <p >
                        <Link to={`/`}>
                        <button className="btn">Home</button>
                        </Link>
                    </p>
                    <p><bold><i class="fa fa-angle-right"></i></bold></p>
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
                    <Link to={`/carritoDatos`}>
                        <button className="btn">Home</button>
                    </Link>
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
            <br/>
            <div className="d-flex justify-content-center" >
                <div className="col-md-8 d-flex justify-content-between align-items-center noPad" >
                    <div className="col-md- d-flex justify-content-left align-items-center ">

                    </div>
                    <div className="col-md- d-flex justify-content-right align-items-center noPad2">
                    <nav aria-label="...">
                        <ul class="pagination">
                            <li class="page-item">
                                <a class="page-link" href="#" tabindex="-1"><Link to={`/carritoDatos`}>Paso Anterior</Link></a>
                            </li>
                            <li class="page-item disabled">
                                <a class="page-link activeS" href="#">1 <span class="sr-only">()</span></a>
                            </li>
                            <li class="page-item disabled">
                                <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="page-item disabled">
                                <a class="page-link" href="#">3</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#"><Link to={`/carritoConfirmarCompra`}>Siguiente</Link></a>
                            </li>
                        </ul>
                        </nav>
                        {/* <div className="test">
                        <a href="#" class="previous ">&laquo; Previous</a>
                        <a href="#" class="next"><Link to={`/`}>Home </Link></a>
                        <a href="#" class="active "><Link to={`/`}>Home </Link></a>
                        <Link to={`/`}>
                        <button className="btn">Home</button>
                        </Link>
                        </div> */}
                    </div>
                    
                    
                </div>
                </div>   
            </div>
        )} 

        
        </>

    )

}

export default CartContainerConfirmar;
