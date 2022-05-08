import "./Main.css";
import { useState } from "react";
import Game from "../Game/Game";
import Result from "../Result/Result";

const Main = () => {
  const [winner, setWinner] = useState(null);
  const [redPoint, setRedPoint] = useState(0);
  const [bluePoint, setBluePoint] = useState(0);

  const winnerStyle = {
    color: winner,
    display: "block",
    textAlign: "center",
    transition: "color 0.5s",
  };

  const styleCondotion =
    winner === "#41D3BD" || winner === "#D90429" || winner === "#F7D002";

  const resetPoints = () => {
    setRedPoint(0);
    setBluePoint(0);
  };
  return (
    <>
      <div className="main">
        <Game
          setWinner={setWinner}
          setRedPoint={setRedPoint}
          setBluePoint={setBluePoint}
        />
      </div>

      <h2 style={styleCondotion ? winnerStyle : { color: "#323031" }}>
        {winner === "#F7D002" ? "DRAW!" : "We have a WINNER!"}
      </h2>
      <div className="reset-btn-container">
        <button onClick={resetPoints} className="reset-btn">
          0 - 0
        </button>
      </div>
      <Result redPoint={redPoint} bluePoint={bluePoint} />
    </>
  );
};

export default Main;
