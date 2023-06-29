import React from 'react'
import "./css/footer.css"
import {Link} from "react-router-dom"
import {FaFacebookSquare} from 'react-icons/fa';
import {FaInstagramSquare} from 'react-icons/fa';


function footer() {
  return (
    <div className="footerComponent">
        <p>Copyright &copy; {(new Date().getFullYear())} Helicopters Brass Orchestra</p>
        <div  className="divSocialLinksIcons">
        <Link  className="socialLink" to="/https://www.facebook.com/profile.php?id=100090464046553">< FaFacebookSquare /></Link> 
        <Link className="socialLink" to="https://instagram.com/helicopters_brass_orchestra?igshid=YmMyMTA2M2Y=">< FaInstagramSquare /></Link> 
         
        </div>
    </div>
  )
}

export default footer