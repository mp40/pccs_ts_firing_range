import React, { useState } from 'react';

const Stance: React.FC = () => {
  const [stance, setStance] = useState('standing');

  const handleStanceChange = (eventValue: string): void => {
    setStance(eventValue);
  };

  const renderRadioButton = (stanceType: string): JSX.Element => {
    const heading = stanceType.charAt(0).toUpperCase() + stanceType.slice(1);
    return (
      <div className="stanceSelect">
        <label>
          <span>{heading}</span>
          <input
            type="radio"
            value={stanceType}
            checked={stanceType === stance}
            onChange={(event): void => handleStanceChange(event.target.value)}
          />
        </label>
      </div>
    );
  };

  return (
    <div className="stanceContainer">
      <form className="stanceSelectForm">
        {renderRadioButton('standing')}
        {renderRadioButton('kneeling')}
        {renderRadioButton('prone')}
      </form>
    </div>
  );
};

export default Stance;
