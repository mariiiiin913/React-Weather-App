import React, { useState } from 'react';

  export default function CurrentLocationButton(){
  const [status, setStatus] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }
    return(<div className="col-2">
    <input class="btn btn btn-outline-warning location" type="button" 
    value=" 📍" onClick={getLocation}/>
    <p>{status}</p>

    </div>
    );
}
