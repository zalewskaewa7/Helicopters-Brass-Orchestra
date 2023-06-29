import React , {useState} from 'react';
import {Link} from "react-router-dom";
import logo from "../../zdjęcia/logo/logoOK/logonew_HBO.png";
import "./css/layout.css";
import {TfiMenu} from "react-icons/tfi";
import MobileMenu from '../layout/mobileMenu';


import Menu from "./menu";
function LogoBar(){    

  const[showMobileMenu, setShowMobileMenu]=useState(false)

  function showMenu(){
    setShowMobileMenu(!showMobileMenu)
  }
        return (
    <div className="componentDivDark">
      <div className='logoBarComponent_Menu'>
        <Link to="/" className='logoLinkToHome'>
<img src={logo} alt="logo Helicopters Brass Orchestra" className="logoImg">

</img>
</Link>
    <Menu />
    <TfiMenu className="hamburger" onClick={()=>showMenu()}/>
    {
      showMobileMenu ? <MobileMenu /> : ""
    }

    </div>
     
    
    </div>
  )
      }
  


export default LogoBar