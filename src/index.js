import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./components/Card"


function PageRender() {
    return (
        <div className="Page">
            <Card />
        </div>
        
    )
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<PageRender />);