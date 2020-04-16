import React from 'react';

const useLocationData = () => {
  const [coords, setCoords] = React.useState({ lat: 0, lon: 0 });

  React.useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((navInfo) => {
      setCoords({ lat: navInfo.coords.latitude, lon: navInfo.coords.longitude });    
    });
  }, []);

  return coords;
};

export default useLocationData;
