import React, { useState, useEffect } from "react";
import "./Cell.css";

const Cell = ({ id, players, name }) => {
  const [hasPlayer, setHasPlayer] = useState({ 0: false, 1: false });

  useEffect(() => {
    setHasPlayer({ 0: false, 1: false });
    for (const [playerId, player] of Object.entries(players)) {
      if (player.pos === id) setHasPlayer((h) => ({ ...h, [playerId]: true }));
    }
  }, [id, players]);

  return (
    <div className={`cell`}>
      <div className="id-container">{name}</div>

      {hasPlayer[1] && (
        <div className="player-1-container">
          <span className="player-circle player-2-bg" />
        </div>
      )}
      {hasPlayer[0] && (
        <div className="player-2-container">
          <span className="player-circle player-1-bg" />
        </div>
      )}
    </div>
  );
};

export default Cell;
