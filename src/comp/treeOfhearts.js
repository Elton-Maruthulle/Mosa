import React, { useState, useEffect } from 'react';
import Lottie from "lottie-react";
import movingHearts from "./Animation/treeOfHearts.json";
import "./Styles/treeOfHearts.css";

function TreeOfHearts() {
  const [timeDiff, setTimeDiff] = useState({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    function calculateDiff() {
      const now = new Date();
      const startDate = new Date(2023, 1, 14, 0, 0, 0); // Feb 14, 2023

      let diffMs = now - startDate;
      if (diffMs < 0) diffMs = 0;

      const secondsTotal = Math.floor(diffMs / 1000);
      const years = Math.floor(secondsTotal / (365.25 * 24 * 3600));
      const days = Math.floor((secondsTotal % (365.25 * 24 * 3600)) / (24 * 3600));
      const hours = Math.floor((secondsTotal % (24 * 3600)) / 3600);
      const minutes = Math.floor((secondsTotal % 3600) / 60);
      const seconds = secondsTotal % 60;

      setTimeDiff({ years, days, hours, minutes, seconds });
    }

    calculateDiff();
    const interval = setInterval(calculateDiff, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="treeOfHearts-container">
      <p className="names">Elton Maruthulle</p>
      <p className="and-text">and</p>
      <p className="names">Mosa Choshi</p>
      <div className="treeOfHearts-animation">
        <Lottie animationData={movingHearts} />
      </div>
      <p className="hashtag">#Momo&Elly</p>

      <div className="dating-box">
        <div className="dating-title">We've been dating for:</div>
        <div className="dating-time">
          <strong>{timeDiff.years}</strong> years, <strong>{timeDiff.days}</strong> days, <br />
          <strong>{timeDiff.hours}</strong> hours, <strong>{timeDiff.minutes}</strong> minutes,{' '}
          <strong>{timeDiff.seconds}</strong> seconds
        </div>
      </div>
    </div>
  );
}

export default TreeOfHearts;
