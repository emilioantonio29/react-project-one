import {Link} from 'react-router-dom';
import * as React from 'react';
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup'
import CardColumns from 'react-bootstrap/CardColumns'
import { Card, CardImg, CardText, CardTitle, CardSubtitle, Button } from 'reactstrap';


const Item = ({product}) => {
    const [stockDisponible, setstockDisponible] = React.useState(product.producto.cantidad)


    React.useEffect(()=>{
        console.log("ItemJsx Mounted")
        if(localStorage.getItem(product.producto.id) === null){
            setstockDisponible(product.producto.cantidad)
            console.log("ItemJsx: Storage localNull")
        }else{
            let variableCarrito = JSON.parse(localStorage.getItem(product.producto.id))
            setstockDisponible(product.producto.cantidad - variableCarrito[3])
        }
        document.title = `${stockDisponible}`
        return () => {

            console.log("ItemJsx Unmounted")

        }
    },[]);

    const test = () => {
        console.log(product.producto.id)
        
    }

    return (
            
       
            // <div className="col-md-6 " style={{border:"1px solid yellow"}}>
            // {/* <img src={`../imagenes/${product.producto.imagen}.png`} alt=""/>     */}
            // <div className="d-flex">
            //                 <p class="">Precio: {product.producto.precio} {product.producto.moneda}</p>
            //                 <p class="" style={{marginLeft:"30px"}}>Stock: {stockDisponible}</p>
            //             </div>
            //             {/* <Link to={`/ItemDetailContainer/${product.producto.id}`}>
            //                 <button class="botonNow botonNow6 btnNoStyle">Comprar</button>      
            //             </Link> */}
                
            // </div>
      
            
            <div className="container item" style={{width: "500px"}}>
                
                <div className="row">
                    <div class="card mb-3 d-inline-flex" style={{width: "600px"}}>
                        <div class="row g-0">
                            <div class="col-md-4 imagenItem" style={{}}>
                                <img src={`../imagenes/${product.producto.imagen}.png`} alt=""/>    
                            </div>
                            <div class="col-md-8">  
                            <div class="card-body" style={{padding:"10px 10px 0px 0px"}}>
                                <h6 class="card-title">{product.producto.nombre}</h6>
                                <div className="d-flex">
                                    <p class="">Precio: {product.producto.precio} {product.producto.moneda}</p>
                                    <p class="" style={{marginLeft:"30px"}}>Stock: {stockDisponible}</p>
                                </div>
                                <Link to={`/ItemDetailContainer/${product.producto.id}`}>
                                    <button class="botonNow botonNow6 btnNoStyle">Comprar</button>      
                                </Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

      </div>
            </div>


    )}

export default Item;