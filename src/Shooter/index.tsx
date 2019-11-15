/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { m1Carbine, salMod, getRecoilRecoveryValue } from './data';

import './Shooter.css';

type Props = {
  level: number;
  aims: number;
  handleUpdateStateValue: Function;
};

const Shooter: React.FC<Props> = ({ level, aims, handleUpdateStateValue }) => {
  const [showLevels, toggleShowLevels] = useState(false);
  const [showAims, toggleShowAims] = useState(false);

  const handleSetLevel = (lvl: number): void => {
    handleUpdateStateValue('level', lvl);
    toggleShowLevels(false);
  };

  const handleSetAim = (aimCount: number): void => {
    handleUpdateStateValue('aims', aimCount);
    toggleShowAims(false);
  };

  const handleToggleLevels = (): void => {
    if (showAims) {
      return;
    }
    toggleShowLevels(!showLevels);
  };

  const handleToggleAims = (): void => {
    if (showLevels) {
      return;
    }
    toggleShowAims(!showAims);
  };

  const getClassName = (button: string): string => {
    if (button === 'level' && showAims) {
      return 'shooterButton disabled';
    }
    if (button === 'aim' && showLevels) {
      return 'shooterButton disabled';
    }
    return 'shooterButton';
  };

  const getAimTimeMod = (index: number): number => {
    return m1Carbine.aim.mod[index] + salMod[level];
  };

  const applySelected = (aim: number): string => {
    return aim === aims ? ' selected' : '';
  };

  const renderAimTime = (): JSX.Element => {
    return (
      <div className="aimTime">
        <div>Select Aim Time</div>
        {m1Carbine.aim.ac.map((aim, index) => {
          return (
            <div className={`aimTimeRow${applySelected(aim)}`} key={aim}>
              <span>{aim}</span>
              <span>{getAimTimeMod(index)}</span>
            </div>
          );
        })}
      </div>
    );
  };

  const renderToggleButton = (typeName: string): JSX.Element => {
    const handleToggle =
      typeName === 'level' ? handleToggleLevels : handleToggleAims;
    return (
      <button
        type="button"
        className={`${getClassName(typeName)} ${typeName}Button`}
        onClick={(): void => {
          handleToggle();
        }}
      >
        {`Select ${typeName.charAt(0).toUpperCase() + typeName.slice(1)}`}
      </button>
    );
  };

  const renderSelectionButton = (value: number, type: string): JSX.Element => {
    const handleSet = type === 'level' ? handleSetLevel : handleSetAim;

    return (
      <button
        key={value}
        className={`${type}Btns`}
        onClick={(): void => handleSet(value)}
      >
        {value}
      </button>
    );
  };

  return (
    <div className="shooterContainer">
      <div className="shooterDetailsContainer">
        <div className="shooterDetails">
          <div>{`Weapon: ${m1Carbine.name}`}</div>
          <div>{`Recoil Recovery: ${getRecoilRecoveryValue(
            m1Carbine.kd,
            level
          )}`}</div>
          <div>{`Shooter Level: ${level}`}</div>
          {renderToggleButton('level')}
          {renderToggleButton('aim')}
        </div>
        {renderAimTime()}
      </div>

      <div className="selectPanel">
        {showLevels &&
          [0, 1, 2, 3, 4, 5].map(lvl => {
            return renderSelectionButton(lvl, 'level');
          })}
        {showAims &&
          m1Carbine.aim.ac.map(aimCount => {
            return renderSelectionButton(aimCount, 'aim');
          })}
      </div>
    </div>
  );
};

export default Shooter;
