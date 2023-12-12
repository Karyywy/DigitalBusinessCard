import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"


export default function Profile() {
    return (
        <div className="profile">
            <img src="../images/Kary_img.jpg" alt="avatar" className="profile-icon"/>
            <div className="kary-title">
            <h1>Kary Young</h1>
            <h3>Frontend Developer</h3>
            <span>https://portfolioywy.netlify.app/</span>
            </div>

            <div className="profile-btn">
                <button className="email-btn">
                    <FontAwesomeIcon icon={faEnvelope} />
                    {" "}Email
                </button>
                <button className="linkedin-btn">
                    <FontAwesomeIcon icon={faLinkedin} />
                    {" "}LinkedIn
                </button>
            </div>

        </div>
    )
}

