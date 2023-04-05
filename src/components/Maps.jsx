import React from 'react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api'

const Maps = ({coordinates}) => {
    console.log(coordinates)
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyDmTmZPHdsCgJ4janeMsYMKyTaJfHogD1E"
    })
    if (isLoaded===false){
        return(
            <p>Loading...</p>
        );
    }
  return (
    <div>
      <GoogleMap
        zoom={10}
        center={{
            lat: coordinates.latitude,
            lng: coordinates.longitude
        }}
        mapContainerStyle={stylez.mapCont}  
      >
      </GoogleMap>
    </div>
  )
}
const stylez = {
    mapCont:{
        height: '400px'
    }
}

export default Maps
