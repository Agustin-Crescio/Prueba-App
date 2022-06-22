
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx/ItemDetailContainer";
import  {BrowserRouter , Route , Routes} from"react-router-dom";

function App() {
  return (
    <div className="App mx-aut">
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={
               <ItemListContainer greeting="Bienvenidos a nuestro catálogo"/>
            } />
            <Route path="/category/:categoryId" element={
               <ItemListContainer greeting="Categoria de Items"/>
            } />
             <Route path="/detalle/:itemId" element={
               <ItemDetailContainer  greeting = "Detalle del producto"/>
            } />
           
           
           
          </Routes>
      </BrowserRouter >
      </div>
     

  );
}

export default App;
