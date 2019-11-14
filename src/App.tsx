import React, { useState } from 'react';
import Stance from './Stance';
import Situation from './Situation';
import TargetSize from './TargetSize';
import Range from './Range';
import Shooter from './Shooter';
import Shooting from './Shooting';

import './App.css';

const App: React.FC = () => {
  const [page, updatePage] = useState(1);
  const handleUpadePage = (value: number): void => {
    updatePage(page + value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <button
          type="button"
          className="navBtn prevPage"
          onClick={(): void => handleUpadePage(-1)}
        >
          Prev
        </button>
        <div>PCCS Firing Range</div>
        <button
          type="button"
          className="navBtn nextPage"
          onClick={(): void => handleUpadePage(1)}
        >
          Next
        </button>
      </header>
      <div className="App-body">
        {page === 1 && <Shooter />}
        {page === 2 && <Range />}
        {page === 3 && <Stance />}
        {page === 4 && <Situation />}
        {page === 5 && <TargetSize />}
        {page === 6 && <Shooting />}
      </div>
    </div>
  );
};

export default App;
