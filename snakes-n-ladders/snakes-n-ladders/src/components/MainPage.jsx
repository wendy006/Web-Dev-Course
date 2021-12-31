import React, { useState, useEffect } from "react";
import "./MainPage.css";

import Cell from "./Cell.jsx";
import getSnakesAndLadders from "../data/getSnakesAndLadders";

const rand_sliding_numbers = Array.from({ length: 50 }, () =>
  Math.floor(Math.random() * 6 + 1)
);

const MainPage = () => {
  const [players, setPlayers] = useState({
    0: { pos: 1 },
    1: { pos: 1 },
  });

  const [turn, setTurn] = useState(0);
  const [lastTurn, setLastTurn] = useState(0);
  const [diceVal, setDiceVal] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [winner, setWinner] = useState(-1);

  const snakesAndLadders = getSnakesAndLadders();

  useEffect(() => {}, [turn]); // Only re-run the effect if count changes

  const movePlayer = async (playerId, dst) => {
    // need to check for overshooting
    let new_pos = dst > 100 ? 100 - (dst % 100) : dst;

    setPlayers((p) => ({ ...p, [playerId]: { ...p[playerId], pos: new_pos } }));

    const isCellHasASnakeOrALadder = snakesAndLadders.find(
      (cell) => cell.fromRow === new_pos
    );
    if (isCellHasASnakeOrALadder) {
      new_pos = isCellHasASnakeOrALadder.toRow;
      await new Promise((r) => setTimeout(r, 500)); //Timeout for prettier moving animation
      setPlayers((p) => ({
        ...p,
        [playerId]: { ...p[playerId], pos: new_pos },
      }));
    }
    if (new_pos === 100)
      // win condition
      setWinner(playerId);
  };

  const rollDice = async () => {
    if (spinning) return;

    setLastTurn(turn);

    let val = Math.floor(Math.random() * 6) + 1;
    setDiceVal(val);
    // extra turn
    if (val !== 6) setTurn(turn === 0 ? 1 : 0);

    // Use timeout to set spinner flags
    setSpinning(true);
    await new Promise((r) => setTimeout(r, 500));
    setSpinning(false);

    movePlayer(turn, players[turn].pos + val);
  };

  const resetGame = () => {
    setPlayers({
      0: { pos: 1 },
      1: { pos: 1 },
    });
    setWinner(-1);
    setDiceVal(0);
  };

  /*  used to copy the pattern of the Snakes And Ladders board
    returns values in left to right order for odd rows and right to left order for even rows
    */
  const getRowNum = (i) =>
    Math.floor(i / 10) % 2 !== 0
      ? Math.floor((100 - i - 1) / 10) * 10 + (i % 10) + 1
      : Math.floor((100 - i - 1) / 10) * 10 + 10 - (i % 10);

  return (
    <div className="MainPage">
      <div className="board">
        {[...Array(100)].map((x, i) => {
          const rowNum = getRowNum(i);
          const isCellHasASnakeOrALadder = snakesAndLadders.find(
            (cell) => cell.fromRow === rowNum
          );
          const name = isCellHasASnakeOrALadder?.name || rowNum;
          return <Cell key={i} id={rowNum} players={players} name={name} />;
        })}
      </div>
      <div className="sidebar">
        <div className={"dice-msg-container"}>
          {diceVal === 0 && <div>Player 1 Turn</div>}
          {diceVal !== 0 && (
            <div>
              Player {lastTurn + 1} <br />
              Rolled:
            </div>
          )}

          {!spinning && (
            <div
              className={`dice-val-res player-${lastTurn + 1}-text ${
                !diceVal ? "first-turn" : ""
              }`}
            >
              {diceVal}
            </div>
          )}
          {spinning && (
            <div className="dice-val-container">
              <div className="dice-val">{rand_sliding_numbers.join("")}</div>
            </div>
          )}
        </div>

        {winner !== -1 && ( // has winner
          <div className={`win-msg-container player-${winner + 1}-text`}>
            Player {winner + 1} wins! 👑
          </div>
        )}

        {winner === -1 && ( // no winner
          <button className="roll-dice-btn btn-big" onClick={rollDice}>
            ROLL🎲
          </button>
        )}

        {winner !== -1 && ( // has winner
          <button className="play-again-btn btn-big" onClick={resetGame}>
            Play Again
          </button>
        )}
      </div>
    </div>
  );
};

export default MainPage;
