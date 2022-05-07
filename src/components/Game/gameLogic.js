export const handleClick = (event, state, setState, turn, setTurn) => {
  const index = event.target.className;

  if (state[index] === "") {
    setState((prev) => {
      let newState = prev.map((item, itemIndex) => {
        if (+itemIndex === +index) {
          item = turn;
          return item;
        } else {
          return item;
        }
      });
      return newState;
    });

    if (
      turn &&
      event.currentTarget.style.backgroundColor === "rgb(50, 48, 49)"
    ) {
      event.target.style.backgroundColor = "#41D3BD";
    } else if (
      !turn &&
      event.currentTarget.style.backgroundColor === "rgb(50, 48, 49)"
    ) {
      event.target.style.backgroundColor = "#D90429";
    }

    setTurn((prev) => !prev);
  }
};
