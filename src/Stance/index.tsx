import React from 'react';

import RadioButton from '../components/RadioButton';
import CheckBox from '../components/CheckBox';

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
      <CheckBox
        component={'braced'}
        value={'braced'}
        isActive={braced}
        handleUpdateStateValue={handleUpdateStateValue}
      />
    </div>
  );
};

export default Stance;
