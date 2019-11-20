import React from 'react';

import RadioButton from '../components/RadioButton';

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

  const renderRadioButton = (stanceType: string): JSX.Element => {
    return (
      <RadioButton
        component={'stance'}
        value={stanceType}
        isActive={stanceType === stance}
        handleUpdateStateValue={handleUpdateStateValue}
      />
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
          <span className="buttonName">Braced</span>
          <span className="checkbox">
            <span className="inner" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Stance;
