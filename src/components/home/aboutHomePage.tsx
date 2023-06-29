import React from 'react'
import "./css/aboutHomePage.css"
import HenrykMaruszak from "../../zdjęcia/19.jpeg";
import RafałMaruszak from "../../zdjęcia/RafalSolo.jpg"

function aboutHomePage() {
  return (
    <div className="aboutHomePage">
  
      <div className="PhotosDiv">
        
<img className="imgOfficer" src={HenrykMaruszak} alt="Henryk Maruszak dyrygent orkiestry"></img>
<p className="imgOfficer_p">Dyrygent Henryk Maruszak </p>

<img className="imgOfficer" src={RafałMaruszak} alt="Rafał Maruszak dyrygent orkiestry"></img>
        <p className="imgOfficer_p">Dyrygent Rafał Maruszak </p>

      </div>
      <div className="textDiv">
        <h2>Kim jesteśmy?</h2>
        <p>Orkiestra jest najstarszym zespołem artystycznym miasta Świdnika. Helicopters Brass Orchestra składa się obecnie z około 40 muzyków. Obok grających amatorów, są muzycy profesjonalni, na co dzień związani z filharmonią, teatrem muzycznym i szkołami muzycznymi. Cenią sobie możliwość pracy w zespole oraz możliwość grania innej muzyki, niż ta wykonywana zawodowo. Świdnicka orkiestra jest chyba jedyna w regionie, gdzie przy jednym pulpicie grają profesor i uczeń, bo Henryk Maruszak jak i Rafał Maruszak ogromną uwagę przywiązują do kształcenia młodzieży, stworzenia młodym ludziom szansy na zaistnienie w orkiestrze.</p>
      <p>Od 70 lat towarzyszy mieszkańcom Świdnika w czasie najważniejszych świąt i uroczystości. Obok śmigłowca jest symbolem miasta, znanym w kraju i za granicą. Starsza niż miasto Świdnik, ale nadal chętnie słuchana i wysoko oceniana przez publiczność i krytyków muzycznych. Wielokrotnie nagradzana na polskich oraz międzynarodowych festiwalach i konkursach. Od samego początku istnienia orkiestra miała wielu dyrygentów. W 1971 roku funkcję dyrygenta obejmuje Pan Henryk Maruszak. Przez 45 lat kierowania orkiestrą, Henryk Maruszak stworzył z niej zespół grający różnorodne utwory, od kompozycji epoki renesansu, przez muzykę klasyczną, standardy jazzowe, muzykę filmową, aż po najnowsze przeboje taneczne.</p>
      <p>Od 2015 roku dyrygentem HBO jest Rafał Maruszak. Absolwent Instytutu Wychowania Artystycznego na UMCS w Lublinie i pierwszy puzonista Orkiestry Wojskowej w Lublinie.  </p>
     </div>
      </div>
  )
}

export default aboutHomePage