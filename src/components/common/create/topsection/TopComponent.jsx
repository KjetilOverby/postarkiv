import React from "react";
import BladeSelectComponent from "./BladeSelectComponent";
import ProsentSelect from "./ProsentSelect";

const TopComponent = ({
  setBladeDimension,
  setProsentValg,
  setPlankeTykkelse,
  setSpesiellePlankeTykkelser,
  bladeDimension,
}) => {
  return (
    <>
      <div className="container">
        <div>
          <h1 className="header">Post kalkulator</h1>
          <p className="sub-header">Lag nye poster.</p>
        </div>
        <div>
          <div className="blade-select-container">
            <BladeSelectComponent setBladeDimension={setBladeDimension} />
          </div>
          <div className="prosent-select-container">
            <ProsentSelect setProsentValg={setProsentValg} />
          </div>
        </div>
        <div className="input-container">
          <div>
            <input
              className="input"
              onChange={(e) => setPlankeTykkelse(e.target.value)}
              placeholder="Planktykkelse-eks: 50/38"
            />
          </div>
          <div>
            <input
              className="input"
              onChange={(e) => setSpesiellePlankeTykkelser(e.target.value)}
              placeholder="Spes. råmål: (52.2/52.5)"
            />
          </div>
        </div>
        {bladeDimension.bladStamme && (
          <div className="blade-container">
            <p>Sagbladtykkelse</p>
            <h1 className="blade">
              {(Number(bladeDimension.bladStamme) + 1.4).toFixed(1)}{" "}
            </h1>
          </div>
        )}
      </div>
      <style jsx>
        {`
          .container {
            grid-area: top;
            background: #ffffff;
            padding: 2rem;
            display: flex;
          }
          .header {
            margin-right: 5rem;
            color: #60816f;
            font-weight: 300;
          }
          .sub-header {
            color: #60816f;
          }
          .input-container {
            margin-left: 1rem;
          }
          .input {
            background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            height: 2rem;
            font-size: 1rem;
            margin-bottom: 1rem;
            border: none;
          }
          .blade {
            font-weight: 300;
            font-size: 4rem;
            color: #e66610;
          }
          .blade-container {
            margin-left: 3rem;
            color: #60816f;
          }
        `}
      </style>
    </>
  );
};

export default TopComponent;
