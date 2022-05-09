import "./Game.css";
import { useEffect, useState } from "react";
import { handleClick } from "./gameLogic";
import { winnerLogic } from "./winnerLogic";
import { v4 as uuidv4 } from "uuid";

const Game = ({ setWinner, setRedPoint, setBluePoint }) => {
  const [state, setState] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState(true);
  const [gameIsOn, setGameIsOn] = useState(true);

  useEffect(
    () =>
      winnerLogic(
        state,
        turn,
        setWinner,
        setGameIsOn,
        setRedPoint,
        setBluePoint
      ),
    [state]
  );

  const resetHandler = (event) => {
    setState(Array(9).fill(""));
    setTurn(true);
    setGameIsOn(true);
    setWinner(null);
  };

  const styleHandler = (index) => {
    const item = state[index];

    if (item === "") {
      return "#323031";
    } else if (item === true) {
      return "#41D3BD";
    } else if (item === false) {
      return "#D90429";
    }
  };

  return (
    <div className="game">
      {state.map((item, index) => {
        return (
          <div
            key={index}
            className={index}
            id={`item${index}`}
            onClick={
              gameIsOn
                ? (event) => {
                    handleClick(event, state, setState, turn, setTurn);
                  }
                : () => {
                    return;
                  }
            }
          >
            <span
              className={`divSpan ${item === "" ? "" : "active"}`}
              style={{
                backgroundColor: styleHandler(index),
              }}
            ></span>
          </div>
        );
      })}
      <button onClick={(event) => resetHandler(event)}>Clear</button>
    </div>
  );
};

export default Game;
