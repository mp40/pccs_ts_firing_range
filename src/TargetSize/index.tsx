import React from 'react';
import RadioButton from '../components/RadioButton';
import targetSizeHeadings from './data';

import './TargetSize.css';

type Props = {
  targetSize: string;
  handleUpdateStateValue: Function;
};

const TargetSize: React.FC<Props> = ({
  targetSize,
  handleUpdateStateValue
}) => {
  const renderRadioButton = (targetType: string): JSX.Element => {
    return (
      <RadioButton
        component={'targetSize'}
        value={targetType}
        isActive={targetType === targetSize}
        handleUpdateStateValue={handleUpdateStateValue}
      />
    );
  };

  return (
    <div className="targetSizeContainer">
      {renderRadioButton('standing')}
      {renderRadioButton('kneeling')}
      {renderRadioButton('prone')}
      {renderRadioButton('lookOver')}
      {renderRadioButton('fireOver')}
      {renderRadioButton('running')}
      {renderRadioButton('crouch')}
      {renderRadioButton('handsKnees')}
      {renderRadioButton('lowProne')}
    </div>
  );
};

export default TargetSize;
