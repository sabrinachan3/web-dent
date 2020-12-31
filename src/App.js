import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// routes redirect
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navigation from './Pages/Navigation';

import Container from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import './App.css';

// import evangelia_face from './Images/evangelia_face.jpg'
// // import MyIcon from './Components/MyIcon.js'
// import MyMap from './Components/MyMap.js'
// import './App.css';
// import OpeningHours from './Components/OpeningHours';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Container fluid className="top-bar-phone">
            <Row>
              <Col>Call now: 450-688-2522</Col>
            </Row>
          </Container>
          <div className="router">
            <Navigation />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
            {/* <Home></Home> */}

            {/*     <img className="profile_pic" src={evangelia_face} alt=""></img>
            <p className="description">Dental clinic located in Laval</p>
            {/* <MyIcon></MyIcon> */}
            {/*  <OpeningHours></OpeningHours>
            <MyMap></MyMap>  */}
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;