import React from "react";
import ItemCount from "./ItemCount";

function ItemListContainer (props) {


    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`)
    }


    return(
        <div>
          <h1>  {props.saludo} </h1> 
          <ItemCount stock={15} initial={1} onAdd={onAdd}/>
        </div>
    );
}
export default ItemListContainer;