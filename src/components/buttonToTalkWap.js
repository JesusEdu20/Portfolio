import React from "react";
import "./buttonToTalkWap.scss"

function ButtonToTalk (props){
    return(
        <div className={props.buttonClass}>
          <a aria-label="Chat on WhatsApp" href={props.link} target="_blank" rel="chat">
          <span className={props.icon}></span>
            {props.children}</a> 
           
        </div>
    )
}

export default ButtonToTalk;