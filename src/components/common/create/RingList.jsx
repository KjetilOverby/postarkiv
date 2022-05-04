import { set } from "mongoose";
import React, { useState } from "react";
import ringObject from "../create/ringObject";

const RingList = ({
  setRings,
  header,
  backgroundBtn,
  shimsMode,
  shimsMode2,
  setRingShimsPanel,
  setRingShimsPanel2,
  bladeDimension = { bladeDimension },
}) => {
  const getRings = (e) => {
    if (bladeDimension.bladStamme) {
      setRings(e.target.innerHTML);

      if (!shimsMode && !shimsMode2) {
        setTimeout(() => {
          setRings("");
        }, 100);
      } else if (shimsMode) {
        setRingShimsPanel2(true);
        setRingShimsPanel(false);
      }
    } else {
      alert(
        "Du må legge inn bladtykkelse før du kan legge inn utfyllingsringer"
      );
    }
  };
  return (
    <>
      <div className="container">
        <h1 className="top-header">{header}</h1>
        <h1 className="header">Små ringer</h1>
        <div className="box-container">
          {ringObject.small.map((smallRings) => (
            <div key={smallRings} className="ring-box" onClick={getRings}>
              {smallRings}
            </div>
          ))}
        </div>
        <h1 className="header">Store ringer</h1>
        <div className="box-container">
          {ringObject.big.map((bigRings) => (
            <div key={bigRings} className="ring-box" onClick={getRings}>
              {bigRings}
            </div>
          ))}
        </div>
        <h1 className="header">Skims</h1>
        <div className="box-container">
          {ringObject.shims.map((shims) => (
            <div key={shims} className="ring-box" onClick={getRings}>
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
            overflow: scroll;
            height: 100vh;
          }
          .header {
            margin: 2rem 0;
            font-weight: 100;
            font-size: 1.2rem;
          }
          .ring-box {
            background: ${backgroundBtn};
            height: 3.5rem;
            width: 3.5rem;
            display: grid;
            place-items: center;
            border-radius: 50%;
            color: white;
            transition: 0.5s;
            box-shadow: 10px 10px 10px #858585fa;
            transition: background 0.3s, color 0.3s;
            background-size: 220%;
            border: 1px solid #333;
          }
          .ring-box:hover {
            cursor: pointer;
            background-position: 100%;
            color: black;
          }
          .top-header {
            color: #fd3636;
            font-weight: 300;
          }
        `}
      </style>
    </>
  );
};

export default RingList;
