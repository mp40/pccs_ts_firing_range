import React from 'react';

import CheckBox from '../components/CheckBox';

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
  handleUpdateStateValue,
}) => {
  const renderCheckBox = (name: string, stateValue: boolean): JSX.Element => {
    return (
      <CheckBox
        key={name}
        component={'situation'}
        value={name}
        isActive={stateValue}
        handleUpdateStateValue={handleUpdateStateValue}
      />
    );
  };

  return (
    <div className="situationContainer">
      {renderCheckBox('hipFire', hipFire)}
      {renderCheckBox('rifleOneHand', rifleOneHand)}
      {renderCheckBox('pistolOneHand', pistolOneHand)}
      {renderCheckBox('foldedStock', foldedStock)}
      {renderCheckBox('bipodNotBraced', bipodNotBraced)}
      {renderCheckBox('bipodMount', bipodMount)}
    </div>
  );
};

export default Situation;
