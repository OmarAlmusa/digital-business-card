import React from "react";
import profile_picture from "../assets/me.jpeg";
import email_icon from "../assets/email.png";
import linkedin_icon from "../assets/linkedin.png";

export default function Introduction(){
    return (

        <div className="introduction">

            <img src={profile_picture} className="profile-picture" alt="profile-picture"></img>
        
            <h1 className="user-name">Omar Almusa</h1>
            <ul className="user-title">
                <li>Electrical and Electronics Engineer</li>
                <li>ML/AI Engineer</li>
                <li>Digital Artist</li>
            </ul>
        
            <div className="contact-buttons">
        
                <a href="mailto:omaralmusa01@gmail.com" target="_blank" rel="noopener noreferrer" className="email button">
                    <img src={email_icon} className="icon" alt="email-icon"></img>
                    <span>Email</span>
                </a>
        
                <a href="https://www.linkedin.com/in/omar-almusa/" target="_blank" rel="noopener noreferrer" className="linkedin button">
                    <img src={linkedin_icon} className="icon" alt="linkedin-icon"></img>
                    <span>Linkedin</span>
                </a>
        
            </div>
        
        </div>

    )
}
