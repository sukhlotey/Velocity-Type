import React from "react";
import typing from "../../assets//typing.mp4";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleToStart = () => {
    navigate("/typing");
  };

  return (
    <div>
      <div className="overlay"></div>
      <p className="p-head">
        <span className="span-head">Welcome</span>
        <span className="span-head">To</span>
        <span className="span-head">The</span>
        <span className="span-head">Velocity</span>
        <span className="span-head">Type</span>
      </p>
      <video src={typing} autoPlay loop muted></video>
      <div className="div-bttn">
        <button className="start-bttn" onClick={handleToStart}>
          START
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
