import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./result.css";
const Result = () => {
  const location = useLocation();
  const { textArea, paragraph } = location.state;

  const navigate = useNavigate();
  const replayHandle = () => {
    navigate("/typing");
  };
  const totalCharacters = textArea.length;
  const mistakes = textArea.split("").reduce((acc, char, idx) => {
    return char !== paragraph[idx] ? acc + 1 : acc;
  }, 0);
  const accuracy = ((totalCharacters - mistakes) / totalCharacters) * 100;

  return (
    <div className="whole">
      <h2 className="result-head">Results</h2>
      <div className="result-container">
        <p>
          Characters
          <br />
          <span className="res-word">{totalCharacters}</span>
        </p>
        <p>
          Mistakes <br /> <span className="res-word">{mistakes}</span>
        </p>
        <p>
          Accuracy
          <br /> <span className="res-word">{accuracy.toFixed(2)}%</span>
        </p>
        <p>
          Time <br />
          <span className="res-word">35s</span>
        </p>
      </div>
      <h3 className="glory">Thank you for playing velocity type!</h3>
      <button className="replay-bttn" onClick={replayHandle}>
        <i className="fa-solid fa-rotate-right"></i>
      </button>
    </div>
  );
};

export default Result;
