import React, { useState, useEffect, useContext } from "react";
import { AppData } from "../../contexts/AppData";
import SearchListFromBtn from "./SearchListFromBtn";
import { useRouter } from "next/router";
var dateFormat = require("dateformat");
import { BsFillXSquareFill } from "react-icons/bs";
import { BiBlock } from "react-icons/bi";
import { ImMobile } from "react-icons/im";
import Hidden from "../common/Hidden";

const SkurlisteComponent = ({
  postList,
  setFilteredPostList,
  filteredPostList,
  setPostOppsett,
  setHeaderPostOppsett,
  setStartRingsPostOppsett,
  setRawRingsPostOppsett,
  setEndRingsPostOppsett,
  setBladstamme,
  setOpenSearchList,
  openSearchList,
  setOpenDeleteModal,
  setGetIdField,
  getIdField,
  deleteFieldHandler,
  showEditTools,
  setShowEditTools,
  kubikkSum,
  antallSum,
  saveUpdateField,
  setGetProgress,
  setEditMode,
  setEditModeColor,
  setCreateDate,
  setGetIdForEdit,
  setPostBredde,
  post2,
  setPost2,
  setAntallStokk,
  setAntallKubikk,
  setPostKlasse,
  setPostTreslag,
  setPostklType,
  setPostklBordMkv,
  setPostAnm2,
}) => {
  const { lists } = useContext(AppData);
  const [percent, setPercent] = useState();
  const [blade, setBlade] = useState();
  const [redStatusColor, setRedStatusColor] = useState();
  useEffect(() => {
    if (postList) {
      setFilteredPostList(
        postList.filter((item) =>
          item.header.includes(`${post2}-${percent}%-${blade}`)
        )
      );
    }
  }, [post2]);

  const searchAllBlades = () => {
    setFilteredPostList(
      postList.filter((item) => item.header.includes(`${post2}-${percent}%`))
    );
  };

  const router = useRouter();

  return (
    <>
      {openSearchList && (
        <SearchListFromBtn
          filteredPostList={filteredPostList}
          setPostOppsett={setPostOppsett}
          setHeaderPostOppsett={setHeaderPostOppsett}
          setStartRingsPostOppsett={setStartRingsPostOppsett}
          setRawRingsPostOppsett={setRawRingsPostOppsett}
          setEndRingsPostOppsett={setEndRingsPostOppsett}
          setBladstamme={setBladstamme}
          setOpenSearchList={setOpenSearchList}
          searchAllBlades={searchAllBlades}
          setCreateDate={setCreateDate}
          setGetIdForEdit={setGetIdForEdit}
          setAntallStokk={setAntallStokk}
          lists={lists}
        />
      )}
      <Hidden size="small-down">
        {lists ? (
          <div
            className="container"
            style={
              router.pathname === "/rediger"
                ? { gridTemplateColumns: "repeat(16, auto)" }
                : { gridTemplateColumns: "repeat(15, auto" }
            }>
            {router.pathname === "/rediger" && (
              <div className="tablesquare tablesquareTop">
                <p className="square-text"></p>
              </div>
            )}
            <div className="tablesquare tablesquareTop">
              <p className="square-text">Treslag</p>
            </div>
            <div className="tablesquare tablesquareTop">
              <p className="square-text">Kl</p>
            </div>

            <div className="tablesquare tablesquareTop">
              <p className="square-text">Kl. grense</p>
            </div>

            <div className="tablesquare tablesquareTop">
              <p className="square-text">Ant</p>
            </div>
            <div className="tablesquare tablesquareTop">
              <p className="square-text">m3</p>
            </div>
            <div className="tablesquare tablesquareTop">
              <p className="square-text">Status</p>
            </div>
            <div className="tablesquare tablesquareTop">
              <p className="square-text">Post</p>
            </div>
            <div className="tablesquare tablesquareTop">
              <p className="square-text">X-log</p>
            </div>
            <div className="tablesquare tablesquareTop">
              <p className="square-text">%</p>
            </div>
            <div className="tablesquare tablesquareTop">
              <p className="square-text">Anm</p>
            </div>
            <div className="tablesquare tablesquareTop">
              <p className="square-text">VS66</p>
            </div>
            <div className="tablesquare tablesquareTop">
              <p className="square-text">VS66 bredder</p>
            </div>
            <div className="tablesquare tablesquareTop">
              <p className="square-text">MKV</p>
            </div>
            <div className="tablesquare tablesquareTop">
              <p className="square-text">MKV bord</p>
            </div>
            <div className="tablesquare tablesquareTop">
              <p className="square-text">MKV bredder</p>
            </div>

            {lists &&
              lists.map((item) => {
                const getPostHandler = () => {
                  setPost2(item.post);
                  setPercent(item.prosent);
                  setBlade(item.blad);
                  setOpenSearchList(true);
                  setPostBredde(item.breddePost);
                  setAntallStokk(item.ant);
                  setAntallKubikk(item.m3);
                  setPostKlasse(item.klasse);
                  setPostTreslag(item.treslag);
                  setPostklType(item.klType);
                  setPostklBordMkv(item.anm);
                  setPostAnm2(item.anm2);
                };
                const openDeleteModal = () => {
                  setOpenDeleteModal(true);
                  setGetIdField(item._id);
                };
                const openEditToolsHandler = () => {
                  setGetIdField(item._id);
                  setShowEditTools(true);
                  setEditMode(true);
                  setEditModeColor("edit-mode-color");
                };
                const cancelEditMode = () => {
                  setEditMode(false);
                  setShowEditTools(false);
                  setEditModeColor("");
                };
                const setRunningHandler = (e) => {
                  setGetProgress(e.target.value);
                };
                const setFinishedHandler = (e) => {
                  setGetProgress(e.target.value);
                };
                const resetRadio = () => {
                  setGetProgress("");
                };

                return (
                  <>
                    {router.pathname === "/rediger" && (
                      <div key={item._id} className="tablesquare btn-container">
                        {showEditTools && item._id === getIdField && (
                          <>
                            <button
                              onClick={saveUpdateField}
                              className="buttons">
                              Lagre
                            </button>
                            <button
                              onClick={cancelEditMode}
                              className="buttons">
                              Avbryt
                            </button>
                            <div>
                              <input
                                type="radio"
                                name="status"
                                onClick={resetRadio}
                              />
                              <input
                                type="radio"
                                name="status"
                                value="running"
                                onChange={setRunningHandler}
                              />
                              <input
                                type="radio"
                                name="status"
                                value="finished"
                                onChange={setFinishedHandler}
                              />
                            </div>
                          </>
                        )}
                        {!showEditTools && (
                          <>
                            <button
                              onClick={openEditToolsHandler}
                              className="buttons">
                              Rediger
                            </button>
                            <button
                              onClick={openDeleteModal}
                              className="buttons">
                              Slett
                            </button>
                          </>
                        )}
                      </div>
                    )}
                    <div
                      key={item.header}
                      className={`tablesquare klContainer square-text ${item.progress}`}>
                      <p
                        className={`treslag square-text ${
                          item.treslag === "Gran" ? "gran" : "furu"
                        }`}>
                        {item.treslag}
                      </p>
                      <Hidden size="medium-down">
                        <p>{dateFormat(item.date, "dd.mm.yyyy HH:MM:ss")}</p>
                      </Hidden>
                    </div>
                    <div
                      key={item.header}
                      className={`tablesquare klContainer square-text
                    ${item.progress} 
                     `}>
                      <p>{item.klasse}</p>
                      {item.klType && (
                        <p
                          className={
                            item.progress === "finished" ? "" : "klType"
                          }>
                          {item.klType}
                        </p>
                      )}
                    </div>

                    <div
                      key={item.header}
                      className={`tablesquare square-text ${item.progress}`}>
                      <p>{item.klgr}</p>
                    </div>

                    <div
                      key={item.header}
                      className={`tablesquare square-text ${item.progress}`}>
                      <p>{item.ant}</p>
                    </div>
                    <div
                      key={item.header}
                      className={`tablesquare square-text ${item.progress}`}>
                      <p>{item.m3}</p>
                    </div>
                    <div
                      key={item.header}
                      className={`tablesquare  square-text ${item.progress}  ${
                        item.status === "stopp" ? "statusSquare" : ""
                      }`}>
                      <p
                        className={`${
                          item.status === "stopp" ? "stop-text" : ""
                        }`}>
                        {item.status}
                      </p>
                    </div>
                    <div
                      key={item.header}
                      className={`tablesquare postSquare square-text ${item.progress}`}
                      postSquare
                      onClick={getPostHandler}>
                      <p>{item.post}</p>
                      <p>x{item.breddePost}</p>
                    </div>
                    <div
                      key={item.header}
                      className={` square-text tablesquare ${item.progress}`}>
                      <p>{item.xLog}</p>
                    </div>
                    <div
                      key={item.header}
                      className={` square-text tablesquare ${item.progress}`}>
                      <p>{item.prosent}</p>
                    </div>
                    <div
                      key={item.header}
                      className={`tablesquare anmContainer square-text ${item.progress}`}>
                      <p className={item.progress === "finished" ? "" : "anm"}>
                        {item.anm}
                      </p>
                      {item.anm2 && (
                        <p
                          className={item.progress === "finished" ? "" : "anm"}>
                          {item.anm2}
                        </p>
                      )}
                    </div>
                    <div
                      key={item.header}
                      className={`tablesquare vs66 square-text ${item.progress}`}>
                      {item.vs66 ? (
                        <p>{item.vs66}</p>
                      ) : (
                        <BiBlock
                          style={{ color: "#b34e4e", fontSize: "1.5rem" }}
                        />
                      )}
                      {item.vs66Xtra && <p>{item.vs66Xtra}</p>}
                    </div>
                    <div
                      key={item.header}
                      className={`tablesquare vs66XtraBrContainer vs66 square-text ${item.progress}`}>
                      {item.vs66Br ? (
                        <p>{item.vs66Br}</p>
                      ) : (
                        <p
                          className={
                            item.progress === "finished" ? "" : "red-text"
                          }>
                          Ingen bord
                        </p>
                      )}
                      {item.vs66XtraBr && <p>{item.vs66XtraBr}</p>}
                    </div>
                    <div
                      key={item.header}
                      className={`tablesquare square-text ${item.progress}`}>
                      <p>{item.blad}</p>
                    </div>
                    <div
                      key={item.header}
                      className={`tablesquare vs66XtraBrContainer mkv square-text ${item.progress}`}>
                      {item.mkvBord ? (
                        <p>{item.mkvBord}</p>
                      ) : (
                        <BiBlock
                          style={{ color: "#b34e4e", fontSize: "1.5rem" }}
                        />
                      )}
                    </div>
                    <div
                      key={item.header}
                      className={`tablesquare vs66XtraBrContainer mkv square-text ${item.progress}`}>
                      {item.mkvBr ? (
                        <p>{item.mkvBr}</p>
                      ) : (
                        <p
                          className={
                            item.progress === "finished" ? "" : "red-text"
                          }>
                          Ingen bord
                        </p>
                      )}
                    </div>
                  </>
                );
              })}
            {router.pathname === "/rediger" && (
              <div className="tablesquare tablesquareTop"></div>
            )}
            <div className="tablesquare tablesquareTop">
              <p className="square-text">{lists.length}</p>
            </div>
            <div className="tablesquare tablesquareTop"></div>
            <div className="tablesquare tablesquareTop"></div>
            <div className="tablesquare tablesquareTop">
              <p className="square-text">
                {antallSum && antallSum.reduce((a, b) => a + b, 0)}
              </p>
            </div>
            <div className="tablesquare tablesquareTop">
              <p className="square-text">
                {kubikkSum && kubikkSum.reduce((a, b) => a + b, 0)}
              </p>
            </div>
            <div className="tablesquare tablesquareTop"></div>
            <div className="tablesquare tablesquareTop"></div>
            <div className="tablesquare tablesquareTop"></div>
            <div className="tablesquare tablesquareTop"></div>
            <div className="tablesquare tablesquareTop"></div>
            <div className="tablesquare tablesquareTop"></div>
            <div className="tablesquare tablesquareTop"></div>
            <div className="tablesquare tablesquareTop"></div>
            <div className="tablesquare tablesquareTop"></div>
            <div className="tablesquare tablesquareTop"></div>
          </div>
        ) : (
          <h1>Laster data...</h1>
        )}
      </Hidden>
      <Hidden size="small-up">
        <div className="mobile-icon-container">
          <ImMobile style={{ fontSize: "10rem", color: "white" }} />
        </div>
        <h4 className="mobile-icon-text">Listen vises kun i landscape mode!</h4>
      </Hidden>
      <style jsx>
        {`
          .anm {
            color: #071ff8;
          }
          .anmContainer {
            display: flex;
            flex-direction: column;
          }
          .buttons {
            margin-bottom: 0.5rem;
            width: 4rem;
          }
          .btn-container {
            display: flex;
            flex-direction: column;
          }
          .container {
            display: grid;
            background-color: #8d8d8d;
            grid-template-columns: repeat(15, auto);
            grid-gap: 2px 1px;
            border: 1px solid #757575;
            width: 100%;
            box-shadow: 2px 2px 10px grey;
          }
          .input {
            width: 4rem;
          }
          .mobile-icon-container {
            display: grid;
            place-items: center;
            margin-top: 10rem;
            animation: rotate 8s infinite;
          }
          @keyframes rotate {
            50% {
              transform: rotate(-90deg);
            }
            100% {
              transform: rotate(0deg);
            }
          }
          .mobile-icon-text {
            color: #fff;
            margin-top: 1rem;
          }
          .tablesquare {
            background: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.6rem 5px;
          }

          .tablesquareTop {
            background: #e7e7e7;
            color: #475769;
          }
          .postSquare {
            background: #ffffff;
          }
          .postSquare:hover {
            cursor: pointer;
            background: #488b97;
            color: #fff;
          }
          .treslag {
            font-weight: bold;
          }
          .gran {
            color: #3d9c3d;
          }
          .furu {
            color: #e66a3e;
          }

          .stop-text {
            color: #b34e4e;
          }
          .red-text {
            color: #b34e4e;
          }

          .vs66 {
            display: flex;
            flex-direction: column;
            background-color: #ffffff;
          }
          .vs66XtraBrContainer {
            display: flex;
            flex-direction: column;
          }
          .mkv {
            background-color: #ffffff;
          }
          .klContainer {
            display: flex;
            flex-direction: column;
          }

          .klType {
            color: #1b1b1b;
          }
          .running {
            background: #c1f8c4;
            color: #698f69;
          }

          .finished {
            background: #c2c2c2;
            color: #8d8d8d;
          }
          @media (max-width: 1200px) {
            .container {
              width: auto;
              background: grey;
            }
            .square-text {
              font-size: 0.6rem;
            }
          }
          @media (max-width: 550px) {
            .container {
              grid-template-columns: repeat(14, 1fr);
            }
            .square-text {
              font-size: 0.2rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default SkurlisteComponent;
