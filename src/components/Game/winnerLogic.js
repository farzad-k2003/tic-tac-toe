export const winnerLogic = (
  list,
  turn,
  setWinner,
  setGameIsOn,
  setRedPoint,
  setBluePoint
) => {
  const condition1 =
    list[0] !== "" && list[0] === list[1] && list[1] === list[2];
  const condition2 =
    list[3] !== "" && list[3] === list[4] && list[4] === list[5];
  const condition3 =
    list[6] !== "" && list[6] === list[7] && list[7] === list[8];
  const condition4 =
    list[0] !== "" && list[0] === list[3] && list[3] === list[6];
  const condition5 =
    list[1] !== "" && list[1] === list[4] && list[4] === list[7];
  const condition6 =
    list[2] !== "" && list[2] === list[5] && list[5] === list[8];
  const condition7 =
    list[0] !== "" && list[0] === list[4] && list[4] === list[8];
  const condition8 =
    list[2] !== "" && list[2] === list[4] && list[4] === list[6];

  const mainCondotion =
    condition1 ||
    condition2 ||
    condition3 ||
    condition4 ||
    condition5 ||
    condition6 ||
    condition7 ||
    condition8;

  if (mainCondotion) {
    setGameIsOn(false);
    if (turn) {
      setWinner("#D90429");
      setRedPoint((prev) => {
        localStorage.setItem("redPoint", prev + 1);
        return prev + 1;
      });
    } else {
      setWinner("#41D3BD");
      setBluePoint((prev) => {
        localStorage.setItem("bluePoint", prev + 1);
        return prev + 1;
      });
    }
  } else if (!mainCondotion && list.every((item) => item !== "")) {
    setWinner("#F7D002");
  }
};
