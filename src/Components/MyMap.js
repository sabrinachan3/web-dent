import React from 'react'
import map from '../Images/map.png'

import "./MyMap.css"

function MyIcon() {
    return (
        <a className="map-link" href="https://www.google.com/maps/place/Dr.+Evangelia+Valavanis/
        @45.5380385,-73.760495,16z/data=!4m5!3m4!1s0x4cc92305ef6e1dfd:0x5205598bfb533fd4!8m2!3d45.538137!4d-73.7580066?hl=en">
            <img className="map" src={map} alt=""></img>
       </a>
    );
}

export default MyIcon;