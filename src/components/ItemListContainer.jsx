import React , {useState, useEffect} from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList/ItemList";
import {productos} from "./mock/products.jsx";






function ItemListContainer (props) {
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
    
        const traerProductos = new Promise((res, rej) => {
            setTimeout(() => {
                res(productos);
            }, 2000);
        });
       
        traerProductos.then((res) => {
         setProducts(res);
        })
        .catch((error) => {
                console.log(error);
            });
    }, []);


    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`)
    }


    return(
        <div>
          <h1>  {props.saludo} </h1> 
          <ItemCount stock={15} initial={1} onAdd={onAdd}/>
          <ItemList items={products}/>
        </div>
    );
}
export default ItemListContainer;