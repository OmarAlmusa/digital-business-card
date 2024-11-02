import React from "react";
import Introduction from "./Introduction";
import About from "./About";
import BottomPart from "./BottomPart";


export default function card(){
    return (
        <div className="card">

            <Introduction />
            <About />
            <BottomPart />    

        </div>
    )
}