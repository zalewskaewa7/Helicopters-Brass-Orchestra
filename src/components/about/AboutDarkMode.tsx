import React, {useState} from 'react'
import "../layout/layout.css"
import "./about.css"
import LogoBar from "../layout/logoBar"
import ImgAchievements from "../../zdjęcia/z Internetu/mokswidnik.jpg"
import ImgHistory from "../../zdjęcia/z Internetu/archiwaOrkiestry(z historiaSwidnika).jpg"
import ImgAboutOrchestra from "../../zdjęcia/z Internetu/radioLublin.jpg"

function AboutDarkMode() {
    const[darkMode, setDarkMode] =useState<boolean>(true);
  return (
    <div>
        <LogoBar/>
        <div className='componentDiv'>
          <div className="aboutOrchestraDiv">

          <h1 className="aboutOrchestraTitle">Historia Orkiestry</h1>
          <img className="orchestraPhoto" src={ImgHistory} alt="orchestra"></img>

  <p>Jej początki sięgają 1952 roku, kiedy to przy Wytwórni Sprzętu Komunikacyjnego
w Świdniku utworzono Zakładową Orkiestrę Dętą (pierwsza nazwa: Orkiestra Dęta WSK Świdnik). Orkiestra jest dziś najstarszym zespołem artystycznym miasta Świdnika, zespołem, który towarzyszył powstaniu i rozwojowi miasta oraz wszystkim najważniejszym wydarzeniom życia kulturalnego i społecznego.
</p>
  
<p>Etapem przełomowym w historii orkiestry był rok 1971. W tym roku dyrygentem orkiestry został Henryk Maruszak. Pod jego kierownictwem orkiestra dojrzała i okrzepła, odchodząc z typowo marszowej stylistyki ku koncertowej (a la big band) o czym świadczy najlepiej aktualny repertuar zespołu.
</p>

<p>Od 1992 roku  orkiestra występuje pod nazwą aktualną Helicopters Brass Orchestra
(HBO) i organizacyjnie prowadzona jest przez Towarzystwo Przyjaciół Świdnickiej Orkiestry Dętej. Wspomniane Towarzystwo, powstało 3 czerwca 1992 roku, dla utrzymania przy życiu działalności HBO po zaprzestaniu finansowania jej przez WSK – PZL Świdnik S.A.
Przy ścisłej, wieloletniej współpracy z Miejskim Ośrodkiem Kultury w Świdniku stara się zabiegać o środki finansowe na działalność, dalszy rozwój i pielęgnowanie ponad 60 letniej tradycji orkiestry. Aktualnie Prezesem Towarzystwa jest Pan Karol Dziubak.</p>      
    </div>
    <div className="aboutOrchestraDiv">
      <h2 className="aboutOrchestraTitle">O zespole</h2>
      <img className="orchestraPhoto" src={ImgAboutOrchestra} alt="orchestra"></img>


      <p>
      Od prawie 70 lat towarzyszy mieszkańcom Świdnika w czasie najważniejszych świąt i uroczystości. Obok śmigłowca jest symbolem miasta, znanym w kraju i za granicą. Starsza niż miasto Świdnik, ale nadal chętnie słuchana i wysoko oceniana przez publiczność i krytyków muzycznych. Wielokrotnie nagradzana na polskich oraz międzynarodowych festiwalach i konkursach.

Od samego początku istnienia orkiestra miała wielu dyrygentów. W 1971 roku  funkcję dyrygenta obejmuje Pan Henryk Maruszak. Przez 45 lat kierowania orkiestrą, Henryk Maruszak stworzył z niej zespół grający różnorodne utwory, od kompozycji epoki renesansu, przez muzykę klasyczną, standardy jazzowe, muzykę filmową, aż po najnowsze przeboje taneczne.
</p>
 
<p>
Od 2015 roku dyrygentem HBO jest Rafał Maruszak. Absolwent Instytutu Wychowania Artystycznego na UMCS w Lublinie i pierwszy puzonista Orkiestry Wojskowej w Lublinie.

Helicopters Brass Orchestra składa się obecnie z około 40 muzyków. Obok grających amatorów, są muzycy profesjonalni, na co dzień związani z filharmonią, teatrem muzycznym i szkołami muzycznymi. Cenią sobie możliwość pracy w zespole oraz możliwość grania innej muzyki, niż ta wykonywana zawodowo. Świdnicka orkiestra jest chyba jedyna w regionie, gdzie przy jednym pulpicie grają profesor i uczeń, bo Henryk Maruszak jak i Rafał Maruszak ogromną uwagę przywiązują do kształcenia młodzieży, stworzenia młodym ludziom szansy na zaistnienie w orkiestrze. 

W 2012 roku orkiestra obchodziła jubileusz 60-lecia istnienia. Z tej okazji, w studiu Polskiego Radia w Lublinie, nagrana została płyta kompaktowa. Jest jedną z dwóch płyt na których można posłuchać przebojów światowej muzyki rozrywkowej.

Rok 2022 kończy już 7 dekadę działania orkiestry która, wciąż aktywnie uczestniczy w życiu kulturalnym miasta wspierana przez Miejski Ośrodek Kultury i władze miasta Świdnik.
      </p>
    </div>

<div className="aboutOrchestraDiv">
  <h2 className="aboutOrchestraTitle">Osiągnięcia</h2>
  <img className="orchestraPhoto" src={ImgAchievements} alt="orchestra"></img>
  <p>O randze zespołu świadczy powiększające się grono wielbicieli, coroczne zaproszenia od organizatorów festiwali w całej Europie i naturalnie liczne laury, zdobywane na znaczących imprezach muzycznych w kraju i za granicą. Przyznany orkiestrze Dyplom Honorowy Ministra Kultury i Sztuki jest dowodem uznania za wielokrotne zwycięstwa w konkursach i festiwalach orkiestr dętych, m.in. w Poznaniu, Biłgoraju, Kolbuszowej, Rastede i Husum (Niemcy), Wilnie (Litwa), Debreczynie, Szombathely i Koeszeg (Węgry).
</p>
  <p>Orkiestra koncertowała również w Czechach i na Białorusi, a w roku 2000 uczestniczyła w EXPO 2000 w Hannowerze. Brała udział w programach telewizyjnych.
</p>
  <p>Przebogaty repertuar jakim HBO dysponuje dzisiaj, pozwala jej zaspokoić rozmaite gusta muzyczne i czyni z niej zespół „na każdą okazję”. Stąd też orkiestra koncertowała „ w salonach muzycznych” (filharmonia, teatr muzyczny),  jak też na piknikach i festynach. Tradycyjnie już zapewnia oprawę muzyczną na licznych uroczystościach kościelnych.
</p>



  
</div>

</div>
        </div>
        
  )
}

export default AboutDarkMode