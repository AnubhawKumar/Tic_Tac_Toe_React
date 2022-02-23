import React, { Fragment } from "react";

import "../assets/css/grid.css";
const Grid = ({ turn, data, winner, setGrid }) => {
  const renderValue = (value) => {
    if (value === "cross") {
      return "X";
    } else if (value === "circle") {
      return "O";
    } else {
      return null;
    }
  };

  return (
    <Fragment>
      <div className="container">
        {data.map((value, index) => (
          <div key={index} onClick={() => setGrid(index)}>
            {renderValue(value)}
          </div>
        ))}
      </div>
      <div className="grid-turn">{`Turn : ${turn}`}</div>
      {winner ? (
        <div className="grid-result">{`Player ${
          turn === "cross" ? "circle" : "cross"
        } won`}</div>
      ) : null}
      {!winner && !data.filter((value) => value === null).length ? (
        <div className="grid-result">Match Draw</div>
      ) : null}
    </Fragment>
  );
};

export default Grid;
