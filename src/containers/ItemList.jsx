import React, {useState, useEffect} from 'react';
import ItemCount from './ItemCount';

const ItemList = () =>{


   const productos = [
        ["Mermelada Frutilla", 250, "Mermelada 100% natural reducida en azucar"],
        ["Mermelada Naranja", 280, "Realizada con los mejores productos naturales"]
    ]
    return(
        <>
            {productos.map((element,index) => {
                return(<div key={index} className="card col-md-3">

                    <h2>{element[0]}</h2> 
                    <p>Precio: {element[1]} $</p>
                    <p>{element[2]}</p>
                    <ItemCount/>
                </div>)
            })}  
        </>
    )

}

export default ItemList;