import React from "react";
import { AiTwotoneFilter } from "react-icons/ai";

const Blade = ({ bladstamme }) => {
  return (
    <>
      <div className="blade">
        <AiTwotoneFilter
          style={{
            position: "absolute",
            top: -5,
            color: "#cacaca",
            left: "-6px",
          }}
        />

        <AiTwotoneFilter
          style={{
            position: "absolute",
            bottom: -5,
            color: "#cacaca",
            transform: "rotate(180deg)",
            left: "-6px",
          }}
        />
        <p className="sagsnitt">{(bladstamme + 1.4).toFixed(1)}</p>
        <p className="bladstamme">{bladstamme}</p>
      </div>
      <style jsx>
        {`
          .blade {
            height: 36rem;
            width: 4px;
            background-color: #cacaca;
            position: relative;
            box-shadow: 5px 10px 10px #1a1a1a97;
          }
          .bladstamme {
            position: absolute;
            bottom: -1.5rem;
            left: 50%;
            transform: translateX(-50%);
            color: #ffffff;
          }
          .sagsnitt {
            position: absolute;
            top: -1.5rem;
            left: 50%;
            transform: translateX(-50%);
            color: #ffffff;
          }
          @media (max-width: 1500px) {
            .blade {
              height: 30rem;
            }
          }
          @media (max-width: 1350px) {
            .blade {
              height: 25rem;
            }
          }
          @media (max-width: 1000px) {
            .blade {
              height: 18rem;
              width: 2px;
            }
            .sagsnitt {
              font-size: 0.8rem;
            }
            .bladstamme {
              font-size: 0.8rem;
            }
          }
          @media (max-width: 550px) {
            .blade {
              height: 12rem;
              width: 2px;
            }
            .sagsnitt {
              font-size: 0.5rem;
              top: -1rem;
            }
            .bladstamme {
              font-size: 0.5rem;
              bottom: -1rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default Blade;
AiTwotoneFilter;
