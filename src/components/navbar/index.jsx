import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../../containers/CartWidget';
import  {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './style.css'
import React from 'react';
import Logo from './logo.png'


const NavbarComponent = () => {


    return(
      <>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center reset">
            <div className="d-flex align-items-center col-md-8 reset">
            
            <Link to={`/react-project-one`}><img src="https://drive.google.com/uc?export=view&id=1kChaoDDFEVUdIQWEVAeIGu7JkzWgYdav" alt=""/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavDropdown">
                <ul className="navbar-nav linkEffect">
                        <React.Fragment>
                        <li>
                        <NavLink to={`/react-project-one`} exact activeClassName="linkEffectActive">
                            <button className="btn">Todos los Productos</button>
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to={`/Mermeladas`} exact activeClassName="linkEffectActive">
                            <button className="btn">Mermeladas</button>
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to={`/PanesDeJamon`} exact activeClassName="linkEffectActive">
                            <button className="btn">Pan de Jamon</button>
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to={'/Golfeados'} exact activeClassName="linkEffectActive">
                            <button className="btn">Golfeados</button>
                        </NavLink>
                        </li>
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