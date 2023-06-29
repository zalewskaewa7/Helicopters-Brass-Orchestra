import React from 'react'
import "./css/contactHomePage.css";
import { AiOutlineMail } from 'react-icons/ai';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaInstagramSquare} from 'react-icons/fa';
import {Link} from "react-router-dom"




function contactHomePage() {
  return (
    <div className="contact">
              <div className='mailDiv'>
                            <h2>Napisz do nas:</h2>
                          <p>< AiOutlineMail /> helicoptersbrass@wp.pl</p> 

              </div>
              <div className='sociallDiv'>
                <h2>Znajdź nas na:</h2>
              <div className="socialDivLink"><Link  className="socialLink" to="/https://www.facebook.com/profile.php?id=100090464046553">< FaFacebookSquare /></Link> 
                          <Link className="socialLink" to="https://instagram.com/helicopters_brass_orchestra?igshid=YmMyMTA2M2Y=">< FaInstagramSquare /></Link> 
            </div>
                </div>
              
                <div className="map" >
                  <h2>Jesteśmy w Miejskim Ośrodku Kultury w Świdniku</h2>
                 

<iframe className="mapImage" title="HBO Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.932460606683!2d22.691210075744294!3d51.22031983163597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47225443b1517c2f%3A0x665e7c8da679fb2f!2sMiejski%20O%C5%9Brodek%20Kultury%20w%20%C5%9Awidniku!5e0!3m2!1spl!2spl!4v1683402698368!5m2!1spl!2spl"  loading="lazy"></iframe>
                </div>
        </div>
        
  )
}

export default contactHomePage