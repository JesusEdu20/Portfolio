import React from "react";
import "./presentation.scss";



/*Props of the component 
-classPresentation
-saludo
   1.emoji
-name
-description*/


function  Presentation (props){

   const activeCountry=()=>{
      const country=(props.ubication===true)?<p className="presentation-country">{props.country}</p>: null
      return country
   }; //change the type of the presentation, activating the tag country


    return(
       
       <div className={props.classPresentation}>
            <p className="tag-saludo">{props.saludo}{props.emoji}</p>
            {activeCountry()}
            
            <div className="title-container">    
                <h1 className="tag-title">{props.name}</h1>

                <p className="tag-description">{props.description}</p>
               {props.children}
            </div>
    
            
            
       </div>
    )
}

export default Presentation;



