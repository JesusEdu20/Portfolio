import React,{useState} from "react";
import "./section.scss"

import BtnContacts from "./btnContact";
import Presentation from "./presentation";
import ButtonToTalk from './buttonToTalkWap.js';



function Section (props){

    const btnValues={
        btnGitHub:{
           
            btnUrl:"https://github.com/JesusEdu20",
            classBtn:"icon-github"
        },
    }// link to the repository of gitHub; you can add more links in the object to render 
        //on the website
    
        
    


    return(
        
        <section className={props.sectionClass}>

            <nav>
                <BtnContacts btnClass="icons-container" btnValues={btnValues}/>
                
            </nav>

            <Presentation classPresentation="presentation-container" name="Jesus castillo" description="Front-end developer" saludo="Hello" emoji="&#128406;">
                <ButtonToTalk buttonClass="btn-wap-container" link="https://wa.me/584264599288?text=hablemos" icon={"icon-whatsapp"}>vamos a conversar</ButtonToTalk>
            </Presentation>

            
            
        </section>
    )
}

export default Section;