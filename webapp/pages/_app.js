import Nav from "./_nav"
import Home from './_home'
import Game from "./_game"
import '../styles/App.scss'
import React, {useState} from "react"

import background from "../styles/images/background.png"
import { Parallax } from "react-parallax"

const MyApp = () => {

  const [toogleNav, setToogleNav] = useState(false)
  const [arrowToogler, setArrowToogler] = useState(false)
  const [burgerToogle, setBurgerToogle] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isTouched, setIsTouched] = useState("")
  const [sliderCount, setSliderCount] = useState(0)


  let props = {
    toogleNav: toogleNav,
    arrowToogler:arrowToogler,
    burgerToogle: burgerToogle,
    touchStart: touchStart,
    touchEnd: touchEnd,
    isTouched: isTouched,
    sliderCount: sliderCount,
    setSliderCount: setSliderCount,
    setIsTouched: setIsTouched,
    setTouchStart: setTouchStart,
    setTouchEnd: setTouchEnd,
    setBurgerToogle: setBurgerToogle,
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
      <Game {...props} />
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
