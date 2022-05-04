import React from "react";

const ProsentSelect = ({ setProsentValg }) => {
  return (
    <>
      <div className="container">
        <select
          className="select"
          onChange={(e) => setProsentValg(e.target.value)}
        >
          <option className="option" value="" selected disabled hidden>
            Velg prosent
          </option>
          <option className="option" value="-18%-">
            18%
          </option>
          <option className="option" value="-12%-">
            12%
          </option>
          <option className="option" value="-18/12%-">
            18/12%
          </option>
          <option className="option" value="-12/18%-">
            12/18%
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

export default ProsentSelect;
