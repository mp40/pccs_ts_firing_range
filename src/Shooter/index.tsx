import React, { useState } from 'react';

import { m1Carbine, salMod, getRecoilRecoveryValue } from './data';

import './Shooter.css';

const Shooter: React.FC = () => {
  const [level, setLevel] = useState(0);
  const [aims, selectAims] = useState(1);
  const [showLevels, toggleShowLevels] = useState(false);
  const [showAims, toggleShowAims] = useState(false);

  const handleSetLevel = (lvl: number): void => {
    setLevel(lvl);
    toggleShowLevels(false);
  };

  const handleSetAim = (aimCount: number): void => {
    selectAims(aimCount);
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
          <button
            type="button"
            className={`${getClassName('level')} levelButton`}
            onClick={(): void => {
              handleToggleLevels();
            }}
          >
            Select Level
          </button>
          <button
            type="button"
            className={`${getClassName('aim')} aimButton`}
            onClick={(): void => {
              handleToggleAims();
            }}
          >
            Select Aims
          </button>
        </div>
        {renderAimTime()}
      </div>

      <div className="selectPanel">
        {showLevels &&
          [0, 1, 2, 3, 4, 5].map(lvl => {
            return (
              <button
                key={lvl}
                className="levelBtns"
                onClick={(): void => handleSetLevel(lvl)}
              >
                {lvl}
              </button>
            );
          })}
        {showAims &&
          m1Carbine.aim.ac.map(aimCount => {
            return (
              <button
                key={aimCount}
                className="aimBtns"
                onClick={(): void => handleSetAim(aimCount)}
              >
                {aimCount}
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default Shooter;
