import React from "react";
import Image from "next/image";
import distansering from "../../../assets/distansering2.bmp";
import planke from "../../../assets/planke.jpeg";

const ShimsCalc = ({ setOpenPage }) => {
  return (
    <>
      <div className="container">
        <h1 className="header">Velg råmål eller ring</h1>
        <div className="img-main-container">
          <div className="margin1"></div>
          <div
            onClick={() => setOpenPage("ring")}
            className="img-container img-header1"
          >
            <h4 className="img-header ">Ring</h4>
            <Image src={distansering} />

            <p className="text">Legg sammen flere ringer for å få en verdi.</p>
          </div>
          <div
            onClick={() => setOpenPage("raw")}
            className="img-container img-header2"
          >
            <h4 className="img-header ">Råmål</h4>

            <Image src={planke} />
            <p className="text">
              Regn ut hvilke skims man må bruke ut i fra gitt råmål.
            </p>
          </div>
          <div className="margin2"></div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: grid;
            place-items: center;
          }
          .header {
            margin-top: 5rem;
            color: grey;
            margin-bottom: 8rem;
          }
          .img {
            width: 100%;
          }
          .img-header {
            font-size: 2rem;
            font-weight: 100;
            color: grey;
          }
          .img-header1 {
            grid-area: imgh1;
          }
          .img-header2 {
            grid-area: imgh2;
          }
          .margin1 {
            grid-area: m1;
          }
          .margin2 {
            grid-area: m2;
          }
          .img-container {
            width: 15rem;
            display: grid;
            grid-template-rows: 4rem 13rem 1fr;
            place-items: center;
            padding: 1rem;
            border: 1px solid transparent;
          }
          .img-container:hover {
            border: 1px solid #dadada;
            border-radius: 10px;
            cursor: pointer;
          }
          .img-main-container {
            display: grid;
            grid-template-columns: 45rem 1fr 1fr 45rem;
            place-items: center;
            margin-top: 10rem;
            width: 100%;
            grid-template-areas: "m1 imgh1 imgh2 m2";
          }
          .text {
            text-align: center;
            color: grey;
          }
          @media (max-width: 2100px) {
            .header {
              margin-bottom: 0;
            }
            .img-main-container {
              grid-template-columns: 25rem 1fr 1fr 25rem;
            }
          }
          @media (max-width: 1400px) {
            .img-main-container {
              grid-template-columns: 8rem 1fr 1fr 8rem;
            }
            .header {
              margin: 0;
            }
          }
          @media (max-width: 800px) {
            .img-main-container {
              grid-template-columns: 0.5rem 1fr 0.5rem;
              grid-template-rows: 1fr 1fr;
              margin-top: 0rem;
              grid-template-areas:
                "m1 imgh1 m2"
                "m1 imgh2 m2";
            }
            .header {
              margin: 2rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default ShimsCalc;
