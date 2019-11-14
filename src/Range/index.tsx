import React, { useState } from 'react';

import rangeTable from './data';

import './Range.css';

const Range: React.FC = () => {
  const [range, setRange] = useState(1);
  const [showRanges, toggleShowRanges] = useState(false);

  const handleRangeUpdate = (rng: number): void => {
    setRange(rng);
    toggleShowRanges(false);
  };

  return (
    <div className="rangeContainer">
      <div className="rangeHeading">{`Current Range: ${range}`}</div>
      <button
        type="button"
        className="toggleSelectRange"
        onClick={(): void => {
          toggleShowRanges(!showRanges);
        }}
      >
        Select Range
      </button>
      <div className="rangeButtonCiontainer">
        {showRanges &&
          Object.keys(rangeTable).map(rng => {
            return (
              <button
                type="button"
                className="rangeButton"
                key={rng}
                value={rng}
                onClick={(): void => handleRangeUpdate(parseInt(rng, 10))}
              >
                {rng}
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default Range;
