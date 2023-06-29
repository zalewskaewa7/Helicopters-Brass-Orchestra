import React from 'react';
import LogoBar from '../layout/logoBar';
import "./contact.css";
import ContactHomePage from "../home/contactHomePage"
import ConductorlImg from "../../zdjęcia/RafalMaruszak.jpg";
import presidentImg from "../../zdjęcia/Karol.jpg";


function Contact() {

  return (
    <div>
        <LogoBar />
        <div className='componentDivDark'>
          <div className="Conductors">
            <div className="contactInformation">
            <img className="conductorPhoto" src={ConductorlImg} alt="an orchestra conductor"></img>

              <h2>Rafał Maruszak</h2>
              <p>Dyrygent Helicopters Brass Orchestra</p>
              <p>tel. 508 240 297</p>
            </div>
            <div className="contactInformation">
            <img className="conductorPhoto" src={presidentImg} alt="president of the orchestra"></img>

              <h2>Karol Dziubak </h2>
              <p>Prezes/dyrygent Helicopter Brass Orchestra</p>
              <p>tel. 505 090 538</p>
            </div>
            
        </div>
        <ContactHomePage />
        
        

</div>
            
          </div>
            
    
  )
}

export default Contact