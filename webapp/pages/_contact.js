import React from 'react';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact us !</h1>
            <p className="contact-text">By social Networks</p>
            <div className="social-box">
                <a href="https://www.instagram.com/dumballrush/"  className="icone"  id="instagram"></a>
                <a href='https://www.tiktok.com/@dumballrush'  className="icone"  id="tiktok"></a>
                <a href="https://twitter.com/DumballRush"  className="icone"  id="twitter"></a>
                <a href="https://discord.gg/wcPSHs2ZYp"  className="icone"  id="discord"></a>
                <div className="icone"  id="linkedin"></div>
                <div className="icone"  id="steam"></div>

            </div>
            <p className="contact-text1">or send a message : </p>
            <input placeholder="yourmail@mail.com" type="texte"></input>
            <textarea id="story" placeholder="Write some Crazy Things" name="story" rows="5" cols="33">
            </textarea>  
            <button className="send-btn">Send</button>      
</div>
    );
};

export default Contact;