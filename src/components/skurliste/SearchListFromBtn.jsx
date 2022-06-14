import React, { useState } from "react";
import { useRouter } from "next/router";
import ButtonComponent from "../common/buttons/ButtonComponent";
import styles from "../../../styles/skurlisteMobil.module.css";

const SearchListFromBtn = ({
  filteredPostList,
  setPostOppsett,
  setHeaderPostOppsett,
  setStartRingsPostOppsett,
  setRawRingsPostOppsett,
  setEndRingsPostOppsett,
  setBladstamme,
  setOpenSearchList,
  searchAllBlades,
  setCreateDate,
  setGetIdForEdit,
  lists,
  setWriteData,
  writeData,
  postOppsett,
}) => {
  // new test
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
        <h1>
          {filteredPostList &&
            filteredPostList.map((item) => {
              const getPostOppsett = () => {
                setHeaderPostOppsett(item.header);
                setStartRingsPostOppsett(item.startRings);
                setRawRingsPostOppsett(item.rawInput);
                setEndRingsPostOppsett(item.endRings);
                setBladstamme(item.blades.bladStamme);
                setCreateDate(item.date);

                router.push("/postoppsett");
                setOpenSearchList(false);
                setGetIdForEdit(item._id);

                if (postOppsett) {
                  setWriteData(!writeData);
                }
              };

              return (
                <div
                  key={item.id}
                  className="post-container"
                  onClick={getPostOppsett}>
                  <p className={styles.header}>{item.header}</p>
                  <div className="ring-container">
                    {item.startRings.map((item) => (
                      <p key={item.input._id} className={styles.rings}>
                        {item.input}
                      </p>
                    ))}
                    {item.rawInput.map((item) => (
                      <p
                        key={item.input._id}
                        className={`${styles.rings} rawinput`}>
                        {(item.input + 1.4).toFixed(1)}
                        <p key={item.input._id} className="rawGauge">
                          {item.input}
                        </p>
                      </p>
                    ))}
                    {item.endRings.map((item) => (
                      <p
                        key={item.input._id}
                        className={`${styles.rings} endrings`}>
                        {item.input}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
        </h1>
        <div className="option-btn-container">
          <ButtonComponent
            className="option-btn"
            func={() => setOpenSearchList(false)}
            title="LUKK"
            type="outline"
          />

          <ButtonComponent
            title="søk alle blad"
            className="option-btn"
            func={searchAllBlades}
          />
        </div>
      </div>
      <style jsx>
        {`
          .container {
            background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);
            background-blend-mode: multiply, multiply;
            position: fixed;
            padding: 2rem;
            margin-left: 1rem;
            margin-top: 1rem;
            border-radius: 5px;
            box-shadow: 10px 10px 50px black;
            animation: bounceInLeft 0.7s forwards;
            overflow: scroll;
            max-height: 80%;
            display: flex;
            flex-direction: column;
            align-items: center;
            scrollbar-width: none;
            overflow-y: hidden;
            overflow-x: hidden;
          }
          .header {
            margin-bottom: 2rem;
            text-align: center;
            color: #415a61;
            font-size: 1.2rem;
          }

          .btn {
            border: none;
            padding: 0.5rem;
            color: #1d1475;
            margin: 1rem;
            transition: 0.5s;
            border-radius: 5px;
            background: #ffffff;
            font-weight: 300;
          }
          .btn:hover {
            cursor: pointer;
            background-color: #8fd1e7;
          }

          .header-component {
            padding: 2rem 0;
            background-color: #d8d8d8;
            width: 100%;
            margin-bottom: 2rem;
            position: fixed;
            z-index: 100;
          }
          .header-component-fill {
            height: 10rem;
          }
          .rings {
            background-image: linear-gradient(
              to top,
              #ffffff 0%,
              lightgrey 1%,
              #b6b6b6 26%,
              #efefef 48%,
              #d9d9d9 75%,
              #959595 100%
            );
            background-blend-mode: screen;
            border: 1px solid #a3a1a171;
            padding: 0.5rem;
            font-size: 0.9rem;
            font-weight: 300;
            height: 4.5rem;
            width: 2.3rem;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 0.2rem;
            border-radius: 5px;
            box-shadow: 2px 2px 10px grey;
          }
          .endrings {
          }
          .rawinput {
            background-image: linear-gradient(
              to top,
              #ffffff 0%,
              rgb(131, 173, 116) 1%,
              #bedaba 26%,
              #efefef 48%,
              #d9d9d9 75%,
              #77c57a 100%
            );
            position: relative;
            color: #333;
          }
          .ring-container {
            display: flex;
          }
          .rawGauge {
            position: absolute;
            top: -1.2rem;
            color: #fff;
          }
          .post-container {
            margin-bottom: 5rem;
            transition: 0.1s;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .post-container:hover {
            cursor: pointer;
            transform: scale(1.05);
          }
          .option-btn-container {
            display: flex;
            width: 18rem;
            justify-content: space-between;
            padding-left: 1rem;
          }
          .option-btn {
            width: 8rem;
            height: 2rem;
          }
          @keyframes move {
            0% {
              transform: translateX(-20rem);
            }
            100% {
              transform: translateX(0);
            }
          }
          @keyframes bounceInLeft {
            0%,
            60%,
            75%,
            90%,
            100% {
              -webkit-transition-timing-function: cubic-bezier(
                0.215,
                0.61,
                0.355,
                1
              );
              transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
            }

            0% {
              opacity: 0;
              -webkit-transform: translate3d(-3000px, 0, 0);
              transform: translate3d(-3000px, 0, 0);
            }

            60% {
              opacity: 1;
              -webkit-transform: translate3d(25px, 0, 0);
              transform: translate3d(25px, 0, 0);
            }

            75% {
              -webkit-transform: translate3d(-10px, 0, 0);
              transform: translate3d(-10px, 0, 0);
            }

            90% {
              -webkit-transform: translate3d(5px, 0, 0);
              transform: translate3d(5px, 0, 0);
            }

            100% {
              -webkit-transform: none;
              transform: none;
            }
          }
        `}
      </style>
    </>
  );
};

export default SearchListFromBtn;
