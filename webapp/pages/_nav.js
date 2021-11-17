import react from 'react';


const Nav = (props) => {
    console.log(props)

    const toogler = () => {
        if(!props.toogleNav){
            props.setToogleNav(true)
        }else{
            props.setToogleNav(false)
        }
    }

    return (
        <div id="nav-container">
            <div onClick={() => toogler() } id="nav-click">
                <div id="burger">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
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
                <li onClick={()=>goTo("home")}>Home</li>
                <li onClick={()=>goTo("game")}>Game</li>
                <li onClick={()=>goTo("news")}>News</li>
                <li onClick={()=>goTo("studio")}>Studio</li>
                <li onClick={()=>goTo("contact")}>Contact</li>
            </ul>
    )
}