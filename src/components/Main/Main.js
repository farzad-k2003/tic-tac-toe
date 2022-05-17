import "./Main.css";
import { useState, useEffect } from "react";
import Game from "../Game/Game";
import Result from "../Result/Result";

const Main = () => {
  const [winner, setWinner] = useState(null);
  const [redPoint, setRedPoint] = useState(0);
  const [bluePoint, setBluePoint] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("bluePoint")) {
      setBluePoint(+localStorage.getItem("bluePoint"));
    }
    if (localStorage.getItem("redPoint")) {
      setRedPoint(+localStorage.getItem("redPoint"));
    }
  }, []);

  const winnerStyle = {
    color: winner,
    display: "block",
    textAlign: "center",
    transition: "color 0.5s",
  };

  const styleCondotion =
    winner === "#41D3BD" || winner === "#D90429" || winner === "#F7D002";

  const winnerHandler = () => {
    if (winner) {
      if (winner === "#F7D002") {
        return (
          <h2 style={styleCondotion ? winnerStyle : { color: "#323031" }}>
            DRAW!
          </h2>
        );
      } else {
        return (
          <h2 style={styleCondotion ? winnerStyle : { color: "#323031" }}>
            We have a WINNER!
          </h2>
        );
      }
    }
  };

  const resetPoints = () => {
    setRedPoint(0);
    setBluePoint(0);
    localStorage.clear();
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

      {winnerHandler()}

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
