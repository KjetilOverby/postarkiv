import React, { useEffect } from "react";
import ModalComponent from "../src/components/common/ModalComponent";
import InputComponent from "../src/components/rediger/InputComponent";
import NySkurliste from "../src/components/rediger/NySkurliste";
import SkurlisteComponent from "../src/components/skurliste/SkurlisteComponent";
import Link from "next/link";
import Users from "../utils/users";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../src/components/auth/LoginButton";
import ButtonComponent from "../src/components/common/buttons/ButtonComponent";

const Rediger = ({
  lists,
  setTreslag,
  treslag,
  setKlasse,
  klasse,
  setKlasseType,
  klasseType,
  setAntall,
  antall,
  setKubikk,
  kubikk,
  setStatus,
  status,
  setPost,
  post,
  setBreddePlank,
  breddePlank,
  setXLog,
  xLog,
  setProsent,
  prosent,
  setAnm1,
  anm1,
  setAnm2,
  anm2,
  setVs66Ty,
  vs66Ty,
  setVs66Br,
  vs66Br,
  setMkvTy,
  mkvTy,
  setMkvBr,
  mkvBr,
  setVs66xtraTy,
  vs66xtraTy,
  setVs66XtraBr,
  vs66XtraBr,
  sagblad,
  klasseGrense,
  createFieldHandler,
  setOpenDeleteModal,
  openDeleteModal,
  setGetIdField,
  getIdField,
  deleteFieldHandler,
  showEditTools,
  setShowEditTools,
  saveUpdateField,
  setGetProgress,
  editMode,
  setEditMode,
  editModeColor,
  setEditModeColor,
  setGetUser,
}) => {
  const { user, isAuthenticated } = useAuth0();
  useEffect(() => {
    if (user) {
      setGetUser(user);
    }
  }, [user]);
  return (
    <>
      {user && user.sub === Users ? (
        <div className="container">
          {openDeleteModal && (
            <ModalComponent
              setOpenDeleteModal={setOpenDeleteModal}
              deleteHandler={deleteFieldHandler}
              klasse={klasse}
              header="Slette valgt post"
            />
          )}
          <div className="inputContainer">
            <h1 className="header">Legg til eller rediger klasser</h1>
            <div className="btn-container">
              <Link href="/skurliste">
                <div>
                  <ButtonComponent type="outline" title="Til skurliste" />
                </div>
              </Link>
              <Link href="/">
                <ButtonComponent title="Til startsiden" type="outline" />
              </Link>
            </div>
            <InputComponent
              setTreslag={setTreslag}
              setKlasse={setKlasse}
              setKlasseType={setKlasseType}
              setAntall={setAntall}
              setKubikk={setKubikk}
              setStatus={setStatus}
              setPost={setPost}
              setBreddePlank={setBreddePlank}
              setXLog={setXLog}
              setProsent={setProsent}
              setAnm1={setAnm1}
              setAnm2={setAnm2}
              setVs66Ty={setVs66Ty}
              setVs66Br={setVs66Br}
              setMkvTy={setMkvTy}
              setMkvBr={setMkvBr}
              setVs66xtraTy={setVs66xtraTy}
              setVs66XtraBr={setVs66XtraBr}
              editModeColor={editModeColor}
            />
          </div>
          <div className="listContainer">
            <NySkurliste
              treslag={treslag}
              klasse={klasse}
              antall={antall}
              kubikk={kubikk}
              status={status}
              post={post}
              breddePlank={breddePlank}
              xLog={xLog}
              prosent={prosent}
              anm1={anm1}
              anm2={anm2}
              vs66Ty={vs66Ty}
              vs66Br={vs66Br}
              mkvTy={mkvTy}
              mkvBr={mkvBr}
              vs66xtraTy={vs66xtraTy}
              vs66XtraBr={vs66XtraBr}
              sagblad={sagblad}
              klasseGrense={klasseGrense}
              createFieldHandler={createFieldHandler}
              editMode={editMode}
            />
          </div>
          <SkurlisteComponent
            setOpenDeleteModal={setOpenDeleteModal}
            setGetIdField={setGetIdField}
            showEditTools={showEditTools}
            setShowEditTools={setShowEditTools}
            getIdField={getIdField}
            setAntall={setAntall}
            setKubikk={setKubikk}
            saveUpdateField={saveUpdateField}
            setGetProgress={setGetProgress}
            setEditMode={setEditMode}
            setEditModeColor={setEditModeColor}
          />
        </div>
      ) : (
        <div className="not-logged-inn-screen">
          <h1>Du er ikke innlogget</h1>
          <button className="btn-not-logged-inn">
            <LoginButton />
          </button>
        </div>
      )}

      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 5rem;
          }
          .btn {
            margin-bottom: 0.5rem;
          }
          .btn-container {
            display: flex;
            flex-direction: row;
            width: 10rem;
          }
          .header {
            margin: 2rem 0;
            color: #555;
          }
          .inputContainer {
            margin-bottom: 3rem;
          }
          .not-logged-inn-screen {
            padding: 5rem;
          }
          .btn-not-logged-inn {
            width: 10rem;
            height: 3rem;
            margin-top: 2rem;
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
};

export default Rediger;
