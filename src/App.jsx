// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar/';
import ButtonComponent from './components/button/';
import ItemListContainer from './containers/ItemListContainer';
import ItemListContainer2 from './containers/ItemListContainer2';
import ItemCount from './containers/ItemCount';





// let estilos = {color:'red',background:'black'}
// function App() {
//   return (
//       <div className="App">
//         <button className="btn btn-success">test</button>
//       </div>
//   );
  
// } 

const App = () => {
  // logica antes del return
  const Saludar = () => {
    alert("hola")
}
  //
  return(
    <>
      <NavbarComponent/>



      {/* <div className="container">React Project</div> */}
      {/* <button onClick={Saludar} className="btn btn-success">Comprar</button> */}
      
      {/* React */}
      {/* <ButtonComponent text={`texto cambiado test`}/>  */}
      {/* text: parametro | valor */}
      {/* <ButtonComponent text={`Agregar al carrito`}/>
      <ButtonComponent/>
      <ButtonComponent/>
      <ButtonComponent/> */}

      <ItemListContainer/>
      {/* <ItemListContainer2/> */}
      
      {/* <div>contador importado "ItemCount"</div>
      <ItemCount/> */}
    </>
  )

}


export default App;