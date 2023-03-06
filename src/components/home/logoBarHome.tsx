import React from 'react';
import MainTitle from "./mainTitle"



import logo from "../../zdjęcia/logo/logoOK/logonew_HBO.png";
import "./home.css";

import Menu from "../layout/menu";
function LogoBarHome(){    
        return (
    <div className="logoBarHomeComponent">
      <div className='logoBarComponent_Menu'>
<img src={logo} alt="logo Helicopters Brass Orchestra" className="logoImg"></img>
    <Menu />
    </div>
     
   <MainTitle />
   

      
    
    </div>
  )
      }
  


export default LogoBarHome