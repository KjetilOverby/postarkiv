import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import Link from "next/link";
import { useRouter } from "next/router";

const MenuBtn = ({ deleteBtn, setBtnCopyPost, btnCopyPost, setPost2 }) => {
  const router = useRouter();
  const [move, setMove] = useState("menu-box-animation-back");

  const copyPostHandler = () => {
    setBtnCopyPost(!btnCopyPost);
    router.push("/create");
  };

  const menuHandler = () => {
    if (move === "menu-box-animation-back") {
      setMove("menu-box-animation");
    } else if (move === "menu-box-animation") {
      setMove("menu-box-animation-back");
    }
  };
  return (
    <>
      <div className="container">
        <div className="icon-container">
          <BiMenu
            onClick={menuHandler}
            style={{ color: "white", fontSize: "1.5rem" }}
          />
        </div>
        <div className={`menu-box ${move} }`}>
          <div onClick={() => setPost2("")}>
            <Link href="/postarkiv">
              <p className="tab">Søk i postarkiv</p>
            </Link>
          </div>
          <Link href="/">
            <p className="tab">Startsiden</p>
          </Link>
          <Link href="editpost">
            <p className="tab">Rediger post</p>
          </Link>
          <p onClick={copyPostHandler} className="tab">
            Kopier til ny post
          </p>
          <p onClick={deleteBtn} className="tab">
            Slett post
          </p>
        </div>
      </div>
      <style jsx>{`
        .container {
        }
        .icon-container {
          position: absolute;
          background: #403735;
          width: 3rem;
          height: 3rem;
          top: 2rem;
          left: 2rem;
          z-index: 1000;
          display: grid;
          place-items: center;
          border-radius: 50%;
        }
        .icon-container:hover {
          cursor: copy;
        }
        .menu-box {
          position: absolute;
          color: white;
          top: 5rem;
          left: -15rem;
          z-index: 1000;
          margin: 3rem 0 0 0;
          background: grey;
          padding: 3rem;
          width: 15rem;
        }

        .menu-box-animation {
          animation: move 0.5s forwards;
        }
        .menu-box-animation-back {
          animation: moveBack 0.5s forwards;
        }
        .tab {
          text-transform: uppercase;
          margin-bottom: 1rem;
          transition: 0.5s;
        }
        .tab:hover {
          cursor: pointer;
          color: black;
        }

        @keyframes move {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(15rem);
          }
        }
        @keyframes moveBack {
          0% {
            transform: translateX(15rem);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default MenuBtn;
