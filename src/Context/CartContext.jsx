import { createContext} from "react"
import { useState } from "react";


export const CartContext = createContext() ; 

export const CartProvider = ({children})=>{


    const [cart , setCart]= useState([])

    const prueba = ()=> {
        console.log("gola");
    }


    const addToCart = (item , cantidad)=>{
        if(isInCart(item.id) ){
                //sumo cant
        }else{
            setCart([...cart , {...item , cantidad}]);
        }     
};


const isInCart = (id)=>{
    return cart.some((prod)=>{
        return prod.id === id;
    } )
}



const clearCart = ()=> {
    setCart([]);
}

    return(    
        <CartContext.Provider value={(cart , prueba)}>
            {children}
        </CartContext.Provider>
     ) ;
}