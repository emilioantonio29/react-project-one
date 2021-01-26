// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar/';




// let estilos = {color:'red',background:'black'}
// function App() {
//   return (
//       <div className="App">
//         <button className="btn btn-success">test</button>
//       </div>
//   );
  
// }

const App = () => {
  return(
    <>
      <NavbarComponent/>
      <div className="container">React Project</div>

    </>
  )

}


export default App;
