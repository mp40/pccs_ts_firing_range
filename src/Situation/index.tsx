import React, { useState } from 'react';

const Situation: React.FC = () => {
  const [hipFire, toggleHipFire] = useState(false);
  const [rifleOneHand, toggleRifleOneHand] = useState(false);
  const [pistolOneHand, togglePistolOneHand] = useState(false);
  const [foldedStock, toggleFoldedStock] = useState(false);

  return (
    <div className="situationContainer">
      <form className="situationSelectForm">
        <div className="situationToggle">
          <label className="hipFire">
            <span>Hip Fire</span>
            <input
              type="checkbox"
              checked={hipFire}
              onChange={(): void => toggleHipFire(!hipFire)}
            />
          </label>
          <label className="rifleOneHand">
            <span>Firing Rifle One Handed</span>
            <input
              type="checkbox"
              checked={rifleOneHand}
              onChange={(): void => toggleRifleOneHand(!rifleOneHand)}
            />
          </label>
          <label className="pistolOneHand">
            <span>Firing Pistol One Handed</span>
            <input
              type="checkbox"
              checked={pistolOneHand}
              onChange={(): void => togglePistolOneHand(!pistolOneHand)}
            />
          </label>
          <label className="foldedStock">
            <span>Firing Pistol One Handed</span>
            <input
              type="checkbox"
              checked={foldedStock}
              onChange={(): void => toggleFoldedStock(!foldedStock)}
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default Situation;
