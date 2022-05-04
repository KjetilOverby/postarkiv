import React, { useState } from "react";
import raw from "./RawInputObject";

const RawInputList2 = ({
  leftPanelSlide,
  setRawButtonValue,
  bladeDimension,
}) => {
  const getRawRings = (e) => {
    if (getInputValue) {
      setRawButtonValue(getInputValue);
    }
    if (bladeDimension.bladStamme) {
      if (e.target.innerHTML === "-") {
        setRawButtonValue(null);
      } else {
        setRawButtonValue(e.target.innerHTML);
      }

      setTimeout(() => {
        setRawButtonValue("");
      }, 100);
    } else {
      alert("Du må legge inn bladtykkelse før du kan legge inn råmål");
    }
  };

  const submitInputValue = () => {
    if (bladeDimension.bladStamme) {
      setRawButtonValue(getInputValue);
      setTimeout(() => {
        setRawButtonValue("");
      }, 100);
    } else {
      alert("Du må legge inn bladtykkelse før du kan legge inn råmål");
    }
  };
  const [getInputValue, setGetInputValue] = useState();
  return (
    <>
      <div className={`main-container ${leftPanelSlide}`}>
        <div className="container">
          <div>
            <h1 className="top-header">Legg til råmål</h1>
            <div className="form">
              <label>Skriv inn råmål</label>
              <input
                onChange={(e) => setGetInputValue(e.target.value)}
                placeholder="Råmål"
              />
              <button onClick={submitInputValue}>Legg til</button>
            </div>
          </div>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th className="nominell">nom</th>
                  <th className="nom18">18%</th>
                  <th className="nom12">12%</th>
                </tr>
                <tr>
                  <td>
                    {raw.map((item) => {
                      return (
                        <p key={item.id} className="nom nominell">
                          {item.nom}
                        </p>
                      );
                    })}
                  </td>
                  <td>
                    {raw.map((item) => {
                      return (
                        <p
                          onClick={getRawRings}
                          key={item.id}
                          className="nom nom18"
                        >
                          {item.r18}
                        </p>
                      );
                    })}
                  </td>
                  <td>
                    {raw.map((item) => {
                      return (
                        <p
                          onClick={getRawRings}
                          key={item.id}
                          className="nom nom12"
                        >
                          {item.r12}
                        </p>
                      );
                    })}
                  </td>
                  <td>
                    {raw.map((item) => {
                      return (
                        <p
                          onClick={getRawRings}
                          key={item.id}
                          className="nom nom12"
                        >
                          {item.r12s}
                        </p>
                      );
                    })}
                  </td>
                  <td>
                    {raw.map((item) => {
                      return (
                        <p
                          onClick={getRawRings}
                          key={item.id}
                          className="nom nom12"
                        >
                          {item.r12s1}
                        </p>
                      );
                    })}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
          }
          .table-container {
            background-color: #bed8c8;
            border-radius: 5px
          }

          td {
           
           
          }
          p {
           
            padding: 5px;
            border-radius: 5px
          }
          .main-container {
            grid-area: right;

            background-color: #ffffff;
            transform: translateX(30rem);
            overflow: scroll;
            height: 100vh;
            padding-top: 1rem;
            display: flex
          }
          .container {
            display: flex;
            flex-direction: column;
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
            font-weig#a34949d;
           
          }
          .nom {
            background-color: #ffffff;
            padding: 0.2rem;
            margin-bottom: 0.5rem;
            width: 3rem;
            display: grid;
            place-items: center;
           
          }
          .nom18 {
            color: #3771df;
          }
          .nom12 {
            color: #864040;
          }
          .nominell {
            color: #636363;
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
          .top-header {
            color: #fd3636;
            font-weight: 300;
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

export default RawInputList2;
