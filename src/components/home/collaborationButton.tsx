import React from 'react'
import "./css/home.css"
import {Link} from "react-router-dom"

function collaborationButton() {
  return (
    <div>
        <Link  to="/współpraca" className='collaborationButton'>Zagramy dla Ciebie</Link>
    </div>
  )
}

export default collaborationButton