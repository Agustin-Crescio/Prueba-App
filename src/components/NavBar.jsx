//Comenzar en Mayuscula: Pascal Case
//Exportarlo
//Importarlo en App.js

import CartWidget from "./CartWidget"
import  {Link ,  NavLink} from"react-router-dom";

export default function     NavBar () {
    return (
        <nav>
            <ul className="nav justify-content-center">
            <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Inicio</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/detalle">Detalle</NavLink>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
            </li>
        <CartWidget/>
        </ul>
            </nav>
      
    );
  }
  
;
  