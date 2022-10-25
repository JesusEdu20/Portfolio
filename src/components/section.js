
import "./section.scss"

import BtnContacts from "./btnContact";
import Presentation from "./presentation";
import ButtonToTalk from './buttonToTalkWap.js';

import Resize from "./scrollResize";
import MenuDesktop from "./menuDesktop";




function Section (props){

    const btnValues={
        btnGitHub:{
           
            btnUrl:"https://github.com/JesusEdu20",
            classBtn:"icon-github"
        },
    }// link to the repository of gitHub; you can add more links in the object to render 
        //on the website
    
        
    const Values={

        home:{
            li:"Home",
            url:"#principal-section",
        },

        
        aboutMe:{
            li:"About Me",
            url:"#section-about-me",
            
        },

        PortFolio:{
            li:"Portfolio",
            url:"#section-portfolio",
            
        },

        Contacts:{
            li:"Contacts",
            url:"#section-footer",
            
        }

    }

    
    //menu responsive
    const desktop= <MenuDesktop sectionClass="menu-desktop" Values={Values} gap="40px"></MenuDesktop>
    const mobile= <BtnContacts btnClass="icons-container" btnValues={btnValues}/>


    return(
        
        <section className={props.sectionClass} id="principal-section">

            <nav>
            <Resize size={700} desktop={desktop} mobile={mobile}>
            </Resize>

            </nav>

            <Presentation classPresentation="presentation-container" name="Jesus Castillo" description="Front-end developer" saludo="Hello" emoji="&#128406;">
                <ButtonToTalk buttonClass="btn-wap-container" link="https://wa.me/584264599288?text=hablemos" icon={"icon-whatsapp"}>vamos a conversar</ButtonToTalk>
            </Presentation>

            
            
        </section>
    )
}

export default Section;