import React , {useState, useEffect} from "react";
import {productos} from "../mock/products.jsx";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import  {useParams} from "react-router-dom";






const ItemDetailContainer = ({ greeting}) => {
    
    const [product, setProduct] = useState({});
    const {itemId} = useParams();

    useEffect(() => {
    
        const traerProducto = new Promise((res, rej) => {
            setTimeout(() => {
           
                const itemsFound= productos.find (detalle => {
                   return detalle.id=== parseInt( itemId)
                })
            res(itemsFound)
            }, 2000);
        });
       
        traerProducto
        .then((res) => {
         setProduct(res);
        })
        .catch((error) => {
                console.log(error);
            });
    }, [itemId]);



    return(
        <div className="container mx-auto mt-5">
        <div>  {greeting} </div> 
        <ItemDetail  item={product}/>
       
      </div>
 
    );
}
export default ItemDetailContainer;