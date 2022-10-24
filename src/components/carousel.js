import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.scss"
import { Carousel } from 'react-responsive-carousel';


function  DemoCarousel (props){

      const styleImg={
       display:"flex"
      }

      const imgContainer={
        
        height:"200px"
      }

    return(

        <Carousel autoPlay={true} infiniteLoop={true} width="100%" showThumbs={false}>

        <a href='https://dynamic-zabaione-429ba8.netlify.app/' target="_blank"> 
            <div className={props.cardClass}>
            
                <header className='card-header'>
                    <h1 className='tag-title'>Note-of-js</h1>
                </header>
                <section className='card-section'>
                    <p className='tag-paragraph'>
                    Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el 
                    </p>
                </section>
                <footer>
               
                </footer>
            </div>
        </a>
           

       
        
        <a href='https://reactcalculator29.netlify.app/' target="_blank"> 
            <div className={props.cardClass}>

         
            <header className='card-header'>
                <h1>Calculator</h1>
            </header>

            <section className='card-section'>
                <p className='tag-paragraph'>
                    Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el 
                
                </p>
            </section>
            <footer>
               
            </footer>
            </div>
        </a>


        <a href='https://eclectic-profiterole-7d13bb.netlify.app/' target="_blank"> 
            <div className={props.cardClass}>
            
            <header className='card-header'>
                <h1 className='tag-title'>The computers</h1>
            </header>
            <section className='card-section'>
                <p className='tag-paragraph'>
                Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el 
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