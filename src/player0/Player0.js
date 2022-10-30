import React from "react";
import { useSelector } from "react-redux";

function Player0() {
    const player0 = useSelector((state) => state?.player?.appData?.player0);

  return (
    <div id="player-0-panel" className={player0.isActive ? "active" : ""}>
      <div className="player-name" id="name-0">
        {player0.name}
      </div>
      <div className="player-score" id="score-0">
        {player0.score}
      </div>
      <div className="player-current-box">
        <div className="player-current-label">Current</div>
        <div className="player-current-score" id="current-0">
            {player0.currentScore}
        </div>
      </div>
    </div>
  );
}

export default Player0;