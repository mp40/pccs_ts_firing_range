import React, { useState } from 'react';

import './Stance.css';

const Stance: React.FC = () => {
  const [stance, setStance] = useState('standing');
  const [braced, toggleBraced] = useState(false);

  const getBracedClassName = (): string => {
    return braced ? 'toggleBraced active' : 'toggleBraced';
  };

  const getActiveStanceClassName = (name: string): string => {
    return stance === name ? ' active' : '';
  };

  const handleStanceChange = (eventValue: string): void => {
    setStance(eventValue);
  };

  const renderRadioButton = (stanceType: string): JSX.Element => {
    const heading = stanceType.charAt(0).toUpperCase() + stanceType.slice(1);
    return (
      <div className="stanceSelect">
        <button
          type="button"
          className={`toggleStance${getActiveStanceClassName(stanceType)}`}
          onClick={(): void => handleStanceChange(stanceType)}
        >
          <span>{`${heading}:`}</span>
          <span className="stanceCircle">
            <span className="inner"></span>
          </span>
        </button>
      </div>
    );
  };

  return (
    <div className="stanceContainer">
      {renderRadioButton('standing')}
      {renderRadioButton('kneeling')}
      {renderRadioButton('prone')}
      <div className="bracedToggle">
        <button
          type="button"
          className={getBracedClassName()}
          onClick={(): void => toggleBraced(!braced)}
        >
          Braced:
        </button>
      </div>
    </div>
  );
};

export default Stance;
