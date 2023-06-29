import React from 'react'
import "./css/home.css"
import LogoBarHome from './logoBarHome'
import CollaborationButton from './collaborationButton'
import About from "./aboutHomePage";
import Contact from "./contactHomePage";
import homePhoto from "../../zdjęcia/homePhoto.jpg"

function Home() {
  return (
    <div>
        <LogoBarHome />
        <img className="homePhoto" src={homePhoto} alt="playing orchestra"></img>
        <CollaborationButton/>
        <About />
        <Contact />
    </div>
  )
}

export default Home