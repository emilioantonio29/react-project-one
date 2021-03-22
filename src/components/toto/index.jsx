import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../../containers/CartWidget';
import  {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './style.css'
import { getFirestore } from '../../firebase';
import { GlobalContext } from '../../context/GlobalContext';



const TotoTools = () => {
  const {fireEnvio,dolar, getDolar,fireMail, setFireMail,firePhone, setFirePhone,fireName, setFireName,buyers, setBuyers,cart,setCart,firstAsync,globalTest3,globalTest4,total, setTotal,arrayCart,globalTest,render, setRender,renderFunction} = React.useContext(GlobalContext);


  const ConsoleLogCompradores = () => {

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
        setBuyers(temp)
    })
    console.log(buyers)
 
    // if(showCart===true){
    //     setShowCart(false)
    // }else{
    //     setShowCart(true)
    // }
    }
    const addFirebase = async () =>{
      const db = getFirestore()
      const itemCollection = db.collection("producto");// guardamos la referencia
      itemCollection.get().then((value) => {
          // console.log(value.docs.keys)
          let temp = value.docs.map(element => {
              // return {...element.data(), id:element.id}
              return {"producto": {...element.data(), id:element.id}}
          })
              
          // value.docs.map(element => {console.log(element.data())})
          // value.docs.map(element => {console.log({...element.data(), id:element.id})})
          setBuyers(temp)
      })
      console.log(buyers.length)
          let newOrder = {
              cantidad:12, 
              descript:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              id: buyers.length+1,
              imagen: "https://drive.google.com/uc?export=view&id=1BaYGFlQ_SzhyMRGxUSQYpRW4SfHRXYB-",
              moneda: "$",
              nombre: "TEST: Mermelada de Naranja",
              precio: 260,
              tipo: "Mermeladas"

          }
          
          const ordenesCollection = await db.collection("producto")
          ordenesCollection.add(newOrder).then(
          alert("ITEM AGREGADO: RECARGA LA PAGINA PARA VER EL NUEVO PRODUCTO")
          )
      
  }
  
  
  const getBlue = () =>{
    console.log(`FETCH GLOBALCONTEXT: el valor del dolarBlue es ${dolar}.`)
    console.log(`Estructura: DATA[1].casa.venta`)
    console.log(`Fuente: https://www.dolarsi.com/api/api.php?type=valoresprincipales`)
  }

  const retiroLocal = () =>{
    console.log(fireEnvio)
  }


    return(
      <>
        <div className="totoDiv">
            <div><h6>TotoTools - ConsoleLogs</h6></div>
            <div className="d-flex  flex-column">
                <br/>
                <div className="d-flex justify-content-between">
                  <p>ConsoleLog de compras realizadas</p>
                  <button className="toto"  onClick={ConsoleLogCompradores} style={{width:"40px"}}>GO</button>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Agregar Item de Prueba a FireBase (reloadPage After)</p>
                  <button className="toto" onClick={addFirebase} style={{width:"40px"}}>GO</button>
                </div>
                <div className="d-flex justify-content-between">
                  <p>ConsoleLog dolarBlue </p>
                  <button className="toto" onClick={getBlue} style={{width:"40px"}}>GO</button>
                </div>
                <div className="d-flex justify-content-between">
                  <p>ConsoleLog el pedido actual tiene retiro en local?</p>
                  <button className="toto" onClick={retiroLocal} style={{width:"40px"}}>GO</button>
                </div>
            </div>

        </div>

      </>
    )
  
  }
  
  
  export default TotoTools;