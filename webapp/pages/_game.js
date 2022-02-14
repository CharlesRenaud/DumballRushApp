import React,{useEffect, useState} from 'react';
import bg from '../styles/images/bg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

const Game = (props) => {

    const [tester, setTester] = useState('initial')
    const [direction, setDirection] = useState('')


    function handleTouchStart(e) {
        props.setTouchStart(e.targetTouches[0].clientX);
    }

    function handleTouchMove(e) {
        props.setTouchEnd(e.targetTouches[0].clientX);
    }


    const handleDirection = (tag) => {


        if(props.touchStart - props.touchEnd > 100 || tag === "left"){
            if(direction === "left"){
                setDirection("left1")
            }else if(direction == "left1"){
                setDirection("initialL")
            }
            else{
                setDirection("left")
            }
        }
        else if(props.touchStart - props.touchEnd < -100 || tag === "right"){
            if(direction === "right"){
                setDirection("right1")
            }else if(direction == "right1"){
                setDirection("initialR")
            }
            else{
                setDirection("right")
            }
        }
    }


    useEffect(() => {
        if(direction !== ""){
            if((direction === "left") || (direction === "left1") || (direction === "initialL")) {
                console.log(direction)
                console.log("lefting", tester)

                if(props.sliderCount === 0){
                    if((tester === "initial") || (tester === "initialL") || (tester === "left") || (tester === "left1")){
                        props.setIsTouched('left')
                        props.setSliderCount(1)
                    }
                }
                else if(props.sliderCount === 1 ){
                    if((tester === "left") || (tester === "left1") || (tester === "initialL")){
                        props.setIsTouched('left1')
                        props.setSliderCount(2)
                    }
                    else if((tester === "right") || (tester === "right1") || (tester === "initialR")){
                        props.setIsTouched("right")
                        props.setSliderCount(2)
                    }
                }
                else if(props.sliderCount === 2 ){
                    if((tester === "left") || (tester === "left1") || (tester === "initialL")){
                        props.setIsTouched("")
                        props.setSliderCount(0)
                        
                    }
                    else if((tester === "right") || (tester === "right1") || (tester === "initialR") ){
                        props.setIsTouched("")
                        props.setSliderCount(0)
                    }
                }
            }

            if((direction === "right") || (direction === "right1") || (direction === "initialR")) {
                console.log(direction)
                console.log("righting", tester)

                if(props.sliderCount === 0){
                    if((tester === "initial") || (tester === "initialR") || (tester === "right") || (tester === "right1")){
                        props.setIsTouched('right')
                        props.setSliderCount(2)
                    }
                    else if((tester === "left") || (tester === "left1")){
                        props.setIsTouched("right")
                        props.setSliderCount(2)
                    }
                }
                else if(props.sliderCount === 1 ){
                    if((tester === "right") || (tester === "right1") || (tester === "initialR")){
                        props.setIsTouched('')
                        props.setSliderCount(0)
                    }
                    else if((tester === "left") || (tester === "left1") || (tester === "initialL") ){
                        props.setIsTouched("")
                        props.setSliderCount(0)
                    }
                    else if(tester === "initialL"){
                        props.setIsTouched("")
                        props.setSliderCount(0)
                    }
                }
                else if(props.sliderCount === 2 ){
                    if((tester === "right") || (tester === "right1") || (tester === "initialR")){
                        props.setIsTouched("left")
                        props.setSliderCount(1)
                    }
                    else if((tester === "left") || (tester === "left1") || (tester === "initialL")){
                        props.setIsTouched("left")
                        props.setSliderCount(1)
                    }
                } 
            }
            
        setTester(direction)
        }
}, [direction])

   const tooglerz = () => {
      if(!props.arrowToogler){
          props.setArrowToogler(true)
          const element = document.querySelector('#news')
          const topPos = element.getBoundingClientRect().top + window.pageYOffset
            window.scrollTo({
            top: topPos, // scroll so that the element is at the top of the view
            behavior: 'smooth' // smooth scroll
            })
        }
        else{
            props.setArrowToogler(false)
        }
    }

    let titledisplayed = "title-hide";
    let animatedBox = "box-hide"

    if(props.offset > 150 && props.offset < 1800) {
        titledisplayed = "title-display ";
        animatedBox = "animated-box ";        
    }

    return (
        <div className="game-container">
            <h1 className={titledisplayed}>Game : <span>découvre dumball ! </span></h1>

            <div className={"game-slider " + (props.isTouched === 'right' ? "right-check " : '') + (props.isTouched === 'left' ? "left-check" : '') + (props.isTouched === 'right1' ? "right1-check " : '') + (props.isTouched === 'left1' ? "left1-check" : '') } 
            onTouchStart={(e)=>handleTouchStart(e)} 
            onTouchMove={(e)=>handleTouchMove(e)} 
            onTouchEnd={()=>handleDirection()}>

                <div id="box1" className={ animatedBox +  "game-box "  + (props.isTouched === "" ? "is-out" : '') + (props.isTouched === "right" ? "is-out" : '') + (props.isTouched === "left1" ? "is-out" : '') }>
                    <div id='img1' className="game-image"></div>
                    <div className="game-description">
                    <h2>Title 1</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Quisque id dui fermentum, pellentesque ex nec, semper nisi. 
                            Praesent interdum lectus vel ligula condimentum, vel efficitur orci posuere. 
                            Proin non consequat velit.
                            Praesent sit amet massa a elit mollis consectetur id vel elit. 
                        </p>
                    </div>
                </div>
                <div id="box2" className={animatedBox + "game-box " + (props.isTouched !== "" ? "is-out" : '')}>
                    <div id="img2" className="game-image"></div>
                    <div className="game-description">
                        <h2>Title 2</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Quisque id dui fermentum, pellentesque ex nec, semper nisi. 
                            Praesent interdum lectus vel ligula condimentum, vel efficitur orci posuere. 
                            Proin non consequat velit.
                            Praesent sit amet massa a elit mollis consectetur id vel elit. 
                        </p>
                    </div>
                </div>
                <div id="box3" className={animatedBox + "game-box " + (props.isTouched === "" ? "is-out" : '') + (props.isTouched === "left" ? "is-out" : '') + (props.isTouched === "right1" ? "is-out" : '') }>
                    <div id="img3" className="game-image"></div>
                    <div className="game-description">
                        <h2>Title 3</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Quisque id dui fermentum, pellentesque ex nec, semper nisi. 
                            Praesent interdum lectus vel ligula condimentum, vel efficitur orci posuere. 
                            Proin non consequat velit.
                            Praesent sit amet massa a elit mollis consectetur id vel elit. 
                        </p>
                    </div>
                </div>
            </div>
            <div className="control-box">
                <div className="go-left" onClick={()=>handleDirection('left')}> 
                    <FontAwesomeIcon style={{color: "#3d2156"}} icon={faArrowCircleLeft}  />
                </div>
                <div className="bubble-list">
                    <div className={"bubble " + (props.isTouched === "left" && props.sliderCount === 1 ? "bubble-color" : "") 
                 + (props.sliderCount === 2 && props.isTouched==="right1" ? "bubble-color" : "") } ></div>
                    <div className={"bubble " + (props.sliderCount === 0 ? "bubble-color" : "")}></div>
                    <div className={"bubble " 
                    + (props.isTouched === "right" && props.sliderCount === 1 ? "bubble-color" : "")
                    + (props.isTouched === "right" && props.sliderCount === 2 ? "bubble-color" : "")
                    + (props.sliderCount === 2 && props.isTouched==="left1" ? "bubble-color" : "")
                    + (props.sliderCount === 1 && props.isTouched==="left1" ? "bubble-color" : "") 
                } 

                    >
                    </div>
                </div>
                <div className="go-right" onClick={()=>handleDirection('right')}>
                    <FontAwesomeIcon style={{color: "#3d2156"}} icon={faArrowCircleRight}  />
                     </div>
            </div>
                <a onClick={()=>tooglerz()} className={"arrow-icone " + (props.arrowToogler ?  "open" : "" ) }>
                    <span className="left-bar"></span>
                    <span className="right-bar"></span>
                </a>
            

        </div>
    );
};

export default Game;