
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer saludo="Bienvenidos a nuestro catálogo"/>
      </header>
      </div>

  );
}

export default App;
