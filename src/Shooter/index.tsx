import React, { useState } from 'react';

import m1Carbine from './data';

const Shooter: React.FC = () => {
  const [level, setLevel] = useState(0);

  return (
    <div>
      <div>{`Weapon: ${m1Carbine.name}`}</div>
      <div>
        <form>
          <label>
            Shooter Level:
            <select
              className="selectLevel"
              value={level}
              onChange={(event): void =>
                setLevel(parseInt(event.target.value, 10))
              }
            >
              {[0, 1, 2, 3, 4, 5].map(lvl => {
                return (
                  <option key={lvl} value={lvl}>
                    {lvl}
                  </option>
                );
              })}
            </select>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Shooter;
