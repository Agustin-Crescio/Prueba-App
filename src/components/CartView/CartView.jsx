import React , {useContext} from "react";

import {CartContext} from "../../Context/CartContext";
import{createBuyOrder} from "../../services/firestore"
import CartForm from "../CartView/CartForm"

function CartView() {

    const {cart , removeItem ,clearCart , totalPriceCart , handleBuyOrder} = useContext (CartContext);

  



  return (
    <div>{
        cart.map(item =>(
            <div key={item.id}>
            
            <h3 className='text-3x1 text-gray-900 mt-2 font-medium title-font'>
                    {item.name}
            </h3>
            
            <img src={item.img} alt={item.name} width="200" />
            
            <p>$ {item.price}</p>
            <p>Cantidad de unidades : {item.qnty} </p>
            <button onClick={ ()=>  removeItem(item.id)}></button>
            <p>SubTotal : ${item.price * item.qnty}</p>
            <div>
              <p>Total a pagar : {totalPriceCart().tofixed(2)} </p>
            </div>
            <hr />
            <br />
          <CartForm cart={cart} totalPriceCart={totalPriceCart}  clearCart ={clearCart} createBuyOrder = {createBuyOrder}></CartForm>
               
            </div>
        ))
         }
         <button onClick={handleBuyOrder}>Finalizar Compra</button>
         <button onClick={clearCart}>Vaciar Carrito</button>
         </div>
  )
}

export default CartView