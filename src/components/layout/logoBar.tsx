import React from 'react';
import logo from "../../zdjęcia/logo/logoOK/logonew_HBO.png";
import "./layout.css";

import Menu from "./menu";
function LogoBar(){    
        return (
    <div className="logoBarComponent">
      <div className='logoBarComponent_Menu'>
<img src={logo} alt="logo Helicopters Brass Orchestra" className="logoImg"></img>
    <Menu />
    </div>
     
    
    </div>
  )
      }
  


export default LogoBar