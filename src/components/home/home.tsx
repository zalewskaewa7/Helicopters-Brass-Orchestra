import React from 'react'
import "./home.css"
import homePhoto from "../../zdjęcia/homePhoto.jpg"

function home() {
  return (
    <div>
        
        <img className="homePhoto" src={homePhoto}></img>
    </div>
  )
}

export default home