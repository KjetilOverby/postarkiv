import React from "react";

const LabelHeaderCalc = ({ rawRingsCollection }) => {
  return (
    <>
      <div className="container">
        <h4>{rawRingsCollection && rawRingsCollection.length}x</h4>
      </div>
      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </>
  );
};

export default LabelHeaderCalc;
