import cart from "../assets/imagenes/carrito.png";
import { useContext} from "react";

import CartContext from "../Context/CartContext";

export default function CartWidget (){
    const {qntyInCart} = useContext(CartContext)


    return (
     <div>
        <img width="40" height="40" src={cart} alt="Carrito de compras" />
        <span> {qntyInCart}</span>

    </div>
     ) 
}


