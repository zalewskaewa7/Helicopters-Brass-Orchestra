import React from 'react'
import logo from "../../zdjęcia/logo/logoOK/logonew_HBO.png"
import "./layout.css"

function logoBar() {
  return (
    <div className="logoBarComponent">
    <img src={logo} alt="logo Helicopters Brass Orchestra" className="logoImg"></img>
    <h1 className="title">HELICOPTERS BRASS ORCHESTRA</h1>
    </div>
  )
}

export default logoBar