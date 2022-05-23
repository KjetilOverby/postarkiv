import React, { useContext, useState, useEffect } from "react";
import { AppData } from "../../contexts/AppData";
import styles from "../../../styles/skurlisteMobil.module.css";
import SearchListFromBtn from "./SearchListFromBtn";

const SkurlisteMobil = ({
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
}) => {
  const { lists } = useContext(AppData);
  const [progress, setProgress] = useState("field-grey");

  const [post, setPost] = useState();
  const [percent, setPercent] = useState();
  const [blade, setBlade] = useState();

  const searchAllBlades = () => {
    setFilteredPostList(
      postList.filter((item) => item.header.includes(`${post}-${percent}%`))
    );
  };

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
        />
      )}
      <div className={styles.table}>
        {lists &&
          lists.map((list) => {
            const getPostHandler = () => {
              setPost(list.post);
              setPercent(list.prosent);
              setBlade(list.blad);
              setOpenSearchList(true);
            };

            return (
              <div
                className={`field ${
                  list.progress === "finished" ? "field-grey" : "field-green"
                }`}>
                <p>{list.treslag}</p>
                <p>
                  Klasse: {list.klasse} {list.klType}
                </p>
                <p>Antall: {list.ant}</p>
                <p>M3: {list.m3}</p>
                <p>Status: {list.status}</p>
                <p onClick={getPostHandler} className={styles.uttak}>
                  {list.post}x{list.breddePost}-{list.prosent}%-
                  {list.blad}
                </p>
                <p>Bredde: </p>
                <p>X-log: {list.xLog}</p>
                <div>
                  <p>Anm: {list.anm}</p>
                  <p>{list.anm2}</p>
                </div>
                <p>
                  VS-66:{" "}
                  {list.vs66 ? `${list.vs66}x${list.vs66Br}` : "Ingen bord"}
                </p>
                <p>
                  VS-66 xtra: {list.vs66Xtra}x{list.vs66XtraBr}
                </p>
                <p>
                  MKV bord:{" "}
                  {list.mkvBord
                    ? `${list.mkvBord}x${list.mkvBr}`
                    : "Ingen bord"}
                </p>
                <p>Oppdatert: {list.date}</p>
                <p>Progress: {list.progress}</p>
              </div>
            );
          })}
      </div>
      <style jsx>{`
        .field {
          font-size: 1rem;
          padding: 2rem;
          margin-bottom: 0.5rem;
          background-color: ${progress};
          border-bottom: 1px solid rgb(194, 194, 194);
        }
        .field-grey {
          background: rgb(213, 213, 213);
        }
        .field-green {
          background: white;
        }
      `}</style>
    </>
  );
};

export default SkurlisteMobil;
