import React from "react";
import "./Home.css";
import profile from "../../images/profile.png"
// import Typewriter from "typewriter-effect";
import Typical from "react-typical"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faFacebookSquare, faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";



const Home = () => {
  return (
    
      <div  className="container home-main">
        
          <div className="row arif">

         
            <div className="home col-md-6">
              <div className="max-width">
                <div className="home-content">
                  <div className="text-1">Hello, my name is</div>
                  <div className="text-2">
                  <Typical
                        steps={['Yeasir Arafat', 2000]}
                        loop={Infinity}
                        wrapper="b"
                      />
                  </div>

                  <div className="text-3" >And I'm {''} 
                    <span>
                    <Typical
                        steps={['Web Developer', 2000, 'Web Designer', 2000]}
                        loop={Infinity}
                        wrapper="b"
                      />
                    </span>

                  </div>

                  <div className="icon">

                  <a href="https://www.facebook.com/yeasirarafat53"><FontAwesomeIcon className="highlight"  icon={faFacebookSquare} size="3x"/></a>

                  <a href="https://github.com/Yeasirarafat53"><FontAwesomeIcon className="highlight" icon={faGithubSquare} size="3x" /></a>

                  <a href="https://www.linkedin.com/in/yeasir-arafat-997b791ba/"><FontAwesomeIcon className="highlight" icon={faLinkedin} size="3x"/></a>
                
                 </div>

                  <a className="resume"  href="https://drive.google.com/u/0/uc?id=1Gb6aBoCyEdDA3UCJDQC7rnl01RK0yLpq&export=download" target="_blank"> Download Resume <FontAwesomeIcon icon={faArrowAltCircleRight} /></a>

                </div>
              </div> 
            </div>


             <div className="profile col-md-6">
               <img src={profile} className="pic" alt="" />
             </div>

            


          </div>



    </div>


      
       


     
      
 



 
      
    
  );
};

export default Home;


// {/* <Typewriter
//                   options={{
//                     strings: ["Hello", "World"],
//                     autoStart: true,
//                     loop: true,
//                   }}
//                 /> */}
