import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../../containers/CartWidget';
import  {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './style.css'
import { getFirestore } from '../../firebase';
import { GlobalContext } from '../../context/GlobalContext';



const TotoTools = () => {
  const {fireMail, setFireMail,firePhone, setFirePhone,fireName, setFireName,buyers, setBuyers,cart,setCart,firstAsync,globalTest3,globalTest4,total, setTotal,arrayCart,globalTest,render, setRender,renderFunction} = React.useContext(GlobalContext);


  const ConsoleLogCompradores = () => {
    // console.log(fireName)
    // console.log(firePhone)
    // console.log(fireMail)
    const db = getFirestore()
    const itemCollection = db.collection("ordenes");// guardamos la referencia
    itemCollection.get().then((value) => {
        // console.log(value.docs.keys)
        let temp = value.docs.map(element => {
            // return {...element.data(), id:element.id}
            return {"ordenes": {...element.data(), id:element.id}}
        })
            
        // value.docs.map(element => {console.log(element.data())})
        // value.docs.map(element => {console.log({...element.data(), id:element.id})})
        // setBuyers(temp)
    })
    console.log(buyers)
 
    // if(showCart===true){
    //     setShowCart(false)
    // }else{
    //     setShowCart(true)
    // }
    }

    return(
      <>
        <div className="totoDiv">
            <div><h6>TotoTools - ConsoleLogs</h6></div>
            <div className="d-flex  flex-column">
                <div className="d-flex">
                <p>Revisar historico de compras realizadas</p>
                <button  onClick={ConsoleLogCompradores} style={{width:"50px"}}>GO</button>

                </div>
                <button>test</button>
                <button>test</button>
                <button>test</button>
            </div>

        </div>

      </>
    )
  
  }
  
  
  export default TotoTools;