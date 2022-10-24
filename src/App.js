
import React from 'react';
import './App.css';
import Section from "./components/section.js";
import AboutMe from './components/AboutMe';
import PortFolio from './components/portFolio';
import Footer from './components/footer';
import DeployLayout from "./components/deployStructure"
//


function App() {

  const btnValues={
       

    btnGit:{

       key:1,
       header:<p>University</p>,
       section:<p>actually i'm studying 
       computing in the Technological University Sucre</p>,
       footer:<p></p>,
       
    },

    btnOther:{
      key:2,
      header:<p>Programming School</p>,
      section:<p>i'm student on Platzi wich is a tech academy from latin america dediacted to teach tecnologies skills</p>,
      footer:<a href='https://www.w3schools.com/tags/att_a_rel.asp' rel='certifications'>certifications</a>,
  },
}
  
  return (
    <div className="App">
      
      <Section sectionClass="section-presentation"/>
      <AboutMe sectionClass="section-about-me"/>
      <PortFolio sectionClass="section-portfolio"/>
      <Footer sectionClass="section-footer"> 
        <DeployLayout sectionClass="testDeploy" btnValues={btnValues}>

        </DeployLayout>
      </Footer>
      
      
   
      
    </div>
  )
}

export default App;
