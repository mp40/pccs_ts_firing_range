import React, { useState } from 'react';
import Stance from './Stance';
import Situation from './Situation';
import TargetSize from './TargetSize';
import Range from './Range';
import Shooter from './Shooter';

import './App.css';

const App: React.FC = () => {
  const [page, updatePage] = useState(1);
  return (
    <div className="App">
      <header className="App-header">PCCS Firing Range</header>
      <div className="App-body">
        {/* <Situation /> */}
        {/* <TargetSize /> */}
        <Shooter />
        {/* <Range /> */}
        {/* <Stance /> */}
      </div>
    </div>
  );
};

export default App;
