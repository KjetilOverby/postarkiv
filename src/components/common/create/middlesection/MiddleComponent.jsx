import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import EndRingsCreate from "./EndRingsCreate";
import LabelHeaderCalc from "./LabelHeaderCalc";
import RawRingsCreate from "./RawRingsCreate";
import StartRingsCreate from "./StartRingsCreate";
import { useAuth0 } from "@auth0/auth0-react";
import { GrStatusWarning } from "react-icons/gr";
import { RiErrorWarningLine } from "react-icons/ri";
import Image from "next/image";
import Calc from "../../../../../assets/calc.jpg";
import Log from "../../../../../assets/log.jpg";

const MiddleComponent = ({
  startFillRings,
  startFillringsCollection,
  rawButtonValue,
  setStartFillringsCollection,
  rawRings,
  setRawRingsCollection,
  rawRingsCollection,
  endFillRingsCollection,
  setEndFillRingsCollection,
  endFillRings,
  setEndFillRings,
  setGetId,
  getId,
  update,
  setUpdate,
  setRawRingSum,
  bladeDimension,
  setBladeDimensionSum,
  startRingLabel,
  setStartRingSum,
  setEndRingSum,
  endRingLabel,
  greenColorWhenZero,
  greenColorWhenZero2,
  prosentValg,
  plankeTykkelse,
  SpesiellePlankeTykkelser,
  setHeaderString,
  setRingShimsPanel,
  setStartRingsPanel,
  setEndringPanel,
  setLeftPanelSlide,
  ringShims,
  setRingShimsPanel2,
  setRingShims,
  ringShims2,
  saveConfirmed,
  headerDuplicate,
}) => {
  const { user, isAuthenticated } = useAuth0();
  const [saveConfirmedDisplay, setSaveConfirmedDisplay] = useState(false);
  useEffect(() => {
    if (saveConfirmed) {
      setSaveConfirmedDisplay(true);
    }
    setTimeout(() => {
      setSaveConfirmedDisplay(false);
    }, 5000);
  }, [saveConfirmed]);
  useEffect(() => {
    setHeaderString(
      `${rawRingsCollection.length}x${plankeTykkelse}${prosentValg}${(
        Number(bladeDimension.bladStamme) + 1.4
      ).toFixed(1)}${
        SpesiellePlankeTykkelser === undefined ? "" : SpesiellePlankeTykkelser
      }`
    );
  }, [
    prosentValg,
    plankeTykkelse,
    SpesiellePlankeTykkelser,
    bladeDimension,
    rawRingsCollection,
  ]);

  return (
    <>
      <div className="container">
        <div className="header-container">
          {headerDuplicate && headerDuplicate.includes(true) && (
            <p className="check">
              <RiErrorWarningLine
                style={{ fontSize: "2rem", marginRight: "1rem" }}
              />{" "}
              Denne posten er allerede lagret
            </p>
          )}
          {rawRingsCollection.length > 0 && (
            <h1 className="header">
              {rawRingsCollection.length}x{plankeTykkelse}
              {prosentValg}
              <span>
                {bladeDimension.bladStamme &&
                  (Number(bladeDimension.bladStamme) + 1.4).toFixed(1)}
              </span>
              {SpesiellePlankeTykkelser}
            </h1>
          )}
        </div>

        <div className="post-container">
          <StartRingsCreate
            startFillRings={startFillRings}
            setStartRingSum={setStartRingSum}
            startFillringsCollection={startFillringsCollection}
            setStartFillringsCollection={setStartFillringsCollection}
            setGetId={setGetId}
            getId={getId}
            setUpdate={setUpdate}
            update={update}
          />

          <RawRingsCreate
            rawRingsCollection={rawRingsCollection}
            setRawRingsCollection={setRawRingsCollection}
            rawRings={rawRings}
            rawButtonValue={rawButtonValue}
            setGetId={setGetId}
            getId={getId}
            setUpdate={setUpdate}
            update={update}
            setRawRingSum={setRawRingSum}
            bladeDimension={bladeDimension}
            setBladeDimensionSum={setBladeDimensionSum}
            setRingShimsPanel={setRingShimsPanel}
            setEndringPanel={setEndringPanel}
            setStartRingsPanel={setStartRingsPanel}
            setLeftPanelSlide={setLeftPanelSlide}
            ringShims={ringShims}
            setRingShimsPanel2={setRingShimsPanel2}
            setRingShims={setRingShims}
            ringShims2={ringShims2}
          />

          <EndRingsCreate
            endFillRingsCollection={endFillRingsCollection}
            setEndFillRingsCollection={setEndFillRingsCollection}
            endFillRings={endFillRings}
            setEndFillRings={setEndFillRings}
            setGetId={setGetId}
            getId={getId}
            setUpdate={setUpdate}
            update={update}
            setEndRingSum={setEndRingSum}
          />
        </div>
        {startRingLabel < 200 ? (
          <>
            <div className={`label-container-left ${greenColorWhenZero}`}>
              <h3>{startRingLabel}</h3>
            </div>
            <div className={`label-container-right ${greenColorWhenZero2}`}>
              <h3>{endRingLabel}</h3>
              {saveConfirmedDisplay && (
                <div className="saved-confirmed-container">
                  <h1 className="saved-confirmed-text">{saveConfirmed}</h1>
                </div>
              )}
              {!user && (
                <div className="not-loggedin-container">
                  <GrStatusWarning
                    style={{
                      fontSize: "2rem",
                      marginRight: "1rem",
                    }}
                  />
                  Du er ikke innlogget, posten kan ikke lagres
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="no-input-container">
            <p
              style={{
                color: "#616161",
                fontWeight: "300",
                marginLeft: "2rem",
                fontSize: "1.5rem",
              }}
            >
              Start med å velge sagbladtykkelse.
            </p>

            <div className="img">
              <div className="log-img">
                <Image src={Log} />
              </div>
              <div className="calc-img">
                <Image src={Calc} />
              </div>
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        .blade {
          height: 14rem;
          width: 2px;
          background: #4173ac;
          margin: -3rem 2px -3rem -4px;
        }
        .container {
          background-color: #ffffff;
          grid-area: middle;
          display: grid;
          grid-template-rows: 10rem 15rem 1fr 10rem;
          grid-template-areas:
            "header header"
            "post post"
            "label1 label2"
            ". .";
        }
        .check {
          position: absolute;
          top: 0.1rem;
          background-color: #80d3b7;
          padding: 0.5rem;
          border-radius: 5px;
          color: #425c4f;
          border: 1px solid #696969;
          display: flex;
          align-items: center;
        }
        .header-container {
          grid-area: header;
          display: grid;
          place-items: center;
          position: relative;
        }
        .header {
          font-weight: 100;
          width: 100%;
          text-align: center;
        }
        .post-container {
          grid-area: post;
          display: flex;
          justify-content: center;
        }
        .no-input-container {
          grid-area: post;
          display: grid;
          justify-content: center;
        }
        .log-img {
          width: 25rem;
        }
        .calc-img {
          width: 25rem;
          margin-top: 5rem;
        }
        .img {
          display: flex;
        }

        .label-container-right {
          grid-area: label2;
          display: flex;
          justify-content: center;
          color: red;
          position: relative;
        }
        .label-container-left {
          grid-area: label1;
          display: flex;
          justify-content: center;
          color: red;
        }
        .green {
          color: #479947;
        }
        .saved-confirmed-container {
          background-color: #73cc7f;
          position: absolute;
          padding: 0.5rem;
          border-radius: 5px;
          color: #62885d;
          top: 5rem;
        }
        .saved-confirmed-text {
          font-weight: 300;
        }
        .not-loggedin-container {
          background-color: #e2ec54;
          position: absolute;
          padding: 0.5rem;
          border-radius: 5px;
          color: #684242;
          top: 5rem;
          color: #42422a;
          border: 1px solid grey;
          display: grid;
          place-items: center;
        }
        span {
          color: #d35a22;
        }
      `}</style>
    </>
  );
};

export default MiddleComponent;
