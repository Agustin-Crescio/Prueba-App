import{useState} from "react"

 function ItemCount({stock , initial, onAdd}) {

     const [cant , setCount] = useState(initial);

     const suma = () => {
         setCount (cant +1);
        
     }
     const resta = () => {
        setCount (cant -1);
       
    }
    

  return(
      <div>
          <button disabled={cant <= 1} onClick={resta}> - </button>
          <span>{cant}</span>
          <button disabled={cant >=  stock }  onClick={suma}> + </button>
          <br />
          <button disabled={ stock <= 0 } onClick= {()=> onAdd()  }>Agregar al carrito</button>
      </div>
  )
}
export default ItemCount;