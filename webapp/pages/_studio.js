import React from 'react';

const Studio = (props) => {
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
    return (
        <div className="studio-container">
            <h1>The Studio</h1>
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
        </div>
    );
};

export default Studio;