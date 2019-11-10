import React, { useState } from 'react';

import situationModifiers from './data';

const Situation: React.FC = () => {
  const [hipFire, toggleHipFire] = useState(false);
  const [rifleOneHand, toggleRifleOneHand] = useState(false);
  const [pistolOneHand, togglePistolOneHand] = useState(false);
  const [foldedStock, toggleFoldedStock] = useState(false);
  const [bipodNotBraced, toggleBipodNotBraced] = useState(false);
  const [bipodMount, toggleBipodMount] = useState(false);

  const renderLabel = (
    name: string,
    stateValue: boolean,
    toggleValue: Function
  ): JSX.Element => {
    return (
      <div>
        <label className={name}>
          <span>{situationModifiers[name].heading}</span>
          <input
            type="checkbox"
            checked={stateValue}
            onChange={(): void => toggleValue(!stateValue)}
          />
        </label>
      </div>
    );
  };

  return (
    <div className="situationContainer">
      <form className="situationSelectForm">
        <div className="situationToggle">
          {renderLabel('hipFire', hipFire, toggleHipFire)}
          {renderLabel('rifleOneHand', rifleOneHand, toggleRifleOneHand)}
          {renderLabel('pistolOneHand', pistolOneHand, togglePistolOneHand)}
          {renderLabel('foldedStock', foldedStock, toggleFoldedStock)}
          {renderLabel('bipodNotBraced', bipodNotBraced, toggleBipodNotBraced)}
          {renderLabel('bipodMount', bipodMount, toggleBipodMount)}
        </div>
      </form>
    </div>
  );
};

export default Situation;
