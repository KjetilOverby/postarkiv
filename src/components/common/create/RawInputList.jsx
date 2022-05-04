import React from "react";
import raw from "./RawInputObject";

const RawInputList = ({ leftPanelSlide, setRawButtonValue }) => {
  const getRawRings = (e) => {
    setRawButtonValue(e.target.innerHTML);
    setTimeout(() => {
      setRawButtonValue("");
    }, 100);
  };
  return (
    <>
      <div className={`main-container ${leftPanelSlide}`}>
        <div className="top-container">
          <h1 className="header-top">Legg til råmål</h1>
          <form className="form">
            <label>Skriv inn råmål</label>
            <input placeholder="Råmål" />
            <button>Legg til</button>
          </form>
        </div>
        <div className={`container`}>
          <div>
            <p className="list-header">Nom</p>
            {raw.map((item) => {
              return (
                <p key={item.nom} className="nom nominell">
                  {item.nom}
                </p>
              );
            })}
          </div>
          <div>
            <p className="list-header">18%</p>
            {raw.map((item) => {
              return (
                <p onClick={getRawRings} key={item.nom} className="nom">
                  {item.r18}
                </p>
              );
            })}
          </div>

          <div>
            <p className="list-header">12%</p>
            {raw.map((item) => {
              return (
                <p onClick={getRawRings} key={item.nom} className="nom">
                  {item.r12}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .main-container {
            grid-area: right;

            background-color: #ffffff;
            transform: translateX(30rem);
            overflow: scroll;
            height: 100vh;
            padding-top: 1rem;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 15rem 1fr;
          }
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            padding: 0 8rem;
            place-items: center;
          }
          .container-open {
            animation: slide 0.8s forwards;
          }
          .container-closed {
            animation: slideBack 0.8s forwards;
          }
          .header {
            font-weight: 100;
          }
          .header-top {
          }
          .form {
            display: flex;
            flex-direction: column;
            margin: 2rem 0;
          }
          .list-header {
            color: #307dc5;
            font-weight: bold;
            border-bottom: 1px solid #333;
          }
          .nom {
            background-color: #ffffff;
            padding: 0.2rem;
            margin-bottom: 0.5rem;
            width: 3rem;
            display: grid;
            place-items: center;
            border-bottom: 1px solid #333;
          }
          .nominell {
            color: blue;
          }
          .nom:hover {
            cursor: pointer;
            background-color: #ce3737;
            color: #fff;
          }
          .top-container {
            display: grid;
            place-items: center;
          }
          @keyframes slide {
            0% {
              transform: translateX(30rem);
            }
            100% {
              transform: translateX(0rem);
            }
          }
          @keyframes slideBack {
            0% {
              transform: translateX(0rem);
            }
            100% {
              transform: translateX(30rem);
            }
          }
        `}
      </style>
    </>
  );
};

export default RawInputList;
