import { hot } from 'react-hot-loader/root';
import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [timer, setTimer] = useState(3);

  const tick = () => {
    if (timer > 0) {
      setTimer(timer - 1);
    }
  };
  useEffect(() => {
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  });
  return (
    <div className="App">
      {timer > 0 ? <div className="App-timer">{timer}</div> : <p>Hi React!</p>}
    </div>
  );
};

export default hot(App);
