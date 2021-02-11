
const Item = ({product}) => {
    return <div className="card col-md-6">
        <h3>{product.nombre}</h3>
        <p>Precio: {product.precio} {product.moneda}</p>
        <p>Stock: {product.cantidad}</p>
    </div>
    
}

export default Item;