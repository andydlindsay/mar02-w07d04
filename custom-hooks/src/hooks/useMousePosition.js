import React from 'react';

const useMousePosition = () => {
  const [coords, setCoords] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      const x = event.clientX;
      const y = event.clientY;
      setCoords({ x, y });
    });
  }, []);

  return coords;
};

export default useMousePosition;
