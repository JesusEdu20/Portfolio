import React from "react";

import Presentation from "./presentation";
import "./AboutMe.scss"




function AboutMe (props){
    

    const description="Since i was child I'm a fanatic of the the technology, therefore now i'm on the mission to learn the diferents skills that i need to become an Full-Stack-developer. I'm 20 years old and learning is my principal target"
    

    return(
        <section className={props.sectionClass} id="section-about-me">

            <div className="photo-profile-container">
                <span className="tag-profile-photo"></span>
            </div>

            <Presentation classPresentation="about-me-container" name="Jesus Castillo" ubication={true} country="Venezuela" saludo="About Me" description={description}  emoji="	
            &#129488;" ></Presentation>
             
            
            
            
        </section>
    )
}

export default AboutMe;