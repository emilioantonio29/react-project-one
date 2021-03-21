import React, {useState, useEffect} from 'react';
import ItemCount from '../../containers/ItemCount';
import Item2 from '../Item/Item2';


const ItemDetailList = ({products2, productoID}) =>{

const test4 = () => {
    // console.log(products2[productoID].id)
    alert(products2)
    // console.log(parseInt(productoID)+1)
}




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

                    {products2.map((producto)=>{
                          if(products2[1].id == 2 ){
                            return <Item2 key={producto.id} producto={producto}/>

                          }
                        // return <Item2 key={product.id} product={product}/>;
                    })}

            </div>
            <button onClick={test4}> test22</button>
            
            
        </>
    )

}

export default ItemDetailList;