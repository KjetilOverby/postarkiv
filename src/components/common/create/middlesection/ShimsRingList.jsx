import React from "react";
import ringObject from "../ringObject";

const ShimsRingList = ({ setTest, ringValueHandler }) => {
  return (
    <>
      <div>
        <button onClick={ringValueHandler}>53.1</button>
      </div>
      <style jsx>
        {`
          .container {
            position: absolute;
            background-color: #eee;
            top: -10rem;
            left: -10rem;
          }
        `}
      </style>
    </>
  );
};

export default ShimsRingList;
