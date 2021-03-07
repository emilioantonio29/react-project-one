import * as React from 'react';
import ItemList from '../components/ItemList/ItemList';
import ProductList from '../mocks/ProductList';
import {Link} from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import { CartContext } from '../context/CartContext';
import { getFirestore } from '../firebase';





const ItemListContainer = () =>{
    const {cart,setCart,prueba, setPrueba, globalTest,globalTest2,cart2,setCart2,firstAsync,globalTest3,globalTest4,products, setProducts} = React.useContext(GlobalContext);

    // const [products, setProducts] = React.useState([]);
    const [load, setLoad] = React.useState("CARGANDO . . .");

    // React.useEffect(() => {
    //     const myPromise = new Promise ((resolve, reject) => {
    //         // setTimeout(() => resolve(ProductList), 3000);
    //         setTimeout(() => {    
    //             resolve(ProductList);
    //             setLoad("");    
    //         }, 3000);
    // });
    
    //     myPromise.then((result) => setProducts(result));
    // },[]);     
    // React.useEffect(() => {
    //     const bd = getFirestore();// conexion a la bd
    //     const itemCollection = bd.collection('producto');// guardamos la referencia
    //     // tomando los datos
    //     itemCollection.get().then((value) => {
    //         // console.log(value.docs.keys)
    //         let temp = value.docs.map(element => {
    //             // return {...element.data(), id:element.id}
    //             return {"producto": {...element.data(), id:element.id}}
    //         })
                
    //         // value.docs.map(element => {console.log(element.data())})
    //         // value.docs.map(element => {console.log({...element.data(), id:element.id})})
    //         console.log(temp)
    //         setProducts(temp)
    //         console.log(products)
    //     })
    //     return () => {
    //         // window.location.reload(false)
    //         console.log("ItemListContainer unmon")
    //         // globalTest3()
    //         // globalTest4()
    //         // window.location.reload(false)
    //         globalTest4()
    //         globalTest()
    //     }
    // },[]);     



    // console.log(products)
    console.log(products)
    return(
        <>

            <div className="contaniner">
                <div className="d-flex justify-content-center">
                    <h1 className="">Bienvenidos al proyecto React</h1>
                </div>
                <ItemList products={products} key={products}/>
                {/* <button onClick={test}>yo</button> */}
                <Link to={`/ItemDetailContainer`}>test</Link>
            </div>
            <div className="d-flex justify-content-center">
                <h1>{load}</h1>
            </div>
            

        </>
    )

}

export default ItemListContainer;