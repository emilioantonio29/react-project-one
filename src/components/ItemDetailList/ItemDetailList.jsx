import React, {useState, useEffect} from 'react';
import ItemCount from '../../containers/ItemCount';
import Item2 from '../Item/Item2';
// import Item2 from '../Item/Item2';



const ItemDetailList = ({products2}) =>{


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
                    {products2.map((producto)=>{
                        // return <Item2 key={product.id} product={product}/>;

                        return <Item2 key={producto.id} producto={producto}/>
                    })}
                </ul>
            </div>
        </>
    )

}

export default ItemDetailList;