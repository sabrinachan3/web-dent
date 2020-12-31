import React from 'react';
import OpeningHours from '../Components/OpeningHours';
import evangelia_face from '../Images/evangelia_face.jpg'
import MyMap from '../Components/MyMap.js'
import Container from 'react-bootstrap/Container'

function Home() {
    return (
        <Container className="Home">
            <h1 className="title">Centre Dentaire Familial Valavanis</h1>
            {/* header */}
            <img className="profile_pic" src={evangelia_face} alt=""></img>
            <p className="description">Dental clinic located in Laval</p>
            {/* <MyIcon></MyIcon> */}
            <OpeningHours></OpeningHours>
            <MyMap></MyMap>
        </Container>
    );
}

export default Home;