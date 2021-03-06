
// import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import {Link} from 'react-router-dom';
import  {BrowserRouter, Switch, Route} from 'react-router-dom';

  const CartWidget = () =>{


    React.useEffect(()=>{
      // consultas a la BD, suscripciones como addeventlistener
      console.log("im cartIcon")
      return () => {

          console.log("unmounted widget")

      }
  },[]);

    return(
        <>
            <div className="ml-auto">
            <div>
              <ul className="navbar-nav">
                <li className="nav-item">
                  {/* <!-- Button trigger modal --> */}
                  <button type="button" className="btn notification" data-toggle="modal" data-target="#staticBackdrop">
                    <span className="material-icons sizeC2 favorite">
                      favorite_border
                    </span>
                    {/* <span className="material-icons sizeC2 favorite2 escon">
                      favorite
                    </span>  */}
                  </button>
                 
                  {/* <!-- carrito --> */}
                  <Link to={`/carrito`}>
                      <button type="button" className="btn notification" data-toggle="modal" data-target="#staticBackdrop2">   
                        <span className="material-icons sizeC">
                          shopping_cart
                        </span>
                        {/* <span className="material-icons cirC">
                          lens
                        </span> */}
                      </button>
                  </Link>
                </li>
              </ul>
            </div>
        </div>
            
        </>
    )

}
  
  
  export default CartWidget;
  