import React from 'react'
import "./home.css"
import LogoBarHome from './logoBarHome'
import homePhoto from "../../zdjęcia/homePhoto.jpg"

function Home() {
  return (
    <div>
        <div className="logoBar"><LogoBarHome /></div>
        <img className="homePhoto" src={homePhoto} alt="playing orchestra"></img>
    </div>
  )
}

export default Home