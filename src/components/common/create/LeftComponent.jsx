import React from "react";
import Link from "next/link";
import { useAuth0 } from "@auth0/auth0-react";

const LeftComponent = ({
  setLeftPanelSlide,
  setEndringPanel,
  saveCreatedPost,
  setStartRingsPanel,
  setRingShimsPanel,
  setRingShimsPanel2,
}) => {
  const { user, isAuthenticated } = useAuth0();
  const rawInputBtn = () => {
    setLeftPanelSlide("container-open");
  };
  const startRingInput = () => {
    setLeftPanelSlide("container-closed");
    setStartRingsPanel(true);
    setRingShimsPanel(false);
    setRingShimsPanel2(false);
    setEndringPanel(false);
  };
  const endRingInput = () => {
    setLeftPanelSlide("container-closed");
    setStartRingsPanel(false);
    setEndringPanel(true);
    setRingShimsPanel(false);
    setRingShimsPanel2(false);
  };
  return (
    <>
      <div className="container">
        <button onClick={rawInputBtn} className="btn">
          Legg til råmål
        </button>
        <button onClick={startRingInput} className="btn">
          Legg til utfylling foran
        </button>
        <button onClick={endRingInput} className="btn">
          Legg til utfylling bak
        </button>
        {user && user.sub === process.env.USER_SUB && (
          <button onClick={saveCreatedPost} className="btn">
            Lagre post
          </button>
        )}
        <hr style={{ width: "80%", color: "#f8f8f899" }} />
        <Link href="/">
          <button className="btn link">Startsiden</button>
        </Link>
        <Link href="/skurliste">
          <button className="btn link">Skurliste</button>
        </Link>
        <Link href="/postarkiv">
          <button className="btn link">Søk i postarkiv</button>
        </Link>
      </div>
      <style jsx>
        {`
          .container {
            grid-area: left;
            background: #ffffff;
            border-right: 1px solid #bebebe;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 2rem;
          }
          .btn {
            width: 11rem;
            height: 3rem;
            font-size: 0.9rem;
            border: none;
            margin-bottom: 1rem;
            transition: background 0.3s, color 0.3s;
            background: linear-gradient(120deg, #87aaaf 50%, #4d6468 50%);
            background-size: 220%;
          }
          .btn:hover {
            cursor: pointer;
            background-position: 100%;
            color: white;
          }
          .link {
            background: #7ea9e0;
            transition: background 0.3s, color 0.3s;
            background: linear-gradient(120deg, #7ea9e0 50%, #364649 50%);
            background-size: 220%;
          }
          .link:hover {
            cursor: pointer;
            background-position: 100%;
            color: white;
          }
        `}
      </style>
    </>
  );
};

export default LeftComponent;
