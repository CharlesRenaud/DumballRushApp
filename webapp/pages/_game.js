import React from 'react';
import bg from '../styles/images/bg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

const Game = (props) => {


    function handleTouchStart(e) {
        props.setTouchStart(e.targetTouches[0].clientX);
    }

    function handleTouchMove(e) {
        props.setTouchEnd(e.targetTouches[0].clientX);
    }



    function handleTouchEnd(tag) {
        console.log("hola")


        if (props.touchStart - props.touchEnd > 150 || tag ==='left') {
            // do your stuff here for left swipe
            console.log('hpola')
            console.log(props.sliderCount)

            if(props.sliderCount === 0){
                props.setIsTouched('left')
                props.setSliderCount(props.sliderCount + 1)
                console.log(props.sliderCount + "left")
            }
            else if(props.sliderCount === 1 ){
                props.setIsTouched('left1')
                props.setSliderCount(props.sliderCount + 1)
                console.log(props.sliderCount + "left")
            }
            else if(props.sliderCount === 2 ){
                props.setIsTouched('')
                props.setSliderCount(0)
                console.log(props.sliderCount + "left")
            }

        }

        if (props.touchStart - props.touchEnd < -150 || tag === 'right') {
            // do your stuff here for right swipe
            if(props.sliderCount === 0){
                props.setIsTouched('right')
                props.setSliderCount(props.sliderCount + 1)
                console.log(props.sliderCount)
            }
            else if(props.sliderCount === 1 ){
                props.setIsTouched('right1')
                props.setSliderCount(props.sliderCount + 1)
                console.log(props.sliderCount)
            }
            else if(props.sliderCount === 2 ){
                props.setIsTouched('')
                props.setSliderCount(0)
                console.log(props.sliderCount)
            }

        }
    }

    return (
        <div className="game-container">
            <h1>Game</h1>

            <div className={"game-slider " + (props.isTouched === 'right' ? "right-check " : '') + (props.isTouched === 'left' ? "left-check" : '') + (props.isTouched === 'right1' ? "right1-check " : '') + (props.isTouched === 'left1' ? "left1-check" : '') } 
            onTouchStart={(e)=>handleTouchStart(e)} 
            onTouchMove={(e)=>handleTouchMove(e)} 
            onTouchEnd={()=>handleTouchEnd()}>

                <div id="box1" className={"game-box " + (props.isTouched === "" ? "is-out" : '') + (props.isTouched === "right" ? "is-out" : '') + (props.isTouched === "left1" ? "is-out" : '') }>
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
                <div id="box2" className={"game-box " + (props.isTouched !== "" ? "is-out" : '')}>
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
                <div id="box3" className={"game-box " + (props.isTouched === "" ? "is-out" : '') + (props.isTouched === "left" ? "is-out" : '') + (props.isTouched === "right1" ? "is-out" : '') }>
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
                <div className="go-left" onClick={()=>handleTouchEnd('left')}> 
                    <FontAwesomeIcon style={{color: "#3d2156"}} icon={faArrowCircleLeft}  />
                </div>
                <div className="bubble-list">
                    <div className={"bubble " + (props.isTouched === "left" && props.sliderCount === 1 ? "bubble-color" : "") 
                 + (props.sliderCount === 2 && props.isTouched==="right1" ? "bubble-color" : "") } ></div>
                    <div className={"bubble " + (props.sliderCount === 0 ? "bubble-color" : "")}></div>
                    <div className={"bubble " 
                    + (props.isTouched === "right" && props.sliderCount === 1 ? "bubble-color" : "") 
                    + (props.sliderCount === 2 && props.isTouched==="left1" ? "bubble-color" : "") } 
                    >
                    </div>
                </div>
                <div className="go-right" onClick={()=>handleTouchEnd('right')}>
                    <FontAwesomeIcon style={{color: "#3d2156"}} icon={faArrowCircleRight}  />
                     </div>

            </div>
            

        </div>
    );
};

export default Game;