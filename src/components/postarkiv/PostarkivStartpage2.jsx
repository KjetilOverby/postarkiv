import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import HeaderComponent from "../common/HeaderComponent";
import dateFormat from "dateformat";

const PostarkivStartpage2 = ({
  postarkiv,
  setGetSearch,
  getSearch,
  setGetID,
  getID,
  setHeaderPostOppsett,
  setStartRingsPostOppsett,
  setRawRingsPostOppsett,
  setEndRingsPostOppsett,
  setBladstamme,
  rawRingsPostOppsett,
  setGetIdforDelete,
  setCreateDate,
}) => {
  const [filteredData, setFilteredData] = useState();
  const [input, setInput] = useState();
  const router = useRouter();
  useEffect(() => {
    if (postarkiv) {
      setFilteredData(postarkiv.filter((item) => item.header.includes(input)));
    }
  }, [input]);
  return (
    <>
      <div className="container">
        <div className="headerComponentContainer">
          <HeaderComponent />
          <div className="input-container">
            <input
              className="input"
              placeholder="Søk"
              onChange={(e) => setInput(e.target.value)}
            />
            <div>
              <p className="antall">
                Antall poster: {postarkiv && postarkiv.length}
              </p>
              <p className="antall">
                Antall treff: {filteredData && filteredData.length}
              </p>
            </div>
          </div>
        </div>

        {filteredData &&
          filteredData.map((item) => {
            const getPostHandler = () => {
              setHeaderPostOppsett(item.header);
              setStartRingsPostOppsett(item.startRings);
              setRawRingsPostOppsett(item.rawInput);
              setEndRingsPostOppsett(item.endRings);
              setBladstamme(item.blades.bladStamme);
              router.push("/postoppsett");
              setGetIdforDelete(item._id);
              setCreateDate(item.date);
            };
            return (
              <div
                key={item._id}
                className="post-container"
                onClick={getPostHandler}
              >
                <p className="header">{item.header}</p>
                <div className="ring-container">
                  {item.startRings.map((item) => (
                    <p key={item.input._id} className="rings">
                      {item.input}
                    </p>
                  ))}
                  {item.rawInput.map((item) => (
                    <p key={item.input._id} className="rings rawinput">
                      {(item.input + 1.4).toFixed(1)}
                      <p key={item.input._id} className="rawGauge">
                        {item.input}
                      </p>
                    </p>
                  ))}
                  {item.endRings.map((item) => (
                    <p key={item.input._id} className="rings endrings">
                      {item.input}
                    </p>
                  ))}
                </div>
                {item.date && (
                  <p className="date">
                    {dateFormat(item.date, "dd.mm.yyyy HH:MM")}
                  </p>
                )}
              </div>
            );
          })}
      </div>
      <style jsx>
        {`
          .antall {
            color: #797979;
            margin-left: 1rem;
          }
          .container {
            display: grid;
            place-items: center;
          }
          .date {
            color: #fff;
            font-style: italic;
            font-weight: 100;
            font-size: 0.8rem;
          }
          .header {
            margin-bottom: 2rem;
            text-align: center;
            color: white;
          }
          .header-component {
            padding: 2rem 0;
            background-color: #d8d8d8;
            width: 100%;
            margin-bottom: 2rem;
            position: fixed;
            z-index: 100;
          }
          .headerComponentContainer {
            display: grid;
            place-items: center;
            width: 100%;
            background-color: transparent;
            z-index: 100;
            margin-bottom: 5rem;
          }
          .header-fill {
            height: 10rem;
          }
          .input {
            margin-bottom: 2rem;
            height: 3rem;
            font-size: 1.5rem;
            width: 15rem;
            border-radius: 10px;
            border: none;
            padding: 0 1rem;
            font-weight: bold;
            color: grey;
            outline: none;
            background: #c0c0c044;
          }
          .input-container {
            display: flex;
          }
          .header-component-fill {
            height: 10rem;
          }
          .rings {
            background-image: linear-gradient(
              to top,
              #ffffff 0%,
              #cceaf0 1%,
              #78a7b6 26%,
              #d1f4f8 48%,
              #b2dbee 75%,
              #28778f 100%
            );
            border: 1px solid #a3a1a171;
            padding: 0.5rem;
            font-size: 0.8rem;
            height: 4.5rem;
            width: 2.2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 0.2rem;
            border-radius: 3px;
          }
          .endrings {
          }
          .rawinput {
            background-image: linear-gradient(
              to top,
              #ffffff 0%,
              #ece478 1%,
              #7f8833 26%,
              #f3f57f 48%,
              #dce2a5 75%,
              #6f7708 100%
            );
            position: relative;
          }
          .ring-container {
            display: flex;
          }
          .rawGauge {
            position: absolute;
            top: -1.2rem;
            color: #3d9bf3;
          }
          .post-container {
            margin-bottom: 5rem;
            transition: 0.2s;
          }
          .post-container:hover {
            transform: scale(1.05);
            color: blue;
            cursor: pointer;
          }
          @media (max-width: 768px) {
            .input-container {
              flex-direction: column;
            }
            .rings {
              width: 1.5rem;
              font-size: 0.6rem;
              height: 3.5rem;
            }
            .rawGauge {
              font-size: 0.5rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default PostarkivStartpage2;
