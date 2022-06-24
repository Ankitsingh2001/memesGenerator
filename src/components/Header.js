import React from "react";
import image from "../image/Trollface_non-free.png"
import style from "../index.css"

export default function Header(){
    return(
        <div className="nav">
            <img className="nav-icon" src={image}/>
            <h1 className="nav--title">Meme Generator</h1>
            <h3 className="nav--project"> ReactCourse - project 3</h3>
        </div>
    )
}