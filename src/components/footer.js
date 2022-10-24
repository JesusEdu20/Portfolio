
import React from 'react';
import "./footer.scss";
import ButtonToTalk from './buttonToTalkWap';
import BtnContactss from './btnContact';

//


function Footer(props) {

    const btnValues={
       

            btnGit:{
               
                btnUrl:"https://github.com/JesusEdu20/Portfolio",
                classBtn:"icon-github"
            },

            btnTelegram:{
               
                btnUrl:"https://msng.link/o/?@jesusedu20=tg",
                classBtn:"icon-telegram"
            },
            btnTwitter:{
               
                btnUrl:"https://twitter.com/jesusca59743058",
                classBtn:"icon-twitter"
            },
            btnInstagram:{
               
                btnUrl:"https://www.instagram.com/jesusedu20/",
                classBtn:"icon-instagram"
            },

    }


  return (
    <div className={props.sectionClass} id="section-footer">


        <div className='section-container'>
            {props.children}

            <div className='contacts-info'>

            
                <div className='title-container'>
                    <p className="tag-saludo">Contacts &#128236;</p>
                    <h1>let's to talk</h1>
                </div>

                <ButtonToTalk buttonClass="btn-wap-container" link="https://wa.me/584264599288?text=hablemos" icon="icon-whatsapp">WhatsApp</ButtonToTalk>


                <div className='email-container'>
                    <span>E-mail</span>
                    <p>jesuseduardocast18@gmail.com</p>
                </div>


                
            <div className='contacts-footer'>
                <BtnContactss btnClass="icons-container" btnValues={btnValues}/>
            </div>

           </div>

        </div>

    </div>
  )
}

export default Footer;


//Studies

//card1
//University 
/*actually i'm studying 
computing in the Technological University Sucre*/

//card2
//Programming school
/*i'm student on Platzi wich is a tech academy from latin america dediacted to teach tecnologies skills*/ 
//certifications