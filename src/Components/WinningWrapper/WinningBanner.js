import React from "react";
import "./WinningBanner.css";

const WinningBanner = (props) => {
  return (
    <div className="outer">
      <div className="inner">
        <p>{props.message}</p>
      </div>
    </div>
  );
};

export default WinningBanner;
