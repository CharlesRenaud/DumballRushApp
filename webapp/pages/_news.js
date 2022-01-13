import React from 'react';

const News = (props) => {

    const tooglerz = () => {
        if(!props.arrowToogler){
            props.setArrowToogler(true)
            const element = document.querySelector('#studio')
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
        <div className="news-container">
            <h1>News</h1>
            <div className="news-embed">
            <a className="twitter-timeline" href="https://twitter.com/DumballRush?ref_src=twsrc%5Etfw">Tweets by DumballRush</a> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>    
            </div>  
            <a onClick={()=>tooglerz()} className={"arrow-icones " + (props.arrowToogler ?  "open" : "" ) }>
                    <span className="left-bar"></span>
                    <span className="right-bar"></span>
                </a>          
        </div>
    );
};

export default News;