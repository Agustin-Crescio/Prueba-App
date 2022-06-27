import{useState} from "react"

 function ItemCount({stock , initial, onAdd }) {

     const [cant , setCount] = useState(initial);

     const suma = () => {
         setCount (cant +1);
        
     }
     const resta = () => {
        setCount (cant -1);
       
    }
    
 
  return(
      <div className="container mx-auto mt-5 font-medium title-font">
          <button disabled={cant <= 1} onClick={resta}> - </button>
          <span>{cant}</span>
          <button disabled={cant >=  stock }  onClick={suma}> + </button>
          <br />
          <button onClick={ onAdd }>Terminar Compra</button>
      </div>
  )
}
export default ItemCount;