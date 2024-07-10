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

  const countWords = (text) => {
    return text.trim().split(/\s+/).length;
  };

  const totalWords = countWords(textArea);
  const paragraphWords = paragraph.trim().split(/\s+/);

  const mistakes = textArea
    .trim()
    .split(/\s+/)
    .reduce((acc, word, idx) => {
      return word !== paragraphWords[idx] ? acc + 1 : acc;
    }, 0);

  const accuracy = ((totalWords - mistakes) / totalWords) * 100;

  return (
    <div className="whole">
      <h2 className="result-head">Results</h2>
      <div className="result-container">
        <p>
          Words
          <br />
          <span className="res-word">{totalWords}</span>
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
