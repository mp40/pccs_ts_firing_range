import React from 'react';
import Stance from './Stance';
import TargetSize from './TargetSize';

import './App.css';

const App: React.FC = () => {

  return (
    <div className="App">
      <header className="App-header">PCCS Firing Range</header>
      <div className="App-body">
        <div>Content</div>
          {/* <Stance/> */}
          <TargetSize />
        </div>
    </div>
  );
};

export default App;
