import React from "react";

import BtnContacts from "./btnContact";
import Presentation from "./presentation";
import "./AboutMe.scss"




function AboutMe (props){
    

    const description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing "
    

    return(
        <section className={props.sectionClass}>

            <div className="photo-profile-container">
                <span className="tag-profile-photo"></span>
            </div>

            <Presentation classPresentation="about-me-container" name="Jesus castillo" ubication={true} country="Venezuela" saludo="About Me" description={description}  emoji="	
            &#129488;" ></Presentation>
             
            
            
            
        </section>
    )
}

export default AboutMe;