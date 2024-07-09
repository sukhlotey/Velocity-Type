import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./typing.css";
import Keyboard from "../keyboard/Keyboard";

const Typing = () => {
  const [textArea, setTextArea] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [error, setError] = useState("");
  const [pressedKey, setPressedKey] = useState("");
  const [timeLeft, setTimeLeft] = useState(35);
  const navigate = useNavigate();

  const handleArea = (e) => {
    setTextArea(e.target.value);
  };

  const fetchParagraph = useCallback(() => {
    fetch(
      "https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setParagraph(data.join(" "));
      })
      .catch((error) => {
        setError("Failed to fetch paragraph");
        console.error("Error fetching paragraph:", error);
      });
  }, []);

  useEffect(() => {
    fetchParagraph();
  }, [fetchParagraph]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toUpperCase();
      setPressedKey(key === " " ? " " : key);
    };

    const handleKeyUp = () => {
      setPressedKey("");
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      navigate("/result", { state: { textArea, paragraph } });
    }
     // eslint-disable-next-line
  }, [timeLeft, navigate]);

  return (
    <div className="whole-bg">
      <div className="typing-container">
        {error && <div className="error-message">{error}</div>}
        <div className="paragraph-display">{paragraph.substring(0, 500)}.</div>
        <textarea
          className="textarea-type"
          rows={9}
          spellCheck="false"
          placeholder="let's type..."
          value={textArea}
          onChange={handleArea}
        />
        <Keyboard pressedKey={pressedKey} />
        <div className="timer">Time left: {timeLeft}s</div>
      </div>
    </div>
  );
};

export default Typing;
