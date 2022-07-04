
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx/ItemDetailContainer";
import Cart from "./components/Cart/Cart"
import  {BrowserRouter , Route , Routes} from"react-router-dom";
import { CartProvider } from "./Context/CartContext";
import CartView from "./components/CartView/CartView";

function App() {
  return (
    <CartProvider> 
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
             <Route path="/item/:itemId" element={
               <ItemDetailContainer  greeting = "Detalle del producto"/>
            } />
            <Route path="/Cart" element={
              <CartView />
            }/>
            
          </Routes>
      </BrowserRouter >
      </div>
     </CartProvider>
  );
}

export default App;
