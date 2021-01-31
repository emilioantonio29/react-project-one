import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../../containers/CartWidget';



const NavbarComponent = () => {


    return(
      <>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand logo" href="#"><img src="imagenes/logo.png" alt=""/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Mermeladas
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">Fresa</a>
                        <a className="dropdown-item" href="#">Manzana y Pera</a>
                        <a className="dropdown-item" href="#">Naranja</a>
                        <a className="dropdown-item" href="#">Jalapeño</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Pan de Jamon
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">Estandar</a>
                        <a className="dropdown-item" href="#">Hojaldre y Queso Crema</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Golfeados
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">Caramelizado</a>
                        <a className="dropdown-item" href="#">Golfeado con Queso </a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sobre Nosotros</a>
                    </li>
                </ul>
            </div>
            <div className="ml-auto">
                <CartWidget/>
            </div>
        </nav>
      </>
    )
  
  }
  
  
  export default NavbarComponent;