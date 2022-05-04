import React from "react";
import SkurlisteComponent from "../src/components/skurliste/SkurlisteComponent";
import Link from "next/link";
var dateFormat = require("dateformat");
import { useAuth0 } from "@auth0/auth0-react";
import Users from "../utils/users";
import ButtonComponent from "../src/components/common/buttons/ButtonComponent";

const Skurliste = ({
  filteredPostList,
  setFilteredPostList,
  setPostOppsett,
  setHeaderPostOppsett,
  setStartRingsPostOppsett,
  setRawRingsPostOppsett,
  setEndRingsPostOppsett,
  setBladstamme,
  setOpenSearchList,
  openSearchList,
  setOpenDeleteModal,
  dated,
  antallSum,
  kubikkSum,
  editModeColor,
  setCreateDate,
  postList,
}) => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <>
      <div className="container">
        <div className="top-container">
          <div className="header-container">
            <h1 className="header">Skurplan</h1>
            <p>Oppdatert: {dateFormat(dated, "dd.mm.yyyy HH:MM:ss")}</p>
          </div>
          <div className="btn-container">
            <Link href="/">
              <div>
                <ButtonComponent title="Startsiden" type="outline" />
              </div>
            </Link>
            {user && user.sub === Users && (
              <Link href="/rediger">
                <div>
                  <ButtonComponent title="Rediger liste" type="outline" />
                </div>
              </Link>
            )}
          </div>
        </div>
        <SkurlisteComponent
          postList={postList}
          setFilteredPostList={setFilteredPostList}
          filteredPostList={filteredPostList}
          setPostOppsett={setPostOppsett}
          setHeaderPostOppsett={setHeaderPostOppsett}
          setStartRingsPostOppsett={setStartRingsPostOppsett}
          setRawRingsPostOppsett={setRawRingsPostOppsett}
          setEndRingsPostOppsett={setEndRingsPostOppsett}
          setBladstamme={setBladstamme}
          setOpenSearchList={setOpenSearchList}
          openSearchList={openSearchList}
          setOpenDeleteModal={setOpenDeleteModal}
          antallSum={antallSum}
          kubikkSum={kubikkSum}
          editModeColor={editModeColor}
          setCreateDate={setCreateDate}
        />
      </div>
      <style jsx>
        {`
          .btn-container {
            display: flex;
            flex-direction: row;
            width: 10rem;
          }
          .container {
            margin: 1rem 3rem;
          }
          .header {
          }
          .header-container {
            margin-right: 3rem;
          }
          .headerType {
            color: seagreen;
          }
          .top-container {
            display: flex;
          }
        `}
      </style>
    </>
  );
};

export default Skurliste;
