import React, { useState } from 'react';

import situationModifiers from './data';

import './Situation.css';

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
      <div className="situationToggle">
        <button
          type="button"
          className={`${name} toggleSituation ${
            stateValue === true ? 'active' : ''
          }`}
          onClick={(): void => toggleValue(!stateValue)}
        >
          <span className="buttonName">{situationModifiers[name].heading}</span>
          <span className="checkbox">
            <span className="inner" />
          </span>
        </button>
      </div>
    );
  };

  return (
    <div className="situationContainer">
      {renderLabel('hipFire', hipFire, toggleHipFire)}
      {renderLabel('rifleOneHand', rifleOneHand, toggleRifleOneHand)}
      {renderLabel('pistolOneHand', pistolOneHand, togglePistolOneHand)}
      {renderLabel('foldedStock', foldedStock, toggleFoldedStock)}
      {renderLabel('bipodNotBraced', bipodNotBraced, toggleBipodNotBraced)}
      {renderLabel('bipodMount', bipodMount, toggleBipodMount)}
    </div>
  );
};

export default Situation;
