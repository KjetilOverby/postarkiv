import React from "react";
import ringObject from "../ringObject";

const RingListEnd = ({ setEndFillRings, endringPanel }) => {
  const getEndRings = (e) => {
    setEndFillRings(e.target.innerHTML);
    setTimeout(() => {
      setEndFillRings("");
    }, 100);
  };
  return (
    <>
      <div className={`container ${endringPanel}`}>
        <h1>Utfylling bak</h1>
        <h1 className="header">Små ringer</h1>
        <div className="box-container">
          {ringObject.small.map((smallRings) => (
            <div key={smallRings} className="ring-box" onClick={getEndRings}>
              {smallRings}
            </div>
          ))}
        </div>
        <h1 className="header">Store ringer</h1>
        <div className="box-container">
          {ringObject.big.map((bigRings) => (
            <div key={bigRings} className="ring-box" onClick={getEndRings}>
              {bigRings}
            </div>
          ))}
        </div>
        <h1 className="header">Skims</h1>
        <div className="box-container">
          {ringObject.shims.map((shims) => (
            <div key={shims} className="ring-box" onClick={getEndRings}>
              {shims}
            </div>
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .box-container {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(3.5rem, auto));
            grid-template-rows: repeat(auto-fill, min-content);
            grid-gap: 0.5rem;
          }
          .container {
            grid-area: right;
            padding: 1rem;
            z-index: 1000;
            background-color: #fff;
            overflow: scroll;
            height: 100vh;
          }
          .container-open {
            animation: slide 0.8s forwards;
          }
          .container-closed {
            animation: slideBack 0.8s forwards;
          }
          .header {
            margin: 2rem 0;
            font-weight: 100;
            font-size: 1.2rem;
          }
          .ring-box {
            background-color: #458664;
            height: 3.5rem;
            width: 3.5rem;
            display: grid;
            place-items: center;
            border-radius: 50%;
            color: white;
            transition: 0.5s;
            box-shadow: 10px 10px 10px #858585fa;
          }
          .ring-box:hover {
            cursor: pointer;
            background: #6b8eb6;
          }
          @keyframes slide {
            0% {
              transform: translateX(30rem);
            }
            100% {
              transform: translateX(0rem);
            }
          }
          @keyframes slideBack {
            0% {
              transform: translateX(0rem);
            }
            100% {
              transform: translateX(30rem);
            }
          }
        `}
      </style>
    </>
  );
};

export default RingListEnd;
