import React, { useState } from 'react';

import rangeTable from './data';

import './Range.css';

type Props = {
  range: number;
  handleUpdateStateValue: Function;
};

const Range: React.FC<Props> = ({ range, handleUpdateStateValue }) => {
  const [showRanges, toggleShowRanges] = useState(false);

  const handleRangeUpdate = (rng: number): void => {
    handleUpdateStateValue('range', rng);
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
          Object.keys(rangeTable).map((rng) => {
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
