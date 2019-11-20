import React from 'react';

import getButtonHeading from './data';

import './CheckBox.css';

type Props = {
  component: string;
  value: string;
  isActive: boolean;
  handleUpdateStateValue: Function;
};

const CheckBox: React.FC<Props> = ({
  component,
  value,
  isActive,
  handleUpdateStateValue
}) => {
  const getButtonClassName = (): string => {
    const name = component === 'braced' ? 'toggleBraced' : 'toggleSize';
    return isActive ? name + ' active' : name;
  };

  return (
    <div className={`${component}Toggle`}>
      <button
        type="button"
        className={`${getButtonClassName()} buttonCheckBox ${value}`}
        onClick={(): void => handleUpdateStateValue(value, !isActive)}
      >
        <span className="buttonName">{getButtonHeading(component, value)}</span>
        <span className="checkbox">
          <span className="inner" />
        </span>
      </button>
    </div>
  );
};

export default CheckBox;
