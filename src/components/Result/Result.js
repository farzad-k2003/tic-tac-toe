import "./Result.css";

const Result = ({ redPoint, bluePoint }) => {
  console.log("red point is ", redPoint);
  return (
    <footer>
      <div className="red">{redPoint}</div>
      <div className="blue">{bluePoint}</div>
    </footer>
  );
};

export default Result;
