// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar/';
import ItemListContainer from './containers/ItemListContainer';
import  {BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemDetailContainer from './containers/ItemDetailContainer';
import { GlobalProvider } from './context/GlobalContext';
import { useState } from 'react';
import CartContainer from './containers/CartContainer';
import CartContainerDatos from './containers/CartContainerDatos';
import FooterComponent from './components/footer/';
import CartContainerConfirmar from './containers/CartContainerConfirmar';
import TotoTools from './components/toto/'
import {Link} from 'react-router-dom';
import ItemListContainerGolfeado from '../src/containers/ItemListContainerGolfeado';
import ItemListContainerMermelada from './containers/ItemListContainerMermelada';
import ItemListContainerPan from './containers/ItemListContainerPan';


const App = () => {
//   const [id, setID] = useState(2); //test
//   const [precio, setPrecio] = useState(9999); //test
//   // logica antes del return
//   const Saludar = () => {
//     alert("hola")
// }
  
  // 
  return( 
    
    <GlobalProvider>
      <BrowserRouter>   
      <NavbarComponent/>
      <TotoTools/>
      {/* <Route exact path="/golfeados" component={ItemListContainerGolfeado}/> */}
        <Switch>
          <Route exact path="/Golfeados" component={ItemListContainerGolfeado}/>
          <Route exact path="/Mermeladas" component={ItemListContainerMermelada}/>
          <Route exact path="/PanesDeJamon" component={ItemListContainerPan}/>
          <Route exact path="/react-project-one" component={ItemListContainer}/>
          <Route exact path="/ItemDetailContainer/:productoID" component={ItemDetailContainer}/>
          <Route exact path="/carrito" component={CartContainer}/>
          <Route exact path="/carritoDatos" component={CartContainerDatos}/>
          <Route exact path="/carritoConfirmarCompra" component={CartContainerConfirmar}/>
          <Route path="*" children={
              <div className="d-flex flex-column">
                <div className="d-flex justify-content-center" >
                    <div className="col-md-8 d-flex justify-content-left align-items-center noPad">
                        <p >
                            <Link to={`/react-project-one`}>
                            <button className="btn">Home</button>
                            </Link>
                        </p>
                        <p><i class="fa fa-angle-right"></i></p>
                        <p style={{paddingLeft:"10px"}}> Page Not Found</p>
                    </div>
                    </div>
                    <div className="d-flex justify-content-center" style={{height:"500px"}}>
                      <div>
                        <h1 style={{marginTop:"200px"}}>Page Not Found</h1>
                      </div>
                </div>
              </div>
            }/>
        </Switch>
      <FooterComponent/>
      </BrowserRouter>
    </GlobalProvider>
  );

}


export default App;
