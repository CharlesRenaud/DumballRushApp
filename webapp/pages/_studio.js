import React, {useEffect, useState} from 'react';
import team from "../data/team.json";
import est from "../styles/images/balls/pp_Est.png"
import flo from "../styles/images/balls/pp_Flo.png"
import kiki from "../styles/images/balls/pp_Kiki.png"
import max from "../styles/images/balls/pp_Max.png"
import seg from "../styles/images/balls/pp_Sego.png"
import ted from "../styles/images/balls/pp_Ted.png"
import thom from "../styles/images/balls/pp_Thom.png"

let teamImages = [
    est,
    flo,
    kiki,
    max,
    seg,
    ted,
    thom,
    thom
]


const duration = 500; // ms
const delay = 200; // ms
const animStr = (i) => `fadeIn ${duration}ms ease-out ${delay * (i + 1)}ms forwards`;


const Studio = (props) => {
    let loadAnim = false;
    const tooglerz = () => {
        if(!props.arrowToogler){
            props.setArrowToogler(true)
            const element = document.querySelector('#contact')
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

    if(props.offset > 2300 && props.offset < 3500) {
         loadAnim = true
         console.log(loadAnim)
    }else{
         loadAnim = false
    }
      
    return (
        <div className="studio-container">
            <h1 className='title-display'>The Studio : <span>présentation de l'équipe</span></h1>
            <div className="studio-display">
                <div className="studio-logo" alt="studio-logo"></div>
                <div className="studio-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Quisque id dui fermentum, pellentesque ex nec, semper nisi. 
                    Praesent interdum lectus vel ligula condimentum, vel efficitur orci posuere. 
                    Proin non consequat velit.
                    Praesent sit amet massa a elit mollis consectetur id vel elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Quisque id dui fermentum, pellentesque ex nec, semper nisi. 
                    Praesent interdum lectus vel ligula condimentum, vel efficitur orci posuere. 
                    Proin non consequat velit.
                    Praesent sit amet massa a elit mollis consectetur id vel elit.  
                </div>
            </div>
            <a onClick={()=>tooglerz()} className={"arrow-iconess " + (props.arrowToogler ?  "open" : "" ) }>
                    <span className="left-bar"></span>
                    <span className="right-bar"></span>
            </a>
            <div className='studio-desktop'>
                {
                    team.map((member, key) => {
                        return(
                        <div key={key} style={loadAnim === false ? {animationn:''} : {animation: animStr(key)} } className='team-card'>
                            <div className='team-snowball' style={{backgroundImage: `url("${teamImages[key].src}")`}}></div>
                            <h2 className='team-name'>{member.name}</h2>
                            <h3 className='team-role'>{member.role}</h3>
                            <p className='team-bio'>{member.bio}</p>
                        </div>
                    )})
                }
            </div>    
        </div>
    );
};

export default Studio;