import React from 'react'
import "./css/cookies.css"

function cookies() {
  function closeCookie() {
    let cookie = document.getElementById("cookie-warn");
    cookie.style.display = "none";
}
  return (
    <div className='cookiesComponent' id="cookie-warn">
        <p>
            UWAGA Strona wykorzystuje pliki cookies. Informacje uzyskane za pomocą cookies wykorzystywane są głównie w celach statystycznych. Pozostając na stronie godzisz się na ich zapisywanie w Twojej przeglądarce.
        </p>
        <button className="cookiesComponent_button" onClick={closeCookie}>OK, lubię ciasteczka</button>
    </div>

  )
}

export default cookies