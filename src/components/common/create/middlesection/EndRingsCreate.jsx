import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import RingComponent from "./RingComponent";
import { RiDeleteBin6Line } from "react-icons/ri";

const EndRingsCreate = ({
  endFillRingsCollection,
  setEndFillRingsCollection,
  endFillRings,
  setGetId,
  getId,
  setUpdate,
  update,
  setEndRingSum,
}) => {
  const [newUpdate, setNewUpdate] = useState();
  useEffect(() => {
    if (endFillRingsCollection) {
      setEndFillRingsCollection(endFillRingsCollection.reverse());
    }
  }, [endFillRings]);

  useEffect(() => {
    if (endFillRingsCollection === undefined) {
      setEndFillRingsCollection(null);
    } else if (endFillRings) {
      setEndFillRingsCollection([
        ...endFillRingsCollection,
        {
          input: endFillRings,
          id: uuidv4(),
        },
      ]);
    }
    setNewUpdate(Math.random());
  }, [endFillRings]);
  useEffect(() => {
    endFillRingsCollection;
  }, [newUpdate]);

  useEffect(() => {
    if (endFillRingsCollection) {
      const remove = endFillRingsCollection.filter((item) => item.id !== getId);
      setEndFillRingsCollection(remove);
    }
  }, [getId, update]);

  useEffect(() => {
    if (endFillRingsCollection) {
      setEndRingSum(
        endFillRingsCollection.reduce(
          (num, { input }) => Number(num) + Number(input),
          0
        )
      );
    }
  }, [endFillRingsCollection]);

  return (
    <>
      <div className="container">
        <div className="start-fillrings-container">
          {endFillRingsCollection &&
            endFillRingsCollection.map((item) => {
              const getEndFillRingsIdHandler = () => {
                setGetId(item.id);
                setUpdate(Math.random());
              };
              return (
                <>
                  <RingComponent
                    key={item.id}
                    color={"linear-gradient( #d7d2cc 0%, #304352 100%)"}
                  >
                    <h4 className="value">{item.input}</h4>
                    <div>bak</div>
                    <RiDeleteBin6Line
                      onClick={getEndFillRingsIdHandler}
                      style={{ fontSize: "1.2rem", color: "#df7e7e" }}
                    />
                  </RingComponent>
                </>
              );
            })}
        </div>
      </div>
      <style jsx>
        {`
          .start-fillrings-container {
            display: flex;
          }
          .value {
            font-weight: 300;
            color: #232e3d;
          }
        `}
      </style>
    </>
  );
};

export default EndRingsCreate;
