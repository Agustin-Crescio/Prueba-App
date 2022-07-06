import React , {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import  {useParams} from "react-router-dom";
import { traerUnProducto } from "../../services/firestore.js";








const ItemDetailContainer = ({ greeting}) => {
    
    const [product, setProduct] = useState({});

    const {itemId} = useParams();


        useEffect(() => {
        traerUnProducto(itemId)
        .then((res) => {
            console.log ("traer producto",  res)
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



















