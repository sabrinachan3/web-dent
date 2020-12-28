import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// routes redirect
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navigation from './Pages/Navigation';

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
          <div className="header">
            <h2 className="top-bar-phone">Call now: 450-688-2522</h2>
            {/* <h1 className="title">Centre Dentaire Familial Valavanis</h1> */}
          </div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>

          {/*     <img className="profile_pic" src={evangelia_face} alt=""></img>
            <p className="description">Dental clinic located in Laval</p>
            {/* <MyIcon></MyIcon> */}
          {/*  <OpeningHours></OpeningHours>
            <MyMap></MyMap>  */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;