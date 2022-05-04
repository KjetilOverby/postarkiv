import React from "react";

const BladeSelectComponent = ({ setBladeDimension }) => {
  return (
    <>
      <div className="container">
        <select
          className="select"
          onChange={(e) => setBladeDimension({ bladStamme: e.target.value })}
        >
          <option className="option" value="" selected disabled hidden>
            Velg sagblad
          </option>
          <option className="option" value={2.2}>
            2.2-3.6
          </option>
          <option className="option" value={2.4}>
            2.4-3.8
          </option>
          <option className="option" value={2.6}>
            2.6-4.0
          </option>
          <option className="option" value={2.8}>
            2.8-4.2
          </option>
          <option className="option" value={3.0}>
            3.0-4.4
          </option>
          <option className="option" value={3.2}>
            3.2-4.6
          </option>
        </select>
      </div>
      <style jsx>
        {`
          .container {
            margin-bottom: 1rem;
          }
          .select {
            height: 2rem;
            background-image: linear-gradient(
              -225deg,
              #5d9fff 0%,
              #b8dcff 48%,
              #6bbbff 100%
            );
            outline: none;
            border: none;
            font-size: 1rem;
            color: #344b68;
          }
        `}
      </style>
    </>
  );
};

export default BladeSelectComponent;
