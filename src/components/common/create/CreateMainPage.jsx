import React, { useState, useEffect } from "react";
import LeftComponent from "./LeftComponent";
import MiddleComponent from "./middlesection/MiddleComponent";
import RingListEnd from "./middlesection/RingListEnd";
import RawInputList from "./RawInputList2";
import RingList from "./RingList";
import TopComponent from "./topsection/TopComponent";

const CreateMainPage = ({
  saveCreatedPost,
  startFillringsCollection,
  setStartFillringsCollection,
  rawRingsCollection,
  setRawRingsCollection,
  endFillRingsCollection,
  setEndFillRingsCollection,
  bladeDimension,
  setBladeDimension,
  setHeaderString,
  prosentValg,
  setProsentValg,
  setPlankeTykkelse,
  plankeTykkelse,
  startRingLabel,
  setStartRingLabel,
  endRingLabel,
  setEndRingLabel,
  headerDuplicate,
  saveConfirmed,
}) => {
  const [startFillRings, setStartFillRings] = useState();
  const [rawButtonValue, setRawButtonValue] = useState();
  const [leftPanelSlide, setLeftPanelSlide] = useState("container-open");
  const [startRingsPanel, setStartRingsPanel] = useState(false);

  const [startRingSum, setStartRingSum] = useState(0);
  const [ringShims, setRingShims] = useState({});
  const [ringShims2, setRingShims2] = useState();

  //raw rings
  const [rawRingSum, setRawRingSum] = useState(0);
  const [bladeDimensionSum, setBladeDimensionSum] = useState();
  const [bladeAndRawringSum, setBladeAndRawringSum] = useState();
  const [ringShimsPanel, setRingShimsPanel] = useState(false);
  const [ringShimsPanel2, setRingShimsPanel2] = useState(false);
  // Endrings
  const [endRingSum, setEndRingSum] = useState(0);
  const [endFillRings, setEndFillRings] = useState();

  const [getId, setGetId] = useState();
  const [update, setUpdate] = useState();
  const halfBlade = bladeDimension.bladStamme / 2;
  const sleeveCenter = 200;
  const sleeveCenterEnd = 217.2;
  const [greenColorWhenZero, setGreenColorWhenZero] = useState("");
  const [greenColorWhenZero2, setGreenColorWhenZero2] = useState("");

  const [SpesiellePlankeTykkelser, setSpesiellePlankeTykkelser] = useState();
  const [endringPanel, setEndringPanel] = useState(false);

  const getVigg = (rawRingsCollection.length * 1.4) / 2;

  useEffect(() => {
    setBladeAndRawringSum(
      (
        Number(rawRingSum) / 2 +
        Number(bladeDimensionSum) +
        halfBlade +
        getVigg
      ).toFixed(2)
    );
  });

  // Startlabel calculations
  useEffect(() => {
    setStartRingLabel(
      (sleeveCenter - bladeAndRawringSum - startRingSum).toFixed(2)
    );
  });

  // Endlabel calculations
  useEffect(() => {
    setEndRingLabel(
      (sleeveCenterEnd - bladeAndRawringSum - endRingSum).toFixed(2)
    );
  });
  useEffect(() => {
    if (startRingLabel <= 0.05 && startRingLabel >= -0.05) {
      setGreenColorWhenZero("green");
    } else {
      setGreenColorWhenZero("");
    }
  });
  useEffect(() => {
    if (endRingLabel <= 0.05 && endRingLabel >= -0.05) {
      setGreenColorWhenZero2("green");
    } else {
      setGreenColorWhenZero2("");
    }
  });

  return (
    <>
      <div className="container">
        <TopComponent
          setBladeDimension={setBladeDimension}
          setProsentValg={setProsentValg}
          setPlankeTykkelse={setPlankeTykkelse}
          setSpesiellePlankeTykkelser={setSpesiellePlankeTykkelser}
          bladeDimension={bladeDimension}
        />
        <LeftComponent
          setLeftPanelSlide={setLeftPanelSlide}
          setEndringPanel={setEndringPanel}
          saveCreatedPost={saveCreatedPost}
          setStartRingsPanel={setStartRingsPanel}
          setRingShimsPanel={setRingShimsPanel}
          setRingShimsPanel2={setRingShimsPanel2}
        />
        <MiddleComponent
          startFillRings={startFillRings}
          startFillringsCollection={startFillringsCollection}
          setStartFillringsCollection={setStartFillringsCollection}
          rawButtonValue={rawButtonValue}
          rawRingsCollection={rawRingsCollection}
          setRawRingsCollection={setRawRingsCollection}
          endFillRings={endFillRings}
          setEndFillRings={setEndFillRings}
          endFillRingsCollection={endFillRingsCollection}
          setEndFillRingsCollection={setEndFillRingsCollection}
          getId={getId}
          setGetId={setGetId}
          update={update}
          setUpdate={setUpdate}
          setRawRingSum={setRawRingSum}
          setBladeDimensionSum={setBladeDimensionSum}
          bladeDimensionSum={bladeDimensionSum}
          bladeDimension={bladeDimension}
          startRingLabel={startRingLabel}
          startRingSum={startRingSum}
          setStartRingSum={setStartRingSum}
          setEndRingSum={setEndRingSum}
          endRingLabel={endRingLabel}
          greenColorWhenZero={greenColorWhenZero}
          greenColorWhenZero2={greenColorWhenZero2}
          prosentValg={prosentValg}
          plankeTykkelse={plankeTykkelse}
          SpesiellePlankeTykkelser={SpesiellePlankeTykkelser}
          setHeaderString={setHeaderString}
          setRingShimsPanel={setRingShimsPanel}
          setStartRingsPanel={setStartRingsPanel}
          setEndringPanel={setEndringPanel}
          setLeftPanelSlide={setLeftPanelSlide}
          ringShims={ringShims}
          setRingShimsPanel2={setRingShimsPanel2}
          setRingShims={setRingShims}
          ringShims2={ringShims2}
          saveConfirmed={saveConfirmed}
          headerDuplicate={headerDuplicate}
        />
        <RawInputList
          leftPanelSlide={leftPanelSlide}
          setRawButtonValue={setRawButtonValue}
          bladeDimension={bladeDimension}
        />
        {startRingsPanel && (
          <RingList
            leftPanelSlide={leftPanelSlide}
            setRings={setStartFillRings}
            startFillRings={startFillRings}
            startFillringsCollection={startFillringsCollection}
            setStartFillringsCollection={setStartFillringsCollection}
            header="Utfylling foran"
            backgroundBtn="linear-gradient(120deg, #3f5474 50%, #8dc0d8 50%)"
            bladeDimension={bladeDimension}
          />
        )}
        {endringPanel && (
          <RingList
            setRings={setEndFillRings}
            leftPanelSlide={leftPanelSlide}
            header="Utfylling bak"
            backgroundBtn="linear-gradient(120deg, #3f644d 50%, #87dfb6 50%)"
            bladeDimension={bladeDimension}
          />
        )}
        {ringShimsPanel && (
          <RingList
            header="Legg til Ring"
            backgroundBtn="linear-gradient(120deg, #b4601a 50%, #eecdc0 50%)"
            setRings={setRingShims}
            shimsMode={true}
            setRingShimsPanel={setRingShimsPanel}
            setRingShimsPanel2={setRingShimsPanel2}
            bladeDimension={bladeDimension}
          />
        )}
        {ringShimsPanel2 && (
          <RingList
            header="Legg til shims"
            backgroundBtn="linear-gradient(120deg, #879102 50%, #dff047 50%)"
            setRings={setRingShims2}
            shimsMode2={true}
            bladeDimension={bladeDimension}
          />
        )}
      </div>
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-areas:
              "left top right"
              "left middle right";
            grid-template-columns: 16rem 1fr 22rem;
            grid-template-rows: 10rem 1fr;
            min-height: 100vh;
            overflow: hidden;
          }
        `}
      </style>
    </>
  );
};

export default CreateMainPage;
