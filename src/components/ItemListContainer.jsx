import React , {useState, useEffect} from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList/ItemList";
import {productos} from "./mock/products.jsx";
import {useParams} from "react-router-dom";






const ItemListContainer = ({ greeting}) => {
    
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams ()

    useEffect(() => {
    
        const traerProductos = new Promise((res, rej) => {
            setTimeout(() => {
                if (categoryId=== undefined)
                res(productos);
                else{
                  const  itemsFound= productos.find (detalle => {
                        return detalle.id=== categoryId;
                     })
                res(itemsFound)
                }
            }, 2000);
           
        });
       
        traerProductos
        .then((res) => {
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
        <div className="container mx-auto mt-5">
          <h1>  {greeting} </h1> 
          <ItemCount stock={15} initial={1} onAdd={onAdd}/>
          <ItemList items={products}/>
          <a href="/detalle"></a>
        </div>
    );
}
export default ItemListContainer;