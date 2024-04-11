import React from "react"
import './About.css';
import onlinelibrary from './onlinelibrary.jpg';

function About() {
 

  return (
    <>
      <div  className="about">        
      <p className="about-heading">Get to Know More...</p>    
      <p className="about-heading-small">About Us</p>       
      <div className="about-container">
    <div className="about-container-text-item">
        <p >
        Hello, Welcome to...
      </p>
      <p className="highlight-text">
        Book In Nook !!
      </p>
      <p >
         Your cozy corner for all the best selection of books!
      </p>
      <p >
        Book In Nook is more than just a website - Its a community of fellow book enthusiasts who share a passion for the written word.
      </p>
      <p >
        Grap a cup of coffee,curl up in your favorite reading nook and go through our website.
      </p>
      </div>
      <div>
      <img className="about-image about-container-img-item" 
      src={onlinelibrary}
      alt={'onlinelibrary'}
    /></div>
      </div> 
      
      </div>
     
    </>
  )
}

export default About;
