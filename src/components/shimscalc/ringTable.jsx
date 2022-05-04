import React from "react";
import ringObject from "../common/create/ringObject";

const RingTable = ({ getRings, color }) => {
  return (
    <>
      <div className="container">
        <p className="ring-container-header">Små ringer</p>
        <div className="small-container">
          {ringObject.small.map((small) => (
            <div key={small} onClick={getRings} className="ring-box">
              {small}
            </div>
          ))}
        </div>
        <p className="ring-container-header">Store ringer</p>
        <div className="small-container">
          {ringObject.big.map((big) => (
            <div key={big} onClick={getRings} className="ring-box">
              {big}
            </div>
          ))}
        </div>
        <p className="ring-container-header">skims</p>
        <div className="small-container">
          {ringObject.shims.map((shims) => (
            <div key={shims} onClick={getRings} className="ring-box">
              {shims}
            </div>
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .container {
            height: 90vh;
            width: 20rem;
            overflow: scroll;
            padding-bottom: 2rem;
          }
          .ring-box {
            height: 2rem;
            width: auto;
            display: grid;
            place-items: center;
            color: white;
            transition: 0.5s;
            box-shadow: inset 10px 10px 20px #4b4b4bf8;
            transition: background 0.3s, color 0.3s;
            background-size: 220%;
            background: ${color};
          }
          .ring-box:hover {
            background: yellow;
            cursor: pointer;
            color: black;
          }
          .small-container {
            width: 20rem;
            height: auto;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr));
            grid-gap: 0.2rem;
          }
          .ring-container-header {
            margin: 1.5rem 0;
          }
          @media (max-width: 1500px) {
            .container {
              height: 80vh;
            }
          }
        `}
      </style>
    </>
  );
};

export default RingTable;
