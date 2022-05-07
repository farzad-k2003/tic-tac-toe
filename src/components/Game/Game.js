import "./Game.css";
import { useEffect, useState } from "react";
import { handleClick } from "./gameLogic";
import { winnerLogic } from "./winnerLogic";

let myState = ["", "", "", "", "", "", "", "", ""];

const Game = ({ setWinner, setRedPoint, setBluePoint }) => {
  const [state, setState] = useState(myState);
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
    setState(myState);
    setTurn(true);
    setGameIsOn(true);
    setWinner(null);
    const parent = event.target.parentNode;
    const siblings = [].slice.call(parent.children).filter(function (child) {
      return child !== event.target;
    });
    siblings.forEach((item) => {
      item.style.backgroundColor = "#323031";
    });
  };

  return (
    <div className="game">
      {state.map((item, index) => {
        return (
          <div
            className={index}
            id={`item${index}`}
            style={{ backgroundColor: "#323031" }}
            onClick={
              gameIsOn
                ? (event) => {
                    handleClick(event, state, setState, turn, setTurn);
                  }
                : () => {
                    return;
                  }
            }
          ></div>
        );
      })}
      <button onClick={(event) => resetHandler(event)}>Clear</button>
    </div>
  );
};

export default Game;
