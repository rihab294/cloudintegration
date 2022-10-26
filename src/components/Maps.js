import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 36.7147351,
      lng: 10.1942812
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '50vh', width: '50%', margin: '50px auto' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBHEFGL1gZwueF9CSlf3zL-8WyUdUGkoTU" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
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

