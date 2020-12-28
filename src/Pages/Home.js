import React from 'react';
import OpeningHours from '../Components/OpeningHours';
import evangelia_face from '../Images/evangelia_face.jpg'
import MyMap from '../Components/MyMap.js'

function Home() {
    return (
        <div className="Container">
            <h1 className="title">Centre Dentaire Familial Valavanis</h1>
            {/* header */}
            <img className="profile_pic" src={evangelia_face} alt=""></img>
            <p className="description">Dental clinic located in Laval</p>
            {/* <MyIcon></MyIcon> */}
            <OpeningHours></OpeningHours>
            <MyMap></MyMap>
        </div>
    );
}

export default Home;