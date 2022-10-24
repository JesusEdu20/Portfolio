//import React from "react";
//this componet renders a component depending on the size (props.size)
/*parameters
1.size: min size to switch the component
2.desktop: component to Desktop
3.mobile: component to mobile
*/ 
//import MenuDesktop from "./menuDesktop";
import { useEffect, useState } from "react";


function  Resize (props){
   
    const [element, setElement]=useState(props.desktop);
    
    let showSize=()=>{
        
        const width=window.innerWidth
        const element=(width>props.size)?props.desktop:props.mobile;
        setElement(element)
    }

    useEffect(()=>{
        
        window.addEventListener("load", showSize)
        window.addEventListener("resize", showSize)
       

        return()=>{
            window.removeEventListener("resize", showSize)
        }
        
    })

    return(

      element
        

        
    )
}

export default Resize;


