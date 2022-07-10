import { createContext} from "react"
import { useState } from "react";


export const CartContext = createContext() ; 

export function CartProvider  (props) {


    const [cart , setCart]= useState([]);


function addToCart (item , cant){
    if(isInCartContext(item.id)){
        const idToAdd = item.id;
        let itemToAdd = cart.find(cadaItem => cadaItem.id === idToAdd) 
        itemToAdd.qnty += cant; 
       let newCart =  cart.filter ( cadaItem => cadaItem.id !== item.id )
        setCart([...newCart,{...itemToAdd}]);


    }
    else{
        setCart([...cart,{...item, qnty:cant}]);
    }
        
 }


function removeItem(id){
    let newCart = cart.filter ( item => item.id !== id )
    setCart (newCart);
}



function isInCartContext (id){
    return cart.some ((item)=> item.id === id);

}
 
function qntyInCart (){
    let total = 0;

    cart.forEach((item)=> total = total + item.qnty);
    return total ;
}

function clearCart(){
    setCart([])
}

function totalPriceCart(){
    let total = 0;
    cart.forEach((item)=> total = total + (item.qnty * item.price ));
    return total ;
}












    return(    
        <CartContext.Provider value={(cart , qntyInCart , totalPriceCart ,isInCartContext, addToCart ,clearCart , removeItem)}>
            {props.children}
        </CartContext.Provider>
     ) ;
}
export default CartContext