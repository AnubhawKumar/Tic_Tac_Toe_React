import { useState } from "react";
import Grid from "./Grid";
import "../assets/css/App.css";
import winnerGrid from "../utils/winnerGrid";

function App() {
  const [data, setData] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  // Turn
  const [turn, setTurn] = useState("cross");
  // winner
  const [winner, setWinner] = useState(undefined);

  const onChangeGrid = (index) => {
    if (!data[index] && !winner) {
      const newData = data;
      newData[index] = turn;
      setData([...newData]);

      winnerGrid.forEach((winner) => {
        const [x, y, z] = winner;
        if (data[x] && data[x] === data[y] && data[y] === data[z]) {
          setWinner(true);
        }
      });
      setTurn(turn === "cross" ? "circle" : "cross");
    }
  };

  return (
    <div className="App">
      <Grid turn={turn} data={data} winner={winner} setGrid={onChangeGrid} />
    </div>
  );
}

export default App;
