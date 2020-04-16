import React from 'react';
import useKeyPress from '../hooks/useKeyPress';

const Key = () => {
  const happyPress = useKeyPress('h');
  const sadPress = useKeyPress('s');
  const madPress = useKeyPress('m');

  const style = {
    fontSize: '30vh'
  };

  return (
    <div>
      { happyPress && <span style={style} role="img" aria-label="smile">😊</span> }
      { sadPress && <span style={style} role="img" aria-label="sad">😢</span> }
      { madPress && <span style={style} role="img" aria-label="angry">😠</span> }
    </div>
  );
};

export default Key;
