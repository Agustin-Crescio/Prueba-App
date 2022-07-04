//Comenzar en Mayuscula: Pascal Case
//Exportarlo
//Importarlo en App.js

import CartWidget from "./CartWidget"
import  { NavLink} from"react-router-dom";

export default function     NavBar () {
    return (
        <nav>
            <ul className="nav justify-content-center">
            <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Logo</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/category/gafas1">Categoria 1</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/category/gafas2">Categoria 2</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/category/gafas3">Categoria 3</NavLink>
            </li>
         
        <CartWidget/>
        </ul>
            </nav>
      
    );
  }
  
;
  