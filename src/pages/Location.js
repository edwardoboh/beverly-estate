import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';


function Location() {

    const {isLoaded} = useLoadScript({
      googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY

    })
  
    if(!isLoaded) return<div>Loading...</div>
    return (
      <div>
   <Map />
      </div>
    );
  
  }
  
  const center = {lat: 34.0, lng: -118.3}
  
  function Map(){
  
    return (
  <GoogleMap zoom={10}
              center={center}
              mapContainerClassName="map-container"
  >
  
        <Marker position={{lat: 34.0, lng:-118.3}} />
        <Marker position={{lat: 34.0, lng:-118.1}} />
        <Marker position={{lat: 34.0434, lng:-118.4}} />
        <Marker position={{lat: 34.12, lng:-118.4}} />
        <Marker position={{lat: 34.0333, lng:-118.535}} />
        <Marker position={{lat: 34.142, lng:-118.2442}} />
        <Marker position={{lat: 34.4545, lng:-118.2131}} />
        <Marker position={{lat: 34.0776, lng:-118.44546}} />
        <Marker position={{lat: 34.534540, lng:-118.49079096}} />
        <Marker position={{lat: 34.057577, lng:-118.49696}} />
        <Marker position={{lat: 34.0424, lng:-118.22334}} />
        <Marker position={{lat: 34.0564, lng:-118.3988585}} />
        <Marker position={{lat: 34.0121212, lng:-118.1232}} />
        <Marker position={{lat: 34.078, lng:-118.34515}} />
        <Marker position={{lat: 34.07557, lng:-118.400}} />


  </GoogleMap>
      )
  }
  
  export default Location;