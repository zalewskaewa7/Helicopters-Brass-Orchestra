import React , {useState} from 'react';
import logo from "../../zdjęcia/logo/logoOK/logonew_HBO.png";
import "./layout.css";

import Menu from "./menu";
function LogoBar(){    
  const[darkMode, setDarkMode] =useState<boolean>(true);
        return (
    <div className={darkMode ? "logoBarComponentDark" :"logoBarComponent"}>
      <div className='logoBarComponent_Menu'>
<img src={logo} alt="logo Helicopters Brass Orchestra" className="logoImg"></img>
    <Menu />
    </div>
     
    
    </div>
  )
      }
  


export default LogoBar