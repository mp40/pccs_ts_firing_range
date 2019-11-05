import React from 'react';
import Stance from './Stance';
import Situation from './Situation';
import TargetSize from './TargetSize';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">PCCS Firing Range</header>
      <div className="App-body">
        {/* <Stance/> */}
        <Situation />
        {/* <TargetSize /> */}
      </div>
    </div>
  );
};

export default App;
