import React from 'react'
import LogoBar from '../layout/logoBar';
import "../layout/css/layout.css"
import "./collabortion.css"
import {Link} from "react-router-dom"
import photoOrchestra from "../../zdjęcia/Galeria/7.jpg"
import noteIMG from "../../zdjęcia/note_1.png"
import noteIMG2 from"../../zdjęcia/note2.svg"




function Collaboration() {
  return (
    <div>
     
        <LogoBar />
        <div className='componentDivDark'>
            <h1 className="collaborationH1Titile">Zagramy dla Ciebie</h1>
            <div className="divPhotoOrchestra"><img alt="playing concert" src={photoOrchestra} className="imgPhotoOrchestra"></img>
</div>
            <ul className="collaborationList">

              <li>
                W swojej ofercie posiadamy szeroki zakres repertuaru muzyki filmowej, popularnej, repertuaru oficjalnego, świeckiego i religijnego.
              </li>
              <img alt="music note"src={noteIMG2} className="noteIMG"></img>
              <li>
              Gramy koncerty instrumentalno-wokalne z muzyką filmową, rozrywkową, popularną, klasyczną. Koncerty patriotyczne oraz z muzyką religijną. 
              </li>
              <img alt="music note"src={noteIMG} className="noteIMG"></img>

              <li>
                Zajmujemy się oprawą muzyczną różnych uroczytości: państwowych (zgodnie z ceremoniałem wojskowym/strażackim), religijnych, przemarsze, korowody, dożynki, imprezy w zakładach pracy itp.
              </li>
              <img alt="music note"src={noteIMG2} className="noteIMG"></img>

              <li>
                Oferujemy także oprawy mszy św, koncertów o tematyce religijnej i nastrojowej.
              </li>
              <img alt="music note"src={noteIMG} className="noteIMG"></img>

              <li>
                Z nami Twój ślub będzie niezapomniany. Zagramy uroczyste wejście i wyjście pary młodej, oprawę mszy św i podczas składania życzeń. 
              </li>

              <Link to="/kontakt" className="linkToKontakt">
                Masz pytania? Chętnie na nie odpowiemy! 
              </Link>




    

            </ul>
        </div>
    
    </div>
  )
}

export default Collaboration