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

    setTurn((prev) => !prev);
  }
};
