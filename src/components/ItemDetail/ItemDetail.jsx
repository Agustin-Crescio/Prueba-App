import React from 'react';
import ItemCount from '../ItemCount';

export default function ItemDetail({item}) {
  const  [isAddedToCart , setAddedToCart] = React.useState(false);


  function handleOnAdd(){
    console.log("items agregados=", cant);
    setAddedToCart(true);

  }
  return (
    <div >
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <p>${item.price}</p>
      {
        (true)
        ? <ItemCount onAdd={handleOnAdd} stock={15} initial={1}></ItemCount>
        : <a href="/cart">Ver carrito</a>
      }
      
    </div>
  );
}
