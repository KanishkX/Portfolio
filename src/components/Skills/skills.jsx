import React from "react";
import './skills.css'
import c from "../../assets/c-.png"
import csharp from "../../assets/c-sharp.png" 
import java from "../../assets/java.png"
import js from "../../assets/js.png"
import python from "../../assets/python.png"
export function Skills(){
    return (
    <div class="skills">
        <span class="twoPiece">
            <span class="skillTitle">What I Do?</span>
            <br></br>
            <span class="skillDesc">"Strong foundation in languages such as C, C++, C#, Java, JavaScript, HTML, and CSS. Proficient in object-oriented programming (OOP) and adept at database management. With a proven ability to easily navigate and contribute effectively across a diverse range of languages and technologies."</span>
            
            <span class="skillBar">
                <img src = {c}></img>
                <img src = {csharp}></img>
                <img src = {java}></img>
                <img src = {js}></img>
                <img src = {python}></img>
            </span>
        </span>
        <br/>
        

    </div>)
}