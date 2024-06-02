import React, { useEffect, useState } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = new Date("02 june 2024 15:00") - Date.now();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }
    console.log(timeLeft, "tl");
    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState({});
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });
  return (
    <div>
      <div className="explore-subscription-bg  w-full px-5 py-2 rounded-md flex items-center justify-between gap-5">
        <div>
          <p className="font-semibold">FIRST SUBSCRIPTION</p>
        </div>
        <button className="bg-csecondary rounded-full font-semibold px-10 py-2">
          Up to 75% Off
        </button>
        <div className="flex font-[500] text-sm text-center gap-2">
          {timeLeft.days > 0 && (
            <div className="bg-slate-300/50 rounded-lg px-8 py-1">
              <p className="leading-tight">{timeLeft.days}</p>
              <p className="leading-tight">Days</p>
            </div>
          )}
          <div className="bg-slate-300/50 rounded-lg px-8 py-1">
            <p className="leading-tight">{timeLeft.hours}</p>
            <p className="leading-tight">HOURS</p>
          </div>
          <div className="bg-slate-300/50 rounded-lg px-8 py-1">
            <p className="leading-tight">{timeLeft.minutes}</p>
            <p className="leading-tight">Minutes</p>
          </div>
          <div className="bg-slate-300/50 rounded-lg px-8 py-1">
            <p className="leading-tight">{timeLeft.seconds}</p>
            <p className="leading-tight">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
