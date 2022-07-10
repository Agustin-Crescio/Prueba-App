import React , {useState, useEffect} from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList/ItemList";
import {useParams} from "react-router-dom";
import {traerProductos, traerProductosDeCategoria} from "../services/firestore"






const ItemListContainer = ({ greeting}) => {
    
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams ();
   

    useEffect(()=> {
        if(categoryId){
            traerProductosDeCategoria(categoryId)
            .then((res)=>{
                setProducts(res);
            })
            .catch((error)=>{
                console.log(error);
            }) 
        } else { 
            traerProductos()
            .then((res)=>{
                setProducts(res);
            })
            .catch((error)=>{
                console.log(error);
            });
        }
    }, [categoryId]);

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`)
    }


    return (
        <div className="container mx-auto mt-5">
          <h1>  {greeting} </h1> 
          <ItemCount stock={15} initial={1} onAdd={onAdd}/>
          <ItemList items={products}/>
       
        </div>
    );
}
export default ItemListContainer;