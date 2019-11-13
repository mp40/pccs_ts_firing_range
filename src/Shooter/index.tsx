import React, { useState } from 'react';

import { m1Carbine, salMod, getRecoilRecoveryValue } from './data';

import './Shooter.css';

const Shooter: React.FC = () => {
  const [level, setLevel] = useState(0);
  const [aims, selectAims] = useState(0);

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
            <div
              className={`aimTimeRow${applySelected(aim)}`}
              key={aim}
              onClick={(): void => selectAims(aim)}
            >
              <span>{aim}</span>
              <span>{getAimTimeMod(index)}</span>
            </div>
          );
        })}
      </div>
    );
  };

  const renderShooterLevel = (): JSX.Element => {
    return (
      <div>
        <form>
          <label>
            Shooter Level:
            <select
              className="selectLevel"
              value={level}
              onChange={(event): void =>
                setLevel(parseInt(event.target.value, 10))
              }
            >
              {[0, 1, 2, 3, 4, 5].map(lvl => {
                return (
                  <option key={lvl} value={lvl}>
                    {lvl}
                  </option>
                );
              })}
            </select>
          </label>
        </form>
      </div>
    );
  };

  return (
    <div className="shooterContainer">
      <div>
        <div>{`Weapon: ${m1Carbine.name}`}</div>
        <div>{`Recoil Recovery: ${getRecoilRecoveryValue(
          m1Carbine.kd,
          level
        )}`}</div>
        {renderShooterLevel()}
      </div>
      {renderAimTime()}
    </div>
  );
};

export default Shooter;
