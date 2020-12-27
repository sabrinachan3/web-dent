import React from 'react'
import linkedin from '../Images/linkedin.png'

import "./MyIcon.css"

function MyIcon() {
    return (
        <a className="icon-link" href="https://www.linkedin.com/in/sabrina-chan/">
            <img className="linkedin" src={linkedin} alt=""></img>
       </a>
    );
}

export default MyIcon;