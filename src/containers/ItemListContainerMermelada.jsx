import * as React from 'react';
import {Link} from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import ItemListMermelada from '../components/ItemList/ItemListMermelada';




const ItemListContainerMermelada = () =>{
    const {cart,setCart,prueba, setPrueba, globalTest,globalTest2,cart2,setCart2,firstAsync,globalTest3,globalTest4,products, setProducts} = React.useContext(GlobalContext);

    // const [products, setProducts] = React.useState([]);
    const [load, setLoad] = React.useState(true);
    const [contenido, setContenido] = React.useState(false);
 
    React.useEffect(() => {
        if(products.length===0){
            setLoad(true)
        }else{
            setTimeout(() => {  

                setLoad(false) 
                setContenido(false)
                }, 300);
        }
        console.log("itemListContainerMermeladas")
        setTimeout(() => {  

            setLoad(false) 
            setContenido(false)
            }, 1500);
        
     
        return () => {
            console.log("itemListContainerMermeladas_Out")
        }
    },[]);     


    // console.log(products)
    // console.log(products)
    return(
        <>
            {load ? (
                <div className="d-flex flex-column" style={{minHeight:"600px"}}>
                    <div className="d-flex justify-content-center" >
                        <div className="col-md-8 d-flex justify-content-center  flex-column align-items-center noPad">
                            <div className="spinner-border" role="status" style={{marginTop:"170px"}}>
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div>
                                <p>
                                    Cargando ...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ):(
                // <div>
                //     <br/>
                // <div className="d-flex justify-content-center" style={{maxHeight:"1000px"}}>
                //     <div className="col-md-8 d-flex justify-content-around position-relative" style={{border:"1px solid red"}}>
                //         <ItemList products={products} key={products}/>
                //     </div>
                // </div>
                // </div>
              
                // <div className="container">
                //     <div className="container">
                //         <div>
     
                        /* </div>

                    </div>

                </div> */
                // <Container fluid>
                //     <Row>
                //         <ItemList products={products} key={products}/>
                //     </Row>
                // </Container>
                <div className="d-flex flex-column">
                    <div className="d-flex justify-content-center" >
                        <div className="col-md-8 d-flex justify-content-left align-items-center noPad">
                            <p >
                                <Link to={`/`}>
                                <button className="btn">Home</button>
                                </Link>
                            </p>
                            <p><i className="fa fa-angle-right"></i></p>    
                            <p style={{paddingLeft:"10px"}}>Mermeladas</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center" >
                         <ItemListMermelada products={products} key={products}/>
                    </div>
 
                </div>
                
            )}


        </>
    )

}

export default ItemListContainerMermelada;