import React, { useState } from 'react';
import ItemCount from '../ItemCount';
import  {Link } from"react-router-dom";
import {useNavigate} from"react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

export default function ItemDetail({item}) {
  const {addToCart} = useContext (CartContext)
  let navigate = useNavigate()
  const  [isAddedToCart , setAddedToCart] = React.useState(false);
  const [cant , setCant] = useState(0)


  const OnAdd = (cantidad)=> {
    setCant(cantidad)
    navigate ("/Cart")
    addToCart(item,cantidad)
  };

  return (
    <div >
      <div>{item.img}</div>
        <h1>{item.name}</h1>
        <p>${item.price}</p>
        <p>{item.description}</p>
       
        {cant === 0 ?( <ItemCount onAdd={OnAdd} stock={item.stock} initial={1}></ItemCount>
          ) : (
             <Link to="/Cart">Ir al carrito</Link>
          ) };
    
      
    </div>
  );
}
