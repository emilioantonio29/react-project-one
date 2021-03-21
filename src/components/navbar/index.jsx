import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../../containers/CartWidget';
import  {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './style.css'
import React from 'react';



const NavbarComponent = () => {


    return(
      <>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center reset">
            <div className="d-flex align-items-center col-md-8 reset">
            
            <Link to={`/`}><img src={`../imagenes/logo.png`} alt=""/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavDropdown">
                <ul className="navbar-nav">
                        <React.Fragment>
                        
                        <NavLink to={`/`} exact activeClassName="bg-success">
                            <button className="btn">Todos los Productos</button>
                        </NavLink>
                      
                        <NavLink to={`/mermeladas`} exact activeClassName="bg-success">
                            <button className="btn">Mermeladas</button>
                        </NavLink>

                        <NavLink to={`/pandejamon`} exact activeClassName="bg-success">
                            <button className="btn">Pan de Jamon</button>
                        </NavLink>
                  
                        <NavLink to={'/golfeados'} exact activeClassName="bg-success">
                            <button className="btn">Golfeados</button>
                        </NavLink>
                        </React.Fragment>
          
                </ul>
            </div>
            <div className="ml-auto">
                <CartWidget/>
            </div>
            </div>
        </nav>
      </>
    )
  
  }
  
  
  export default NavbarComponent;