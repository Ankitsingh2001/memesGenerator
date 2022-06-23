import React from "react";
import memeData from "../memeData.js"


export default function Meme(){
   
    let url;
    function getMemeImage(){
        const memesArray = memeData.data.memes;
        let randomNumber = Math.floor(Math.random()*memesArray.length);
          url = memesArray[randomNumber].url;
        console.log(randomNumber);
    }
    return(
        <main>
            <form className="form">
                <input
                    type="text"
                    placeholder =" Top Text"
                    className="form--input"
                />
                <input
                    type="text"
                    placeholder =" Bottom Text"
                    className="form--input"
                />
                <button className="form--button"  onClick={getMemeImage}>
                    Get new meme image
                </button>

            </form>
        </main>
    )
}