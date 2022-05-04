import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import RingComponent from "./RingComponent";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdAddCircle } from "react-icons/md";
import ShimsRingList from "./ShimsRingList";

const RawRingsCreate = ({
  rawButtonValue,
  rawRingsCollection,
  setRawRingsCollection,
  setGetId,
  getId,
  setUpdate,
  update,
  setRawRingSum,
  bladeDimension,
  setBladeDimensionSum,
  setRingShimsPanel,
  setStartRingsPanel,
  setEndringPanel,
  setLeftPanelSlide,
  ringShims,
  setRingShimsPanel2,
  ringShims2,
}) => {
  const antallPlank = rawRingsCollection.length;
  const [rawRingId, setRawRingId] = useState();
  const [shimsModeColors, setShimsModeColors] = useState(
    "linear-gradient( #aac3ad 0%, #23f9c3 100%);"
  );

  useEffect(() => {
    if (rawRingsCollection === undefined) {
      setRawRingsCollection(null);
    } else if (rawButtonValue) {
      setRawRingsCollection([
        ...rawRingsCollection,
        {
          input: Number(rawButtonValue),
          id: uuidv4(),
        },
      ]);
    }
  }, [rawButtonValue]);

  useEffect(() => {
    if (rawRingsCollection) {
      const remove = rawRingsCollection.filter((item) => item.id !== getId);
      setRawRingsCollection(remove);
    }
  }, [getId, update]);
  useEffect(() => {
    if (rawRingsCollection) {
      setRawRingSum(
        rawRingsCollection.reduce(
          (num, { input }) => Number(num) + Number(input),
          0
        )
      );
    }
  }, [rawRingsCollection]);

  useEffect(() => {
    setBladeDimensionSum(
      ((antallPlank * bladeDimension.bladStamme) / 2).toFixed(2)
    );
  }, [rawRingsCollection, bladeDimension]);
  // Shims
  const [filteredObject, setFilteredObject] = useState();
  useEffect(() => {
    if (rawRingsCollection) {
      setFilteredObject(
        rawRingsCollection.filter((item) => item.input === rawRingId)
      );
    }
  }, [rawRingId]);

  useEffect(() => {
    if (filteredObject) {
      setFilteredObject((filteredObject[0].ring = ringShims));

      if (filteredObject[1]) {
        setFilteredObject((filteredObject[1].ring = ringShims));
      }
      if (filteredObject[2]) {
        setFilteredObject((filteredObject[2].ring = ringShims));
      }
      if (filteredObject[3]) {
        setFilteredObject((filteredObject[3].ring = ringShims));
      }
      if (filteredObject[4]) {
        setFilteredObject((filteredObject[4].ring = ringShims));
      }

      setFilteredObject(
        rawRingsCollection.filter((item) => item.input === rawRingId)
      );
    }
  }, [ringShims, ringShims2]);
  useEffect(() => {
    if (filteredObject) {
      setFilteredObject((filteredObject[0].shims2 = ringShims2));
      if (filteredObject[1]) {
        setFilteredObject((filteredObject[1].shims2 = ringShims2));
      }
      if (filteredObject[2]) {
        setFilteredObject((filteredObject[2].shims2 = ringShims2));
      }
      if (filteredObject[3]) {
        setFilteredObject((filteredObject[3].shims2 = ringShims2));
      }
      if (filteredObject[4]) {
        setFilteredObject((filteredObject[4].shims2 = ringShims2));
      }
      setLeftPanelSlide("container-open");
    }
  }, [ringShims2]);

  return (
    <>
      <div className="container">
        {rawRingsCollection &&
          rawRingsCollection.map((raw) => {
            const getRawRingsIdHandler = () => {
              setGetId(raw.id);
              setUpdate(Math.random());
            };
            const addRingHandler = () => {
              setRingShimsPanel(true);
              setStartRingsPanel(false);
              setEndringPanel(false);
              setLeftPanelSlide("container-closed");
              setRawRingId(raw.input);
              setRingShimsPanel2(false);
            };
            return (
              <div key={raw.id} className="main-container">
                <RingComponent color={shimsModeColors}>
                  <p className="input">{raw.input}</p>
                  <h4 className="ring-value">{(raw.input + 1.4).toFixed(1)}</h4>
                  <MdAddCircle
                    style={{
                      color: "#0f663a",
                      fontSize: "1.2rem",
                      cursor: "pointer",
                    }}
                    onClick={addRingHandler}
                  />
                  <p className="ring">{raw.ring}</p>
                  <p className="shims">
                    {raw.ring &&
                      (
                        raw.input +
                        1.4 -
                        raw.ring -
                        (raw.shims2 !== undefined && raw.shims2)
                      ).toFixed(1)}
                  </p>
                  <p className="shims2">
                    {/* {raw.shims2 && raw.input + 1.4 - raw.ring} */}
                    {raw.shims2}
                  </p>
                  <RiDeleteBin6Line
                    style={{
                      color: "red",
                      fontSize: "1.2rem",
                      cursor: "pointer",
                    }}
                    onClick={getRawRingsIdHandler}
                  />
                </RingComponent>
              </div>
            );
          })}
      </div>
      <style jsx>
        {`
          .blade {
            height: 14rem;
            width: 2px;
            background: #4173ac;
            position: absolute;
            top: -50%;
            transform: translateY(50%);
            left: -3.5px;
          }
          .container {
            display: flex;
          }
          .input {
            position: absolute;
            top: -1.5rem;
            left: 50%;
            transform: translateX(-50%);
            color: black;
          }
          .ring-value {
            font-weight: 300;
            color: #0e3b20;
          }
          .ring {
            position: absolute;
            color: black;
            top: 9rem;
            left: 50%;
            transform: translateX(-50%);
          }
          .shims {
            position: absolute;
            color: black;
            top: 10rem;
            left: 50%;
            transform: translateX(-50%);
          }
          .shims2 {
            position: absolute;
            color: black;
            top: 11rem;
            left: 50%;
            transform: translateX(-50%);
          }
          .main-container {
            position: relative;
          }
        `}
      </style>
    </>
  );
};

export default RawRingsCreate;
