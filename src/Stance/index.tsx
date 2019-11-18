import React from 'react';

import './Stance.css';

type Props = {
  stance: string;
  braced: boolean;
  handleUpdateStateValue: Function;
};

const Stance: React.FC<Props> = ({
  stance,
  braced,
  handleUpdateStateValue
}) => {
  const getBracedClassName = (): string => {
    return braced ? 'toggleBraced active' : 'toggleBraced';
  };

  const getActiveStanceClassName = (name: string): string => {
    return stance === name ? ' active' : '';
  };

  const renderRadioButton = (stanceType: string): JSX.Element => {
    const heading = stanceType.charAt(0).toUpperCase() + stanceType.slice(1);
    return (
      <div className="stanceSelect">
        <button
          type="button"
          className={`toggleStance${getActiveStanceClassName(stanceType)}`}
          onClick={(): void => handleUpdateStateValue('stance', stanceType)}
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
          onClick={(): void => handleUpdateStateValue('braced', !braced)}
        >
          Braced:
        </button>
      </div>
    </div>
  );
};

export default Stance;
