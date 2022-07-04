import React , {useContext} from "react";
import {CartContext} from "../../Context/CartContext";

function CartView() {

    const {cart} = useContext (CartContext);

    if (cart.lenght === 0 ){
     return   <h1>Nada en el carrito </h1>
    }

  return (
    <div>{
        cart.map(item =>(
            <div key={item.id}>
            
            <h3 className='text-3x1 text-gray-900 mt-2 font-medium title-font'>
                    {item.name}
            </h3>
            
            <img src={item.img} alt={item.name} width="200" />
            
            <p>$ {item.description}</p>
            <hr />
            <br />
          
               
            </div>
        ))
         }
         <button>Finalizar Compra</button>
         </div>
  )
}

export default CartView