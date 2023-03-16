import React from 'react';
import LogoBar from '../layout/logoBar';
import "./contact.css";
import ConductorlImg from "../../zdjęcia/prezentacjaNa70lecie/Rafał Maruszak - Puzon.jpg";
import presidentImg from "../../zdjęcia/prezentacjaNa70lecie/Karol Dziubak - Klarnet.jpg";


function Contact() {
  return (
    <div>
        <LogoBar />
        <div className='componentDiv'>
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
        <div className="mailMap">
              <div className='mail'>
                            <h2>Napisz do nas:</h2>
                            <p>helicoptersbrass@wp.pl</p>
              </div>
              
                <div className="map" >
                  <h2>Jesteśmy w Miejskim Ośrodku Kultury w Świdniku</h2>
                  <iframe title="HBO Map" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1529.4177052361456!2d22.692756735338207!3d51.22019494173799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smiejski%20o%C5%9Brodek%20kultury%20%C5%9Bwidnik!5e0!3m2!1spl!2spl!4v1678744396588!5m2!1spl!2spl" 
                  width="100%" height="auto%" 
              ></iframe>
                </div>
        </div>
        

</div>
            
          </div>
            
    
  )
}

export default Contact