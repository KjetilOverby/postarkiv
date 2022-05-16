import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import RingComponent from "./RingComponent";
import { RiDeleteBin6Line } from "react-icons/ri";

const StartRingsCreate = ({
  startFillRings,
  setStartRingSum,
  startFillringsCollection,
  setStartFillringsCollection,
  setGetId,
  getId,
  update,
  setUpdate,
  startFillRingsID,
}) => {
  const [copyID, setCopyID] = useState();
  const [newUpdate, setNewUpdate] = useState();

  useEffect(() => {
    if (startFillringsCollection) {
      setStartFillringsCollection(startFillringsCollection.reverse());
    }
  }, [startFillRings]);

  useEffect(() => {
    if (startFillringsCollection === undefined) {
      setStartFillringsCollection("");
    } else if (startFillRings) {
      setStartFillringsCollection([
        ...startFillringsCollection,
        {
          input: startFillRings,
          id: uuidv4(),
        },
      ]);
    }
    setNewUpdate(Math.random());
  }, [startFillRings]);
  useEffect(() => {
    startFillringsCollection;
  }, [newUpdate]);

  useEffect(() => {
    if (startFillringsCollection) {
      const remove = startFillringsCollection.filter((item) =>
        item.id ? item.id !== getId : item._id !== copyID
      );
      setStartFillringsCollection(remove);
    }
  }, [getId, update]);

  useEffect(() => {
    if (startFillringsCollection) {
      setStartRingSum(
        startFillringsCollection.reduce(
          (num, { input }) => Number(num) + Number(input),
          0
        )
      );
    }
  }, [startFillringsCollection]);

  return (
    <>
      <div className="container">
        <div className="start-fillrings-container">
          {startFillringsCollection &&
            startFillringsCollection.map((item) => {
              const getStartFillRingsIdHandler = () => {
                setGetId(item.id ? item.id : item._id);
                setCopyID(item._id);
                setUpdate(Math.random());
              };

              return (
                <>
                  <RingComponent
                    key={item.id}
                    color={"linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)"}>
                    <h4 className="value">{item.input}</h4>

                    <div style={{ color: "#333" }}>foran</div>
                    <RiDeleteBin6Line
                      onClick={getStartFillRingsIdHandler}
                      style={{ fontSize: "1.2rem", color: "red" }}
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

export default StartRingsCreate;
