import React from "react";
import './intro.css'
import pic from '../../assets/pic.png'
import {motion} from "framer-motion"

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };
export function Intro(){
    return(
        <section class="intro">
            <div class="introContent">
                <span class="hello">hello</span>
                <span class = "introText">I'm <span class = "introName">Kanishk</span></span> 
                <p class = "introPara">Skilled Software Developer graduated from Nova Scotia Community College </p>
            </div>
            <div class="pic">
                {/* <img id="toggleTheme" class="theme-btn" src="assets/theme_light.png" alt="theme icon"/> */}
                <div class="hero-pic">
                    {/* <div class="inner-circle"></div> */}
                    <img src={pic}/>
                    <motion.svg
                        class="circle-svg"
                            width="600"
                            height="600"
                            viewBox="0 0 600 600"
                            initial="hidden"
                            animate="visible"
                            fill="transparent"
                            >
                    <motion.circle
                         cx="300" // Centered horizontally
                         cy="300" // Centered vertically
                         r="290" // Radius
                        stroke="#ff0055"
                        // variants={draw}
                        // custom={1}
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{strokeDasharray: "24 10 0 0"}}
                        animate={{
                            strokeDasharray:["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate:[120,360],
                        }}

                        transition={{
                            duration: 20,
                            repeat:Infinity,
                            repeatType: "reverse"
                        }}
                        
                    //   cx="253"
                    //   cy="253"
                    //   r="250"
                    //   stroke="#00ff99"
                    //   strokeWidth="4"
                    //   strokeLinecap="round"
                    //   strokeLinejoin="round"
                    //   initial={{ strokeDasharray: "24 10 0 0" }}
                    //   animate={{
                    //     strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                    //     rotate: [0, 120, 360] // Updated to use keyframes for rotation
                    //   }}
                    //   transition={{
                    //     duration: 4,
                    //     ease: "easeInOut",
                    //     repeat: Infinity,
                    //     repeatType: "loop"
                    //   }}
                    />
                </motion.svg>
                </div>
            </div>
            
            
        </section>
    )
}