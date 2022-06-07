

import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />

        <h1 className="text-center ">
          Bienvenido a mi App
        </h1>
        <ItemListContainer saludo="Bienvenidos a nuestro catálogo"/>
      </header>
      </div>

  );
}

export default App;
