import React from 'react';
import Stance from './Stance'
import './App.css';

const App: React.FC = () => {

  return (
    <div className="App">
      <header className="App-header">PCCS Firing Range</header>
      <div className="App-body">
        <div>Content</div>
          <Stance/>
        </div>
    </div>
  );
};

export default App;
