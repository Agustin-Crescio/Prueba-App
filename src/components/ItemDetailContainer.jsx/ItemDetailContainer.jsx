import React , {useState, useEffect} from "react";
import {productos} from "../mock/products.jsx";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";






const ItemDetailContainer = ({ props, itemId}) => {
    
    const [product, setProduct] = useState({});

    useEffect(() => {
    
        const traerProducto = new Promise((res, rej) => {
            setTimeout(() => {
                res(productos [itemId]);
            }, 2000);
        });
       
        traerProducto
        .then((res) => {
         setProduct(res);
        })
        .catch((error) => {
                console.log(error);
            });
    }, []);



    return(
        <div className="container mx-auto mt-5">
        <div>  {props} </div> 
        <ItemDetail  item={product}/>
       
      </div>
 
    );
}
export default ItemDetailContainer;