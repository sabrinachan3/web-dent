import evangelia_face from './Images/evangelia_face.jpg'
import MyIcon from './Components/MyIcon.js'
import MyMap from './Components/MyMap.js'
import './App.css';

function App() {
  return (
    <div className="Container">
      <div className="header">
        <h2 className="top-bar-phone">Call now: 450-688-2522</h2>
        <h1 className="title">Centre Dentaire Familial Valavanis</h1>
      </div>  {/* header */}
      
  
        <img className="profile_pic" src={evangelia_face} alt=""></img>
        <p className="description">Dental clinic located in Laval</p>
        <MyIcon></MyIcon>

        <div className="opening_hours">
          <h3 className="opening_hours_header">Opening Hours:</h3>
          <table className="table">
          <tr>
            <td>Monday:</td>
            <td>8:00 - 19:00</td> 
          </tr>
          <tr>
            <td>Tuesday:</td>
            <td>10:00 - 14:00</td> 
          </tr>
          <tr>
            <td>Wednesday:</td>
            <td>8:00 - 19:00</td> 
          </tr>
          <tr>
            <td>Thursday:</td>
            <td>8:00 - 14:00</td> 
          </tr>
          <tr>
            <td>Friday:</td>
            <td>8:00 - 14:00</td> 
          </tr>
          <tr>
            <td>Saturday-Sunday:</td>
            <td>Closed</td> 
          </tr>
          </table>
        </div>
      <MyMap></MyMap>
    </div>
  );
}

export default App;

