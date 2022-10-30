import React from "react";
import { useSelector } from "react-redux";

function Player1() {
    const player1 = useSelector((state) => state?.player?.appData?.player1);

  return (
    <div id="player-1-panel" className={player1.isActive ? "active" : ""}>
      <div className="player-name" id="name-1">
        {player1.name}
      </div>
      <div className="player-score" id="score-1">
        {player1.score}
      </div>
      <div className="player-current-box">
        <div className="player-current-label">Current</div>
        <div className="player-current-score" id="current-1">
            {player1.currentScore}
        </div>
      </div>
    </div>
  );
}

export default Player1;
