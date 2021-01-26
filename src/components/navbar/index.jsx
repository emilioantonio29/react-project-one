import 'bootstrap/dist/css/bootstrap.min.css';


const NavbarComponent = () => {
    return(
      <>
        
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand logo" href="#"><img src="imagenes/logo.png" alt=""/></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Mermeladas
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">Fresa</a>
                        <a class="dropdown-item" href="#">Manzana y Pera</a>
                        <a class="dropdown-item" href="#">Naranja</a>
                        <a class="dropdown-item" href="#">Jalapeño</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Pan de Jamon
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">Estandar</a>
                        <a class="dropdown-item" href="#">Hojaldre y Queso Crema</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Golfeados
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">Caramelizado</a>
                        <a class="dropdown-item" href="#">Golfeado con Queso </a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sobre Nosotros</a>
                    </li>
                </ul>
            </div>
        </nav>
        
  
      </>
    )
  
  }
  
  
  export default NavbarComponent;