import React from "react";
import data from "../Icons/Data";
import "./Game.css";
import { useState } from "react";
import WinningBanner from "../WinningWrapper/WinningBanner";
const Game = () => {
  const [isValid, setisValid] = useState(false);
  const [winSms, setWinSms] = useState("");
  const [currentChouese, setCurrentChouese] = useState("");
  const [computercurrentChouese, setComputercurrentChouese] = useState(data[1]);
  const userChoeseHandler = async (index) => {
    await checkWinnerHandler();
    setCurrentChouese(data[index]);
    setComputercurrentChouese(data[Math.floor(Math.random() * data.length)]);
  };
  const bannerHandler = () => {
    setTimeout(() => {
      setisValid(false);
    }, 2000);
  };
  const checkWinnerHandler = () => {
    if (currentChouese == computercurrentChouese) {
      setWinSms("Match Dwar.......!");
      setisValid(true);
      bannerHandler();
    } else if (computercurrentChouese == data[0] && currentChouese==data[1]) {
      setWinSms("Computer Win....!");
      setisValid(true);
      bannerHandler();
    } else if (computercurrentChouese == data[1] && currentChouese==data[2]) {
      setWinSms("Computer Win....!");
      setisValid(true);
      bannerHandler();
    } else if (computercurrentChouese == data[2] && currentChouese==data[0]) {
      setWinSms("Computer Win....!");
      setisValid(true);
      bannerHandler();
    }else{
      setWinSms("User Win....!");
      setisValid(true);
      bannerHandler();
    }
  };

  return (
    <div>
      <span> Made by Sandeep Kumar</span>
      {isValid && <WinningBanner message={winSms} />}

      <div className="matching_Box">
        <p>{currentChouese}</p>
        <p>{computercurrentChouese}</p>
      </div>

      <div className="game-container">
        <p>User Choese</p>
        <div>
          {data.map((item, index) => {
            return (
              <p key={index} onClick={() => userChoeseHandler(index)}>
                {item}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Game;
