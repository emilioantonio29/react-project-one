import {Link} from 'react-router-dom';
import * as React from 'react';



const Item = ({product}) => {
    const [stockDisponible, setstockDisponible] = React.useState(product.producto.cantidad)


    React.useEffect(()=>{
      
        if(localStorage.getItem(product.producto.id) === null){
            setstockDisponible(product.producto.cantidad)
        }else{
            let variableCarrito = JSON.parse(localStorage.getItem(product.producto.id))
            setstockDisponible(product.producto.cantidad - variableCarrito[3])
        }
        document.title = `${stockDisponible}`
        return () => {

    

        }
    },[]);



    return (
            
      
            
            <div className="container item" style={{width: "500px"}}>
                
                <div className="row">
                    <div className="card mb-3 d-inline-flex" style={{width: "600px"}}>
                        <div className="row g-0">
                            <div className="col-md-4 imagenItem" style={{}}>
                                <img src={`../imagenes/${product.producto.imagen}.png`} alt=""/>    
                                {/* <img src={"https://drive.google.com/file/d/1ABeWpRqjESxig8ke9VlIGm6NWJs-OT1r/view"} alt=""/>     */}
                            </div>
                            <div className="col-md-8">  
                            <div className="card-body" style={{padding:"10px 10px 0px 0px"}}>
                                <h6 className="card-title">{product.producto.nombre}</h6>
                                <div className="d-flex">
                                    <p className="">Precio: {product.producto.precio} {product.producto.moneda}</p>
                                    <p className="" style={{marginLeft:"30px"}}>Stock: {stockDisponible}</p>
                                </div>
                                <Link to={`/ItemDetailContainer/${product.producto.id}`}>
                                    <button className="botonNow botonNow6 btnNoStyle">Comprar</button>      
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