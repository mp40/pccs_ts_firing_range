import React, { useState } from 'react';
import targetSizeHeadings from './data';

type Props = {
  targetSize: string;
  handleUpdateStateValue: Function;
};

const TargetSize: React.FC<Props> = ({
  targetSize,
  handleUpdateStateValue
}) => {
  const getActiveTargetClassName = (name: string): string => {
    return targetSize === name ? ' active' : '';
  };

  const renderRadioButton = (targetType: string): JSX.Element => {
    return (
      <div className="selectTargetSize">
        <button
          type="button"
          className={`toggleSize${getActiveTargetClassName(targetType)}`}
          onClick={(): void => handleUpdateStateValue('targetSize', targetType)}
        >
          <span>{targetSizeHeadings[targetType]}</span>
          <span className="stanceCircle">
            <span className="inner"></span>
          </span>
        </button>
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
