// COMPONENTE DE PRESENTACION:
 
// se limitan a mostrar datos y tienen poca o nula logica asociada a manipulacion del estado (stateless components); solo muestra datos
// - esta orientado al aspecto visual
// - recibe callback por propiedades (evento que ejecuta el componente y le devuelve un valor al padre)
// - normalmente no tienen estado

// ------------------------------------------------------------------------------------------------------------------------------------

// COMPONENTE CONTENEDORES:
 
// Es lo opuesto de componentes de presentación. Contienen a muchos componentes hijos que son de presentación. Si contienen logica y funcionalidades.
// ejemplo: un container de cards (productos)
// - Encapsulan otros componentes y les proporcionan las propiedades que necesitan
// - modifican el estado de la aplicacion para que el usuario vea el cambio en los datos (state components)
// - Usualmente tienen estado para representar el cambio en los datos
// - Orientados al funcionamiento de la aplicacion
// - Se comunican con las fuentes de datos: EJ - el contenedor consulta la base de datos y con props le pasa los datos al componente child (card)
//   Tambien ejecuta llamados a APIs externas


import './style.css'

// const ButtonComponent = (props) =>{                                   // Le pasa una prop a la funcion. Hay que utilizar la sintaxis de punto (objetos) para acceder al valor deseado
const ButtonComponent = ({text}) =>{                                     // destructuring; Se desestrura el objeto y solo tomamos el valor que queremos del objeto
    const Saludar2 = () => {
        alert("hola Coders")
    }
    return(
        // <button onClick={Saludar2}>{props.text}</button>
        <button onClick={Saludar2}>{text}</button>

    )
}

// dos formnas de exportar los componentes


// 1
export default ButtonComponent;

// 2 

// export const buttonComponent = () =>{
//     return(
//         <button>hola Mundo!!!</button>

//     )
// }


// Comentarios:

// PROPIEDADES: forma que tiene react de pasar parametros de un componente superior a los children
// los parametros van del componente padre al hijo
// los callbacks van del hijo al padre



// COMPONENTES:

// Props
// State 
// Dom Sync
// LifeCycle