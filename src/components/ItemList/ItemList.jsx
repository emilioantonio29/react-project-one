import React, {useState, useEffect} from 'react';
import ItemCount from '../../containers/ItemCount';
import Item from '../Item/Item';



const ItemList = ({products}) =>{


//    const productos = [
//         ["Mermelada Frutilla", 250, "Mermelada 100% natural reducida en azucar"],
//         ["Mermelada Naranja", 280, "Realizada con los mejores productos naturales"]
//     ]

    return(
        <>
            {/* {productos.map((element,index) => {
                return(<div key={index} className="card col-md-3">

                    <h2>{element[0]}</h2> 
                    <p>Precio: {element[1]} $</p>
                    <p>{element[2]}</p>
                    <ItemCount/>
                </div>) 
            })}   */}
            <div>
                <ul>
                    {products.map((product)=>{
                        return <Item key={product.id} product={product}/>;
                    })}

                </ul>
            </div>
 
        </>
    )

}

export default ItemList;