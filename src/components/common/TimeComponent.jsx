import React, { useState, useEffect } from "react";
import dateformat from "dateformat";

const TimeComponent = () => {
  const [clockState, setClockState] = useState();
  const [day, setDay] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  });

  return (
    <>
      <div className="container">
        <h1 className="clock">{clockState}</h1>
        <p>{dateformat(new Date(), "dddd, mmmm dd")}</p>
      </div>
      <style jsx>
        {`
          .container {
            position: absolute;
            top: 1rem;
            right: 0rem;
            color: #fff;
            z-index: 1000;
            width: 13rem;
          }
          .clock {
            font-weight: 300;
            font-size: 2.5rem;
          }
        `}
      </style>
    </>
  );
};

export default TimeComponent;
