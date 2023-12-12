import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faLinkedin, faInstagram} from "@fortawesome/free-brands-svg-icons"


export default function Footer() {

    return (
        <div className="footer-bar">
            <FontAwesomeIcon className="github-icon" icon={faSquareGithub} size="2x" />
            <FontAwesomeIcon className="linkedin-icon" icon={faLinkedin} size="2x"/>
            <FontAwesomeIcon className="instagram-icon" icon={faInstagram} size="2x" />
        </div>
    )
}