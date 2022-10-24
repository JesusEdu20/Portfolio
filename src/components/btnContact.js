import React from "react";
import "./btnContacts.scss";

function  BtnContacts (props){
   
    function deployContacts(btnValues){

        const values= Object.values(btnValues);
        let contactsDeployed=values.map(value=><a href={value.btnUrl} key={value.classBtn}><span className={value.classBtn}></span></a>)
        return contactsDeployed
    }   

    return(
       
       <div className={props.btnClass}>
            {deployContacts(props.btnValues)}
       </div>
    )
}

export default BtnContacts;


