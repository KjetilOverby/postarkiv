import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const SearchComponent = ({
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
  const [searchresult, setSearchresult] = useState();

  const getSearchHandler = (e) => {
    setGetSearch(e.target.value);
  };

  useEffect(() => {
    if (postarkiv) {
      setSearchresult(
        postarkiv.filter((post) => {
          return post.header.includes(getSearch);
        })
      );
    }
  }, [getSearch]);
  const router = useRouter();
  return (
    <>
      <div className="container">
        <div>
          <p className="text">Antall poster: {postarkiv && postarkiv.length}</p>
          <p className="text">
            Antall treff: {searchresult && searchresult.length}
          </p>
        </div>
        <input
          placeholder="Søk i poster"
          className="input"
          onChange={getSearchHandler}
        />

        <div className="search-list-container">
          {searchresult &&
            searchresult.map((result) => {
              const getPostHandler = () => {
                setHeaderPostOppsett(result.header);
                setStartRingsPostOppsett(result.startRings);
                setRawRingsPostOppsett(result.rawInput);
                setEndRingsPostOppsett(result.endRings);
                setBladstamme(result.blades.bladStamme);
                router.push("/postoppsett");
                setGetIdforDelete(result._id);
                setCreateDate(result.date);
              };
              const onMouseOverHandler = () => {
                setGetID(result._id);
                setRawRingsPostOppsett(result.rawInput);
              };
              return (
                <div
                  key={result._id}
                  className="item-container"
                  onMouseOver={onMouseOverHandler}
                  onClick={getPostHandler}
                >
                  <div>
                    <p className="header">{result.header}</p>
                  </div>
                  <div className="show-raw-input-container">
                    {getID === result._id &&
                      rawRingsPostOppsett &&
                      rawRingsPostOppsett.map((inp) => (
                        <p key={inp._id} className="raw-input-text">
                          {inp.input}
                        </p>
                      ))}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <style jsx>
        {`
          .container {
            height: 40vh;
            width: 90%;
            z-index: 100;
          }
          .header {
            color: #41d8e6;
          }

          .input {
            width: 100%;
            padding: 1rem;
            border-radius: 10px;
            border: 1px solid rgba(0, 0, 0, 0.2);
            outline: none;
            margin-bottom: 2rem;
            box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
            font-size: 1.5rem;
            background: #333;
            color: #56d8e9;
          }
          .item-container {
            padding: 0.5rem;
            display: flex;
            border: 1px solid #d8d8d885;
            align-items: center;
            border-radius: 10px;
            margin-bottom: 1rem;
            justify-content: space-between;
            background: #414141;
          }
          .item-container:hover {
            border-radius: 10px;
            cursor: pointer;
            background: rgba(44, 65, 184, 0.2);
          }
          .raw-input-text {
            color: #2b7cc7;
          }
          .raw-input-text::after {
            content: "+";
            color: #a06332;
            margin: 0 0.5rem;
          }
          .raw-input-text:last-child::after {
            content: "";
          }
          .show-raw-input-container {
            display: flex;
          }
          .search-list-container {
            overflow: scroll;

            padding: 2rem;
            box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            border: 1px solid rgba(0, 0, 0, 0.2);
            background: #333333;
            height: 35vh;
          }
          .text {
            font-size: 1.2rem;
            margin-bottom: 1rem;
            color: #a06332;
          }
          @media (max-width: 1100px) {
            .container {
              width: 85%;
            }
          } ;
        `}
      </style>
    </>
  );
};

export default SearchComponent;
