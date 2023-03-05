import React from 'react'
import { Link } from "react-router-dom";
import "./layout.css";


function menu() {
  return (
    <div className="menu">
        <ul className="menuUl">
            <li><Link to="/" title="Strona główna">Strona główna </Link></li>
            <li><Link to="/o nas" title="O nas">O nas</Link></li>
            <li><Link to="/kontakt" title="Kontakt">Kontakt</Link></li>
            <li><Link to="/galeria" title="Galeria">Galeria</Link></li>
            <li><Link to="/współpraca" title="Współpraca">Współpraca</Link></li>
        </ul>
    </div>
  )
}

export default menu