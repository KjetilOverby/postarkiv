import React from "react";
import SearchComponent from "./SearchComponent";
import Link from "next/link";

const PostarkivStartPage = ({
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
  return (
    <>
      <div className="container">
        <div className="header-container">
          <div className="btn-container">
            <Link href="/">
              <button className="button">Startsiden</button>
            </Link>
            <Link href="/skurliste">
              <button className="button">Skurliste</button>
            </Link>
            <Link href="/create">
              <button className="button">Lag ny post</button>
            </Link>
          </div>
          <h1 className="header">Søk i postarkiv</h1>
        </div>

        <div className="search-component-container">
          <div className="circle"></div>
          <SearchComponent
            postarkiv={postarkiv}
            setGetSearch={setGetSearch}
            getSearch={getSearch}
            setGetID={setGetID}
            getID={getID}
            setHeaderPostOppsett={setHeaderPostOppsett}
            setStartRingsPostOppsett={setStartRingsPostOppsett}
            setRawRingsPostOppsett={setRawRingsPostOppsett}
            setEndRingsPostOppsett={setEndRingsPostOppsett}
            setBladstamme={setBladstamme}
            rawRingsPostOppsett={rawRingsPostOppsett}
            setGetIdforDelete={setGetIdforDelete}
            setCreateDate={setCreateDate}
          />
        </div>
      </div>
      <style jsx>
        {`
          .btn-container {
            display: flex;
            flex-direction: column;
            padding: 0 2rem;
            position: absolute;
            left: 0;
            align-items: flex-start;
          }
          .button {
            border: none;
            background: transparent;
            font-size: 1.2rem;
            font-weight: 100
          }
          .button:hover {
            color: #bababa
          }
          {/* .button {
            margin-bottom: 1rem;
            padding: 1.5rem 0;
            border: none;
            background-image: linear-gradient(120deg, #537255 50%, #90b884 50%);
            font-size: 1rem;
            transition: background 0.3s, color 0.3s;
            background-size: 220%;
          }
          .button:hover {
             {
              /* background-image: linear-gradient(
              to left,
              #537255 0%,
              #90b884 100%
            ); */
            }
            color: #fff;
            cursor: pointer;
            background-position: 100%;
          } */}
          .container {
            display: grid;
            grid-template-rows: 10rem 1fr 5rem;
            grid-template-columns: 10rem 1fr 10rem;
            grid-template-areas:
              "header header header"
              "btn search ."
              ". . .";
            min-height: 100vh;
          }
          .circle {
            height: 90rem;
            width: 90rem;
            background-image: linear-gradient(to right, #434343 0%, black 100%);
            position: absolute;
            border-radius: 50%;
            left: 50%;
          }
          .header-container {
            grid-area: header;
            display: grid;
            place-items: center;
          }
          .header {
            color: #808080;
          }
          .search-component-container {
            background-image: linear-gradient(to right, #434343 0%, black 100%);
            border-radius: 10px;
            position: relative;
            overflow: hidden;
            display: grid;
            place-items: center;
            grid-area: search;
            height: 100%;
            padding-bottom: 5rem;
          }
          @media (max-width: 1620px) {
            .container {
              grid-template-columns: 5rem 1fr 5rem;
            }
            .search-component-container {
              margin-bottom: 10rem;
            }
          }
          @media (max-width: 1100px) {
            .container {
              grid-template-rows: 10rem 15rem 1fr 5rem;
              grid-template-columns: 20rem 1fr 1fr;
              grid-template-areas:
                "header header header"
                "btn btn btn"
                "search search search"
                "search search search";
            }
          }
          @media (max-width: 550px) {
            .container {
              grid-template-rows: 5rem 0rem 1fr 5rem;
            }
            .btn-container {
              top: 5.5rem;
              z-index:100
            }
          }
        `}
      </style>
    </>
  );
};

export default PostarkivStartPage;
