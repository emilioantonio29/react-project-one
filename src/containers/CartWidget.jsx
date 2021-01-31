
// import 'bootstrap/dist/css/bootstrap.min.css';


  const CartWidget = () =>{
    // const [carrito, setCarrito] = useState([]);

    // useEffect(()=>{
    //     // consultas a la BD, suscripciones como addeventlistener
    //     console.log("mounted")
    //     return () => {
    //         // remove listener
    //         // desuscripción BD
    //         console.log("unmounted RIP")
    //     }
    // },[]) 
    // [] filtro para saber cuando se ejecuta el useEffect
    // corchete vacio: Se ejecuta el useEffect en el onMount

    // se vuelve a renderizar, validaciones
    // console.log("por Renderizar")
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
                  <button type="button" className="btn notification" data-toggle="modal" data-target="#staticBackdrop2"> {/*resetProducto()*/}
                    {/* <i className="material-icons add_shopping_cart" data-target="#staticBackdrop2">&#xe854;</i> */}
                    <span className="material-icons sizeC">
                      shopping_cart
                    </span>
                    {/* <span className="material-icons cirC">
                      lens
                    </span> */}
                  </button>
                </li>
              </ul>
            </div>
        </div>
            
        </>
    )

}
  
  
  export default CartWidget;
  