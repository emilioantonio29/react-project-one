import React, {useState, useEffect} from 'react';
import ItemCount from '../../containers/ItemCount';
import Item from '../Item/Item';
import { Container, Row, Col } from 'reactstrap';


const ItemListGolfeado = ({products}) =>{

//    const productos = [
//         ["Mermelada Frutilla", 250, "Mermelada 100% natural reducida en azucar"],
//         ["Mermelada Naranja", 280, "Realizada con los mejores productos naturales"]
//     ]

    return(
        <>
            {/* <div className="col-md-8 ">
                <div className="col-md-8 d-flex  justify-content-start ">
                {products.map((product)=>{
                        return <Item key={product.producto.id} product={product}/>;
                    })}


                </div>
            </div> */}

                    {/* <div className="container" style={{:"1px solid blue"}}>
                        <div className="row"> */}
                        <div className="d-flex justify-content-center">
                        <div className="col-md-8">
                            <div  className="itemList d-flex flex-wrap">
                            {
                                    products.filter(producto => producto.producto.tipo === "Golfeados")
                                    .map((product)=>{
                                        return <Item key={product} product={product}/>
                                    })

                                }
                            </div>
                            </div>
                            </div>
                        {/* </div>
                    </div> */}
                    
                    

        </>
    )

}

export default ItemListGolfeado;