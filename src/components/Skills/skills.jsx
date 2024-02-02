import React from "react";
import './skills.css'
import c from "../../assets/c-.png"
import csharp from "../../assets/c-sharp.png" 
import java from "../../assets/java.png"
import js from "../../assets/js.png"
import python from "../../assets/python.png"
export function Skills(){
    return (
    <div className="skills">
        <span className="twoPiece">
            <span className="skillTitle">What I Do</span>
            <br></br>
            <span className="skillDesc">"Experienced IT student in the second year with a strong foundation in programming languages such as C, C++, Java, JavaScript, HTML, and CSS. Proficient in object-oriented programming (OOP) and adept at database management. Skilled software developer with a proven ability to navigate and contribute effectively across a diverse range of languages and technologies."</span>
        </span>
        <br/>
        <span className="skillBar">
            <img src = {c}></img>
            <img src = {csharp}></img>
            <img src = {java}></img>
            <img src = {js}></img>
            <img src = {python}></img>
        </span>

    </div>)
}