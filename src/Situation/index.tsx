import React, { useState } from 'react';

const Situation: React.FC = () => {
  const [hipFire, toggleHipFire] = useState(false);

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
        </div>
      </form>
    </div>
  );
};

export default Situation;
