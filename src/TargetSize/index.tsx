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
        key={targetType}
        component={'targetSize'}
        value={targetType}
        isActive={targetType === targetSize}
        handleUpdateStateValue={handleUpdateStateValue}
      />
    );
  };

  return (
    <div className="targetSizeContainer">
      {Object.keys(targetSizeHeadings).map(heading => {
        return renderRadioButton(heading);
      })}
    </div>
  );
};

export default TargetSize;
