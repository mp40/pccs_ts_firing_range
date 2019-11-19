import React, { useState } from 'react';

import situationModifiers from './data';

import './Situation.css';

type Props = {
  hipFire: boolean;
  rifleOneHand: boolean;
  pistolOneHand: boolean;
  foldedStock: boolean;
  bipodNotBraced: boolean;
  bipodMount: boolean;
  handleUpdateStateValue: Function;
};

const Situation: React.FC<Props> = ({
  hipFire,
  rifleOneHand,
  pistolOneHand,
  foldedStock,
  bipodNotBraced,
  bipodMount,
  handleUpdateStateValue
}) => {
  const renderLabel = (name: string, stateValue: boolean): JSX.Element => {
    return (
      <div className="situationToggle">
        <button
          type="button"
          className={`${name} toggleSituation ${
            stateValue === true ? 'active' : ''
          }`}
          onClick={(): void => handleUpdateStateValue(name, !stateValue)}
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
      {renderLabel('hipFire', hipFire)}
      {renderLabel('rifleOneHand', rifleOneHand)}
      {renderLabel('pistolOneHand', pistolOneHand)}
      {renderLabel('foldedStock', foldedStock)}
      {renderLabel('bipodNotBraced', bipodNotBraced)}
      {renderLabel('bipodMount', bipodMount)}
    </div>
  );
};

export default Situation;
