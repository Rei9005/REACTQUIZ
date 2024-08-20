import { useState, useEffect } from "react";

export default function Timer({ timeout, onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(timeout);
  useEffect(() => {
    setTimeout(onTimeOut, timeout);
  }, [timeout, onTimeOut]);
  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevRemainingTme) => prevRemainingTme - 100);
    }, 100);

  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
