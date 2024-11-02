import React from "react";
import github_icon from "../assets/github.png";
import kaggle_icon from "../assets/kaggle.png";
import artstation_icon from "../assets/artstation.png";

export default function BottomPart(){
    return (
        <div className="bottom-part">

            <a href="https://github.com/OmarAlmusa" target="_blank" rel="noopener noreferrer" className="github button">
                <img src={github_icon} className="icon" alt="github-icon"></img>
            </a>

            <a href="https://www.kaggle.com/anrenk" target="_blank" rel="noopener noreferrer" className="kaggle button">
                <img src={kaggle_icon} className="icon" alt="kaggle-icon"></img>
            </a>

            <a href="https://www.artstation.com/anren89" target="_blank" rel="noopener noreferrer" className="artstation button">
                <img src={artstation_icon} className="icon" alt="artstation-icon"></img>
            </a>

        </div>
    )
}