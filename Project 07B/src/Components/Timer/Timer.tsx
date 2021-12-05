import React, { useState } from "react";
import Buttons from "../Buttons/Buttons";
import "./Timer.css";

const Timer = () => {
  const [disable, setDisable] = useState<boolean>(false);
  let [hours, setHours] = useState<number>(0);
  let [minutes, setMinutes] = useState<number>(0);
  let [seconds, setSeconds] = useState<number>(0);
  let [access, setAccess] = useState<any>();

  // ? Start Button Function
  let start = () => {
    setDisable(true);
    setAccess(
      setInterval(() => {
        if (seconds > 59) {
          seconds = 0;
          minutes += 1;
          setMinutes(minutes);
        } else if (minutes > 59) {
          seconds = 0;
          minutes = 0;
          hours++;
          setHours(hours);
        } else {
          setSeconds(seconds);
          seconds += 1;
        }
      }, 1000)
    );
  };

  // ? Pause Button Function
  const pause = () => {
    setDisable(false);
    clearInterval(access);
  };

  // ? Reset Button Function
  const Reset = () => {
    setDisable(false);
    clearInterval(access);
    setSeconds(0);
    setHours(0);
    setMinutes(0);
  };

  return (
    <div className="timeBox">
      <span>
        {hours}:{minutes}:{seconds}
      </span>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="allButtons" style={{ display: "flex" }}>
          {disable ? (
            <Buttons title="Start" onPress={start} disable={disable} />
          ) : (
            <Buttons title="Start" onPress={start} disable={false} />
          )}
          <Buttons title="Pause" onPress={pause} disable={false} />
          <Buttons title="Reset" onPress={Reset} disable={false} />
        </div>
      </div>
    </div>
  );
};

export default Timer;
