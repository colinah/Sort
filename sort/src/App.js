import React from 'react';
import Canvas from './Canvas/Canvas';
import classes from './App.scss';

function App() {
  return (
    <div className={classes.App}>
      <Canvas
        color={0}/>
    </div>
  );
}

export default App;
