import React, { useState } from 'react';

import rangeTable from './data';

const Range: React.FC = () => {
  const [range, setRange] = useState(1);

  return (
    <div className="rangeContainer">
      <form>
        <label>
          <div>Select Range</div>
          <select
            className="rangeDropdown"
            value={range}
            onChange={(event): void =>
              setRange(parseInt(event.target.value, 10))
            }
          >
            {Object.keys(rangeTable).map(rng => {
              return (
                <option key={rng} value={rng}>
                  {rng}
                </option>
              );
            })}
          </select>
        </label>
      </form>
    </div>
  );
};

export default Range;
