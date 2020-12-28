import React from 'react'

function OpeningHours() {
    return (
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
    );
}

export default OpeningHours;