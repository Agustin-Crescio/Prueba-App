
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx/ItemDetailContainer";

function App() {
  return (
    <div className="App mx-aut">
      
        <NavBar />
        <ItemListContainer saludo="Bienvenidos a nuestro catálogo"/>
        <ItemDetailContainer itemId= {4} greeting = "Detalle del producto"/>
      
      </div>
     

  );
}

export default App;
