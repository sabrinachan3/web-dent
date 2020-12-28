import profile_pic from './Images/profile_pic.JPG'
import MyIcon from './Components/MyIcon.js'
import Nav from 'react-bootstrap/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="title">Sabrina Chan</header>
      <img className="profile_pic" src={profile_pic} alt=""></img>
      <p className="description">I am building my first website!!!</p>
      <MyIcon></MyIcon>
      <div className= "navigation">
        <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">tab 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">tab 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled> Disabled</Nav.Link>
        </Nav.Item>
      </Nav></div>
      <Nav className="justify-content-center" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Active</Nav.Link>
    </Nav.Item>  <Nav.Item>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
    </Nav.Item>
   
    <Nav.Item>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item>
  </Nav>

    </div>
  );
}

export default App;

