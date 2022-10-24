import React from "react";
import "./portFolio.scss"
import DemoCarousel from "./carousel"
import BtnContacts from "./btnContact";





function PortFolio (props){


    /* the component already has on his stylesheet the icon-url to render the img,
    just look for the classBtn on the style's btn-component and then type it on the 
    property classbtn of the variable btnValues.
     */

    const btnValues={
        btnGit:{
           
            btnUrl:"",
            classBtn:"icon-git"
        },

        btnGitHub:{
           
            btnUrl:"",
            classBtn:"icon-github"
        },

        btnEcma:{
           
            btnUrl:"",
            classBtn:"icon-es6"
        },

       

        btnJS:{
           
            btnUrl:"",
            classBtn:"icon-js"
        },

        btnHtml:{
           
            btnUrl:"",
            classBtn:"icon-html"
        },

        btnCSS:{
           
            btnUrl:"",
            classBtn:"icon-css"
        },

        btnSass:{
           
            btnUrl:"",
            classBtn:"icon-sass"
        },

        btnReact:{
           
            btnUrl:"",
            classBtn:"icon-react"
        },


   


    }
    

    return(
        <section className={props.sectionClass}>
            <div className="skills-container">
                <h1 className="tag-title">skills 	
                 &#128187;</h1>
                <BtnContacts btnClass="icons-skills-container" btnValues={btnValues}/>

            </div>
            <DemoCarousel cardClass="card"/>
            
        </section>
    )
}

export default PortFolio;