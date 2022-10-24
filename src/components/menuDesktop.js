import React from "react";
import "./menuDesktop.scss";


function  MenuDesktop (props){
    
    const deploy=(Values)=>{

        let contactsDeployed= Object.values(Values).map(value=>
        <li key={value.li}><a href={value.url} rel="noreferrer">{value.li}</a></li>)

        return contactsDeployed

    }

    const style={
        display:"flex",
        gap:props.gap||"10px",
        listStyle:"none",
        

    }

    return(

        <ol className={props.sectionClass} style={style}>
             {deploy(props.Values)}
        </ol>    
       
       
    )
}

export default MenuDesktop;


/*  <ol>
        <li>
            Inicio
        </li>
        <li>
            About Me
        </li>
        <li>
            PortFolio
        </li>
        <li>
            Contacts
        </li>
      </ol>*/ 