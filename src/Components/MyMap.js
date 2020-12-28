import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
        //  bootstrapURLKeys={{ key: https://www.google.com/maps/place/Dr.+Evangelia+Valavanis/@45.538137,-73.7580066,15z/data=!4m2!3m1!1s0x0:0x5205598bfb533fd4?sa=X&hl=en&ved=2ahUKEwiWzI_4vO_tAhVET98KHZgGDhQQ_BIwCnoECBYQBQ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;