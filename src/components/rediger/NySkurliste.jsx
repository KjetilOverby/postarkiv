import React from "react";

const NySkurliste = ({
  treslag,
  klasse,
  antall,
  kubikk,
  status,
  post,
  xLog,
  prosent,
  anm1,
  anm2,
  vs66Ty,
  vs66Br,
  mkvTy,
  mkvBr,
  vs66xtraTy,
  vs66XtraBr,
  breddePlank,
  sagblad,
  klasseGrense,
  createFieldHandler,
  editMode,
}) => {
  return (
    <>
      <div className="container">
        <div className="box">
          <p className="table-header">Treslag</p>
          <p className="values">{treslag}</p>
        </div>
        <div className="box">
          <p className="table-header">kl. grense</p>
          <p className="values">{klasseGrense}</p>
        </div>
        <div className="box">
          <p className="table-header">Klasse</p>
          <p className="values">{klasse}</p>
        </div>
        <div className="box">
          <p className="table-header">Antall</p>
          <p className="values">{antall}</p>
        </div>
        <div className="box">
          <p className="table-header">M3</p>
          <p className="values">{kubikk}</p>
        </div>
        <div className="box">
          <p className="table-header">Status</p>
          <p className="values">{status}</p>
        </div>
        <div className="box">
          <p className="table-header">Post</p>
          <div className="post-box">
            <p className="values">{post}</p>
            <p className="values">x{breddePlank}</p>
          </div>
        </div>
        <div className="box">
          <p className="table-header">X-log</p>
          <p className="values">{xLog}</p>
        </div>
        <div className="box">
          <p className="table-header">Prosent</p>
          <p className="values">{prosent}</p>
        </div>
        <div className="box">
          <p className="table-header">Anm</p>
          <p className="anm">{anm1}</p>
          <p className="anm">{anm2}</p>
        </div>
        <div className="box">
          <p className="table-header">VS66 ty</p>
          <p className="values">{vs66Ty}</p>
          <p className="vs66-xtra">{vs66xtraTy}</p>
        </div>
        <div className="box">
          <p className="table-header">VS66 br</p>
          <p className="values">{vs66Br}</p>
          <p className="vs66-xtra">{vs66XtraBr}</p>
        </div>
        <div className="box">
          <p className="table-header">Mkv blad</p>
          <p className="values">{sagblad}</p>
        </div>
        <div className="box">
          <p className="table-header">MKV ty</p>
          <p className="values">{mkvTy}</p>
        </div>
        <div className="box">
          <p className="table-header">MKV br</p>
          <p className="values">{mkvBr}</p>
        </div>
      </div>
      {editMode ? (
        <h4 className="edit-mode-text">Redigeringsmodus</h4>
      ) : (
        <button onClick={createFieldHandler} className="btn">
          Legg til ny klasse
        </button>
      )}

      <style jsx>
        {`
          .anm {
            color: #ffffff;
          }
          .container {
            display: flex;
            flex-wrap: wrap;
          }
          .box {
            background-image: linear-gradient(#cbbacc 0%, #2580b3 100%);
            padding: 1em;
            border-left: 1px solid #111;
            color: #346785;
          }
          .btn {
            margin: 1rem 0;
          }
          .edit-mode-text {
            color: red;
            margin: 1rem 0;
          }
          .post-box {
            display: flex;
          }
          .table-header {
            font-weight: bold;
          }
          .vs66-xtra {
            color: blue;
          }
          .values {
            color: yellow;
          }
        `}
      </style>
    </>
  );
};

export default NySkurliste;
