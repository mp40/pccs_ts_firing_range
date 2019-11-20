import React from 'react';

import getButtonHeading from './data';

import './RadioButton.css';

type Props = {
  component: string;
  value: string;
  isActive: boolean;
  handleUpdateStateValue: Function;
};

const RadioButton: React.FC<Props> = ({
  component,
  value,
  isActive,
  handleUpdateStateValue
}) => {
  const getClassName = (): string => {
    return component === 'stance' ? 'stanceSelect' : 'selectTargetSize';
  };

  const getButtonClassName = (): string => {
    const name = component === 'stance' ? 'toggleStance' : 'toggleSize';
    return isActive ? name + ' active' : name;
  };

  return (
    <div className={getClassName()}>
      <button
        type="button"
        className={`${getButtonClassName()} radioButton`}
        onClick={(): void => handleUpdateStateValue(component, value)}
      >
        <span className="buttonName">{getButtonHeading(component, value)}</span>
        <span className="outerCircle">
          <span className="inner"></span>
        </span>
      </button>
    </div>
  );
};

export default RadioButton;
