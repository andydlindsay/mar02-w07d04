import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import useMousePosition from '../hooks/useMousePosition';

const Title = () => {
  const coords = useMousePosition();
  useDocumentTitle(`Mouse is at ${coords.x}, ${coords.y}`);

  return (
    <div>
      <h2>Document Title</h2>
    </div>
  );
};

export default Title;
