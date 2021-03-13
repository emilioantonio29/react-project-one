// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar/';

import ButtonComponent from './components/button/';
import ItemListContainer from './containers/ItemListContainer';
import ItemListContainer2 from './containers/ItemListContainer2';
import ItemCount from './containers/ItemCount';
import  {BrowserRouter, Switch, Route} from 'react-router-dom';
        //engloba la app
                        //rutas a manejar
import ItemDetailContainer from './containers/ItemDetailContainer';
import { GlobalContext, GlobalProvider } from './context/GlobalContext';
import { CartContext } from './context/CartContext';
import { useState } from 'react';
import CartContainer from './containers/CartContainer';
import FooterComponent from './components/footer/';



// let estilos = {color:'red',background:'black'}
// function App() {
//   return (
//       <div className="App">
//         <button className="btn btn-success">test</button>
//       </div>
//   );
  
// } 

const App = () => {
  const [id, setID] = useState(2); //test
  const [precio, setPrecio] = useState(9999); //test
  // logica antes del return
  const Saludar = () => {
    alert("hola")
}
  
  // 
  return( 
    <GlobalProvider>
      <BrowserRouter>
      <NavbarComponent/>
        <Switch>
          <Route exact path="/" component={ItemListContainer}/>
          <Route exact path="/ItemDetailContainer/:productoID" component={ItemDetailContainer}/>
          <Route exact path="/carrito" component={CartContainer}/>
          <Route path="*" children={<div>Not found</div>}/>
        </Switch>
      <FooterComponent/>
      </BrowserRouter>
    </GlobalProvider>
  );

}


export default App;
