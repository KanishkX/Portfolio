import React from "react";
import './intro.css'
import pic from '../../assets/pic.jpeg'
export function Intro(){
    return(
        <section className="intro">
            <div className="introContent">
                <span className="hello">hello</span>
                <span className = "introText">I'm <span className = "introName">Kanishk</span></span> 
                <p className = "introPara">IT Student currently stuying in 2<sup>nd</sup>  at Nova Scotia Community College </p>
            </div>
            <section className="pic">
                {/* <img id="toggleTheme" class="theme-btn" src="assets/theme_light.png" alt="theme icon"/> */}
                <div className="hero-pic">
                    <div className="inner-circle"></div>
                    <img src={pic}/>
                </div>
            </section>
        </section>
    )
}