import React, { useState } from 'react';
import targetSizeHeadings from './data';

const TargetSize: React.FC = () => {
  const [targetSize, setTargetSize] = useState('standing');

  const handleTargetSizeChange = (eventValue: string): void => {
    setTargetSize(eventValue);
  };

  const renderRadioButton = (targetType: string): JSX.Element => {
    return (
      <div className="selectTargetSize">
        <label>
          <span>{targetSizeHeadings[targetType]}</span>
          <input
            type="radio"
            value={targetType}
            checked={targetType === targetSize}
            onChange={(event): void =>
              handleTargetSizeChange(event.target.value)
            }
          />
        </label>
      </div>
    );
  };

  return (
    <div className="targetSizeContainer">
      <form className="targetSizeSelectForm">
        {renderRadioButton('standing')}
        {renderRadioButton('kneeling')}
        {renderRadioButton('prone')}
        {renderRadioButton('lookOver')}
        {renderRadioButton('fireOver')}
        {renderRadioButton('running')}
        {renderRadioButton('crouch')}
        {renderRadioButton('handsKnees')}
        {renderRadioButton('lowProne')}
      </form>
    </div>
  );
};

export default TargetSize;
