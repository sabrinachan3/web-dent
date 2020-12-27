import profile_pic from './Images/profile_pic.JPG'
import MyIcon from './Components/MyIcon.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="title">Sabrina Chan</header>
      <img className="profile_pic" src={profile_pic} alt=""></img>
      <p className="description">I am building my first website!!!</p>
      <MyIcon></MyIcon>
    </div>
  );
}

export default App;

