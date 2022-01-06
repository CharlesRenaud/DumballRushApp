import react from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEnvelope, faGamepad, faHome, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'


const Nav = (props) => {
    console.log(props)

    const toogler = () => {
        if(!props.toogleNav){
            props.setToogleNav(true)
            burgerToogle()
        }else{
            props.setToogleNav(false)
            burgerToogle()

        }


    }

    const burgerToogle = () => {
        console.log(props.burgerToogle)
        if(!props.burgerToogle){
            props.setBurgerToogle(true)
        }else{
            props.setBurgerToogle(false)
        }
    }

    const goTo = (anchor) => {
        console.log(anchor)
        const element = document.querySelector('#'+anchor)
        var topPos;
        props.setToogleNav(false)
        props.setBurgerToogle(false)
        if(element === null){
             topPos = 0
        }else{
             topPos = element.getBoundingClientRect().top + window.pageYOffset
        }
     
        window.scrollTo({
        top: topPos, // scroll so that the element is at the top of the view
        behavior: 'smooth' // smooth scroll
        })
    }

    return (
        <div id="nav-container">

            {/* Desktop Navigation */}
            <div id="logo"  onClick={()=>goTo("home")}></div>
            <ul id="nav-links-dektop">
                <li id="home-desktop" onClick={()=>goTo("home")}>
                    <FontAwesomeIcon className="icone" icon={faHome}  />
                    <label>Home</label>
                </li>
                <li id="game-desktop" onClick={()=>goTo("game")}>
                    <FontAwesomeIcon className="icone" icon={faGamepad} />
                    <label>Game</label>
                </li>
                <li id="news-desktop" onClick={()=>goTo("news")}>
                    <FontAwesomeIcon className="icone" icon={faNewspaper} />
                    <label>News</label>
                </li>
                <li id="studio-desktop" onClick={()=>goTo("studio")}>
                    <FontAwesomeIcon className="icone" icon={faUserFriends} />
                    <label>Studio</label>
                </li>
                <li id="contact-desktop" onClick={()=>goTo("contact")}>
                    <FontAwesomeIcon className="icone" icon={faEnvelope} />
                    <label>Contact</label>
                </li>
            </ul>
            <div className='desktop-social-nav'>
                <a href="https://www.instagram.com/dumballrush/"  className="icones"  id="instagrams"></a>
                <a href='https://www.tiktok.com/@dumballrush'  className="icones"  id="tiktoks"></a>
                <a href="https://twitter.com/DumballRush"  className="icones"  id="twitters"></a>
                <a href="https://discord.gg/wcPSHs2ZYp"  className="icones"  id="discords"></a>
            </div>


            {/* Mobile Navigation */}
            <div onClick={() => toogler() } id="nav-click">
            <button className={"menu " + (props.burgerToogle ? "opened" : "")} aria-label="Main Menu">
      <svg style={{ height: 53, width: 50 }} viewBox="0 0 100 100">
        <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
        <path className="line line2" d="M 20,50 H 80" />
        <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
      </svg>
    </button>
                <p className="nav-title" >Explorez</p>
            </div>
            <div id="box-links" className={ props.toogleNav ? "links-anim" : "desactived"}>
                {
                   props.toogleNav ? <Box {...props} /> : <div></div>
                }
            </div>
        </div>
    );
};

export default Nav;

const Box = (props) => {
    
    const goTo = (anchor) => {
        console.log(anchor)
        const element = document.querySelector('#'+anchor)
        var topPos;
        props.setToogleNav(false)
        props.setBurgerToogle(false)
        if(element === null){
             topPos = 0
        }else{
             topPos = element.getBoundingClientRect().top + window.pageYOffset
        }
     
        window.scrollTo({
        top: topPos, // scroll so that the element is at the top of the view
        behavior: 'smooth' // smooth scroll
        })
    }
    return (
            
            <ul className={"links-list "}>
                <li onClick={()=>goTo("home")}>
                <FontAwesomeIcon className="icone" icon={faHome}  />
                    Home
                    </li>
                <li onClick={()=>goTo("game")}>
                <FontAwesomeIcon className="icone" icon={faGamepad} />
                    Game
                    </li>
                <li onClick={()=>goTo("news")}>
                <FontAwesomeIcon className="icone" icon={faNewspaper} />
                    News
                    
                    </li>
                <li onClick={()=>goTo("studio")}>
                <FontAwesomeIcon className="icone" icon={faUserFriends} />
                    Studio
                    </li>
                <li onClick={()=>goTo("contact")}>
                <FontAwesomeIcon className="icone" icon={faEnvelope} />
                    Contact
                    </li>
            </ul>
    )
}