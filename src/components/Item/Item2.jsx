
const Item2 = ({producto}) => {
    return <div className="card col-md-6">
        <img src={`../imagenes/${producto.imagen}.png`} alt=""/>
        <h3>{producto.nombre}</h3>
        <p>Precio: {producto.precio} {producto.moneda}</p>
        <p>Stock: {producto.cantidad}</p>
        <p>Categoria: {producto.tipo}</p>
        <p>Descripción: {producto.descript}</p>
    </div>
    
}

export default Item2;

