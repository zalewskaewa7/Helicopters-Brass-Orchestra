import React from 'react'
import "./home2.css"
import homePhoto from "../../zdjęcia/homePhoto.jpg"
import LogoBar from "./logoBar"


function Home2() {
  return (
    <div>
        <LogoBar />
        <img className="homePhoto" src={homePhoto} alt="playing orchestra"></img>
    </div>
  )
}

export default Home2