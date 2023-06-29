import React,{useState} from 'react';
import MainTitle from "./mainTitle"
import {TfiMenu} from "react-icons/tfi";
import MobileMenu from '../layout/mobileMenu';




import logo from "../../zdjęcia/logonew_HBO.png";
import "./css/home.css";

import Menu from "../layout/menu";
function LogoBarHome(){   
  const[showMobileMenu, setShowMobileMenu]=useState(false)

  function showMenu(){
    setShowMobileMenu(!showMobileMenu)
  }
        return (
    <div className="logoBarHomeComponent">
      <div className='logoBarComponent_Menu'>
<img src={logo} alt="logo Helicopters Brass Orchestra" className="logoImgHome"></img>
    <Menu />
    <TfiMenu className="hamburger" onClick={()=>showMenu()}/>
    {
      showMobileMenu ? <MobileMenu /> : ""
    }

    </div>
     
   <MainTitle />
   

      
    
    </div>
  )
      }
  


export default LogoBarHome