import Nav from "./_nav"
import Home from './_home'
import Game from "./_game"
import '../styles/App.scss'
import React, {useState, useEffect} from "react"

import background from "../styles/images/background.png"
import { Parallax } from "react-parallax"
import News from "./_news"
import Studio from "./_studio"
import Contact from "./_contact"

const MyApp = () => {

  const [toogleNav, setToogleNav] = useState(false)
  const [arrowToogler, setArrowToogler] = useState(false)
  const [burgerToogle, setBurgerToogle] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isTouched, setIsTouched] = useState("")
  const [sliderCount, setSliderCount] = useState(0)
  const [titleAnimationLaunch, setTitleAnimationLaunch] = useState(false) 
  const [offset, setOffset] = useState(0);


  let props = {
    toogleNav: toogleNav,
    arrowToogler:arrowToogler,
    burgerToogle: burgerToogle,
    touchStart: touchStart,
    touchEnd: touchEnd,
    isTouched: isTouched,
    sliderCount: sliderCount,
    titleAnimationLaunch: titleAnimationLaunch,
    offset: offset,
    setOffset: setOffset,
    setTitleAnimationLaunch: setTitleAnimationLaunch,
    setSliderCount: setSliderCount,
    setIsTouched: setIsTouched,
    setTouchStart: setTouchStart,
    setTouchEnd: setTouchEnd,
    setBurgerToogle: setBurgerToogle,
    setArrowToogler:setArrowToogler,
    setToogleNav: setToogleNav,
  }


  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  console.log(offset); 


  return(
    <div className="App">
      <Nav {...props} />

      <Parallax id="home" bgImage={background.src}strength={300} className="section">
          <Home {...props} />
      </Parallax>

      <div style={{paddingTop:"10vh"}} id="game" className="section">
        <Game {...props} />
      </div>

      <div style={{paddingTop:"10vh"}} id="news" className="section">
        <News {...props} />
      </div>
      <div style={{paddingTop:"10vh"}} id="studio" className="section">
        <Studio {...props} />
      </div>

      <div style={{paddingTop:"10vh"}} id="contact" className="section">
        <Contact {...props} />
      </div>

    </div>
  )
}

export default MyApp
