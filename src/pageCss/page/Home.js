import { Link } from "react-router-dom";
import '../pageCss/Home.css'
import { useState } from 'react'
import HomeImg from '../Images/HomeMe.jpg'
import js from '../Images/js.png'
import html from '../Images/html.png'

function Home() {
      return (
            <>
                  <div className="AllHome">
                        <div className="Txt" >
                              I'm Gabriel, a recent <b>coding graduate</b> with expertise in <b style={{color: "#F16524"}}>HTML5</b> , <b style={{color: "#2965F1"}}>CSS3</b> , <b style={{color: "#F0BE25"}}>Javascript</b> , <b style={{color: "#61DBFB"}}>React</b> , and <b style={{color: "#787CB4"}}>Php</b>. I excel in creating visually appealing web pages, building interactive interfaces, and developing dynamic web applications. I'm eager to contribute my skills, thrive in collaboration, and stay updated with industry trends.
                        </div>
                        <img src={HomeImg} id="HomeImg"></img>
                  </div>
                  <div className="Home-Cert">
                        <img src={js} id="js"></img>
                        <div className="Cert-txt" id="C1">The IT Specialist JavaScript certification recognizes a professional's advanced knowledge and skills in JavaScript programming. It covers core concepts, OOP, DOM manipulation, AJAX, asynchronous programming, and popular frameworks like React or Angular. Obtaining this certification enhances career prospects in web development or full-stack development.
                        </div>
                        <img src={html} id="html"></img>
                        <div className="Cert-txt" id="C2">The HTML5 Application Development Fundamentals certification validates proficiency in building web applications using HTML5. This credential demonstrates a candidate's understanding of HTML5 syntax, semantic elements, multimedia integration, form handling, offline capabilities, and more. It is highly regarded by employers as it showcases expertise in modern web development practices. Preparation involves studying HTML5 concepts, practicing coding exercises, and gaining hands-on experience.
                        </div>
                  </div>
            </>
      )
}

export default Home;
