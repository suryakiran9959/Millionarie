import React from "react";
import { useNavigate } from "react-router-dom";
import "./start.css"; 

const Start = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/game"); 
  };

  return (
    <div className="start">
      <h1 className="title">Welcome to the Millionaire Quiz!</h1>
      <p className="instructions">
        Test your knowledge and see how far you can go!
      </p>
      <button className="startButton" onClick={handleStart}>
        Start Game
      </button>
    </div>
  );
};

export default Start;


