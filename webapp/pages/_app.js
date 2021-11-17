import Nav from "./_nav"
import Home from './_home'
import '../styles/App.scss'
import React, {useState} from "react"

import background from "../styles/images/background.png"
import { Parallax } from "react-parallax"

const MyApp = () => {

  const [toogleNav, setToogleNav] = useState(false)
  const [arrowToogler, setArrowToogler] = useState(false)

  let props = {
    toogleNav: toogleNav,
    arrowToogler:arrowToogler,
    setArrowToogler:setArrowToogler,
    setToogleNav: setToogleNav,
  }


  return(
    <div className="App">
      <Nav {...props} />

      <Parallax id="home" bgImage={background.src}strength={200} className="section">
        <Home {...props} />
      </Parallax>

      <div style={{paddingTop:"10vh"}} id="game" className="section">
      Game
      </div>

      <div style={{paddingTop:"10vh"}} id="news" className="section">
      News
      </div>
      <div style={{paddingTop:"10vh"}} id="studio" className="section">
      Studio
      </div>

      <div style={{paddingTop:"10vh"}} id="contact" className="section">
      Contact
      </div>

    </div>
  )
}

export default MyApp
