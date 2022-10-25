import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.scss"
import { Carousel } from 'react-responsive-carousel';


function  DemoCarousel (props){

      

      

    return(

        <Carousel autoPlay={true} infiniteLoop={true} width="100%" showThumbs={false}>

        <a href='https://dynamic-zabaione-429ba8.netlify.app/' target="_blank" rel="noreferrer"> 
            <div className={props.cardClass}>
            
                <header className='card-header'>
                    <h1 className='tag-title'>Note-of-js</h1>
                </header>
                <section className='card-section'>
                    <p className='tag-paragraph'>
                    A blog about all the additions from ECMAScript 6
                    onwards                   
                    </p>
                    <ul><li>Html</li><li>Sass</li><li>Vanilla js</li></ul>
                </section>
                <footer>
               
                </footer>
            </div>
        </a>
           

       
        
        <a href='https://reactcalculator29.netlify.app/' target="_blank" rel="noreferrer"> 
            <div className={props.cardClass}>

         
            <header className='card-header'>
                <h1>Calculator</h1>
            </header>

            <section className='card-section'>
                <p className='tag-paragraph'>
                This's a project about a simple calculator,
                being my first project built with React
                </p>
                <ul><li>Html</li><li>Sass</li><li>React</li></ul>
            </section>
            <footer>
               
            </footer>
            </div>
        </a>


        <a href='https://eclectic-profiterole-7d13bb.netlify.app/' target="_blank" rel="noreferrer"> 
            <div className={props.cardClass}>
            
            <header className='card-header'>
                <h1 className='tag-title'>The computers</h1>
            </header>
            <section className='card-section'>
                <p className='tag-paragraph'>
                A blog about the introduction to    
                computing, which has a binary translator that I coded
                to explain how computers communicate with each other
                </p>
                
            </section>
            <footer>
               
            </footer>
            </div>
        </a>


     
        

        

       
    </Carousel>

    )
}

export default DemoCarousel;