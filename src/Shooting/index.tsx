import React from 'react';

import oddsOfHittingTable from './data';

import './Shooting.css';

type Props = {
  levelAndAimTimeModifier: number;
  rangeModifier: number;
  stanceModifier: number;
  situationModifier: number;
  targetModifier: number;
};

const Shooting: React.FC<Props> = ({
  levelAndAimTimeModifier,
  rangeModifier,
  stanceModifier,
  situationModifier,
  targetModifier,
}) => {
  const getTotalModifier = (): string => {
    const total =
      levelAndAimTimeModifier +
      rangeModifier +
      stanceModifier +
      situationModifier +
      targetModifier;

    if (total > 28) {
      return '99% or less';
    }

    if (total === -2) {
      return '0%';
    }

    if (total < -2) {
      return 'Auto Miss';
    }

    return `${oddsOfHittingTable[total]}% or less`;
  };
  return (
    <div className="shootingContainer">
      <div className="shootingRow">
        <span>Level and Aims Mod:</span>
        <span>{levelAndAimTimeModifier}</span>
      </div>
      <div className="shootingRow">
        <span>Range Mod:</span>
        <span>{rangeModifier}</span>
      </div>
      <div className="shootingRow">
        <span>Stance Mod:</span>
        <span>{stanceModifier}</span>
      </div>
      <div className="shootingRow">
        <span>Situation Mod:</span>
        <span>{situationModifier}</span>
      </div>
      <div className="shootingRow">
        <span>Target Size Mod:</span>
        <span>{targetModifier}</span>
      </div>
      <div className="result">
        <span>Odds Of Hitting:</span>
        <span>{getTotalModifier()}</span>
      </div>
    </div>
  );
};

export default Shooting;
