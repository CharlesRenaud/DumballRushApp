import react, {useEffect} from 'react'
import background from "../styles/images/background.png"


const Home = (props) => {

    useEffect(() => {
        console.log(props)
        const interval = setInterval(() => {
            props.setArrowToogler(false)
        }, 1000);
        return () => clearInterval(interval);
      }, [props.arrowToogler]);
      

    const toogler = () => {
      if(!props.arrowToogler){
          props.setArrowToogler(true)
          const element = document.querySelector('#game')
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
            <div className="home-container">
                <div className="logo"></div>
                <iframe className="ytb-lecteur" src="https://www.youtube.com/embed/yMk6dIFqSOU" allowFullScreen></iframe>
                <div className="steam-achat">Acheter sur Steam</div>
                <a onClick={()=>toogler()} className={"arrow-icon " + (props.arrowToogler ?  "open" : "" ) }>
                    <span className="left-bar"></span>
                    <span className="right-bar"></span>
                </a>
            </div>
    );
};

export default Home;