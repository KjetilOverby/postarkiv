import React, { useEffect, useState, useContext } from "react";
import { AppData } from "../../contexts/AppData";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { ImInfo } from "react-icons/im";
import LoginButton from "../auth/LoginButton";
import Logout from "../auth/Logout";
var dateFormat = require("dateformat");
import Users from "../../../utils/users";

//https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1415&q=80
//https://images.unsplash.com/photo-1545241201-fee9df605ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80
//https://images.unsplash.com/photo-1487452066049-a710f7296400?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80
//https://images.unsplash.com/photo-1604716053460-3f66248bf8de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80
//https://images.unsplash.com/photo-1604715892639-52a6cafba47e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80

//https://images.unsplash.com/photo-1503494099816-316e7ebbebd4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80
//https://images.unsplash.com/photo-1569063386798-345908ef9a62?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80

//https://images.unsplash.com/photo-1600873335384-b4abf761d527?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=964&q=80
//https://images.unsplash.com/photo-1518693800412-ad92111a1d46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80
//https://images.unsplash.com/photo-1619289329471-79e82de62fc7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80
//https://images.unsplash.com/photo-1551732998-9573f695fdbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80

//https://images.unsplash.com/photo-1571596825787-640e72bbb2f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1355&q=80
//https://images.unsplash.com/photo-1593240904423-50fafbed5946?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80
//https://images.unsplash.com/photo-1590833058871-ed1c9655a981?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80

const StartPage = ({
  dated,
  antallSum,
  kubikkSum,
  background,
  setRandomNumber,
  randomNumber,
  user,
}) => {
  const { lists } = useContext(AppData);
  const [color, setColor] = useState();
  const upRandomNumber = () => {
    setRandomNumber(randomNumber + 1);
    if (randomNumber === 11) {
      setRandomNumber(0);
    }
  };
  const downRandomNumber = () => {
    setRandomNumber(randomNumber - 1);
    if (randomNumber === 0) {
      setRandomNumber(11);
    }
  };
  useEffect(() => {
    if (randomNumber === 0) {
      setColor("orange");
    } else if (randomNumber === 1) {
      setColor("#178a7a");
    } else if (randomNumber === 2) {
      setColor("#b32fc4");
    } else if (randomNumber === 3) {
      setColor("#58d7db");
    } else if (randomNumber === 4) {
      setColor("#cccf42");
    } else if (randomNumber === 5) {
      setColor("#f578ef");
    } else if (randomNumber === 6) {
      setColor("orangered");
    } else if (randomNumber === 7) {
      setColor("#8bdff0");
    } else if (randomNumber === 8) {
      setColor("#4598a8");
    } else if (randomNumber === 9) {
      setColor("#e36f2b");
    } else if (randomNumber === 10) {
      setColor("#2470b3");
    } else if (randomNumber === 11) {
      setColor("#961ca3");
    }
  }, [randomNumber]);
  return (
    <>
      <div className="container">
        <div>
          <div className="arrow-container">
            <IoIosArrowBack
              onClick={downRandomNumber}
              style={{ color: "white", cursor: "pointer" }}
            />
            <IoIosArrowForward
              onClick={upRandomNumber}
              style={{ color: "white", cursor: "pointer" }}
            />
            <ImInfo />
          </div>
          <h1 className="header">
            Skurlister <span style={{ color: color }}>Moelven Våler</span>
          </h1>
          <p className="text">
            Sist oppdatert: {dateFormat(dated, "dd.mm.yyyy HH:MM")}
          </p>
          <p className="text">Skurplaner: {lists && lists.length} </p>
          <p className="text">
            Stokker:{" "}
            {antallSum &&
              antallSum
                .reduce((a, b) => a + b, 0)
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ")}
          </p>
          <p className="text">
            m3:{" "}
            {antallSum &&
              kubikkSum
                .reduce((a, b) => a + b, 0)
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ")}
          </p>
        </div>
        <div className="btn-container">
          <Link href="/skurliste">
            <button className="button">Skurplan</button>
          </Link>
          {user && user.sub === Users && (
            <Link href="/rediger">
              <button className="button">Rediger</button>
            </Link>
          )}
          <Link href="/postarkiv">
            <button className="button">Postarkiv</button>
          </Link>

          <button className="button">
            <LoginButton />
            <Logout />
          </button>
        </div>
        {user && user.sub === Users && (
          <div className="userContainer">
            <p className="bottom-text">
              innlogged som: {user.name} * email: {user.email} * © copyright
              2021
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        .arrow-container {
          position: absolute;
          left: 0;
        }

        .container {
          background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
            url(${background});
          min-height: 100vh;
          width: 100vw;
          background-size: cover;
          display: grid;
          justify-items: center;
          grid-template-rows: 20rem 10rem 1fr;
          position: relative;
        }
        .button {
          height: 5rem;
          width: 45rem;
          font-size: 1.5rem;
          background: rgba(250, 250, 250, 0.082);
          border: none;
          color: white;
          border-radius: 5px;
          transition: background 0.5s;
          margin-bottom: 2rem;
        }
        .button:hover {
          background: rgba(250, 250, 250, 0.4);
          cursor: pointer;
        }
        .btn-container {
          display: flex;
          flex-direction: column;
          height: 25rem;
        }
        .header {
          color: white;
          font-size: 6rem;
          margin-top: 5rem;
        }
        .text {
          color: white;
        }
        .userContainer {
          position: absolute;
          bottom: 0;
          left: 0;
          color: #bdbdbd;
          animation: move 4s forwards;
          animation-timing-function: linear;
        }
        @keyframes move {
          0% {
            transform: translateX(-40rem);
          }
          100% {
            transform: translateX(0rem);
          }
        }
        @media (max-width: 1360px) {
          .header {
            font-size: 5rem;
          }
        }
        @media (max-width: 1000px) {
          .header {
            font-size: 4rem;
          }
        }
        @media (max-width: 800px) {
          .header {
            font-size: 2.5rem;
          }
          .button {
            width: 30rem;
          }
        }
        @media (max-width: 550px) {
          .container {
          }
          .header {
            font-size: 1.5rem;
          }
          .button {
            width: 22rem;
            height: 3rem;
            font-size: 1.2rem;
            font-weight: 100;
          }
          .btn-container {
            margin-top: -8rem;
          }
        }
      `}</style>
    </>
  );
};

export default StartPage;
