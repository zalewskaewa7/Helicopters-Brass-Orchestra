import React from 'react'
import logo from "../../zdjęcia/logo/logoOK/logonew_HBO.png"
import "./home2.css"

function mainBar() {
  return (
    <div className="mainBar">
    <img src={logo} alt="logo Helicopters Brass Orchestra" className="logoImg"></img>
    </div>
  )
}

export default mainBar