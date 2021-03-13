import './style.css'
import React, {useState, useEffect} from 'react';


  const ItemCount = () =>{
    const [cantidad, setCantidad] = useState(1);

    useEffect(()=>{
        document.title = `${cantidad}`
        console.log("mounted")
        return () => {
            console.log("unmounted RIP")
        }
    },[]) 

    return(
        <>
            <div className="d-flex align-items-center justify-content-between cajaCount">
                <div>
                    <button onClick={()=>{setCantidad(cantidad < 2 ? cantidad : cantidad - 1 )}}>-</button> 
                </div>
                <div>
                    <p>{cantidad}</p>
                </div>
                <div className="">
                    <button onClick={()=>{setCantidad(cantidad > 11 ? cantidad : cantidad + 1 )}}>+</button> 
                </div>
            </div>
        </>
    )

}
  
  
  export default ItemCount;