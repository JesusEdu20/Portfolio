//this component deploy a layout responsive using grid 

import React from "react";
import "./deployStructure.scss";
//import { useRef, useEffect } from "react";

function DeployLayout(props) {

    const styles={

        boxSizing: "border-box",
        width: "100%",
        height: "auto",
        display: "grid",
        gridTemplateRows: "max-content"
        
    }

    const cardStyles={

        width:"100%",
        height:"100%"

        /*display: "grid",
        flexDirection:"column",
        justifyContent:"c"*/
    }

    const deploy=(btnValues)=>{

        let contactsDeployed= Object.values(btnValues).map(value=>
        <div href={value.btnUrl} key={value.key}>
            <div style={cardStyles}>
                <div className="header">{value.header}</div>
                <section className="section">{value.section}</section>
                <footer className="footer">{value.footer}</footer>
            </div>    
        </div>)

        return contactsDeployed

    }

    /*const div=useRef()

    useEffect(()=>{
        console.log(div.current.offsetWidth);
    },[])*/


  return (

        <div className={`card-container ${props.sectionClass}`} style={styles}>
            
           {props.children}
           {deploy(props.btnValues)}

        </div>
  )

}

export default DeployLayout;
