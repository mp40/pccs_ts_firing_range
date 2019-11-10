import React from 'react';
import Stance from './Stance';
import Situation from './Situation';
import TargetSize from './TargetSize';
import Range from './Range';
import Shooter from './Shooter';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">PCCS Firing Range</header>
      <div className="App-body">
        {/* <Stance /> */}
        {/* <Situation /> */}
        {/* <TargetSize /> */}
        {/* {<Range />} */}
        <Shooter />
      </div>
    </div>
  );
};

export default App;
