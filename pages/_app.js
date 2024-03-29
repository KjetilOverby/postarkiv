import "../styles/globals.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AppData } from "../src/contexts/AppData";
import { Auth0Provider } from "@auth0/auth0-react";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";
import { RiBodyScanLine } from "react-icons/ri";

const api = axios.create({
  baseURL: process.env.api,
});
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [getUser, setGetUser] = useState();
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 12)
  );

  const [startFillringsCollection, setStartFillringsCollection] = useState();
  const [rawRingsCollection, setRawRingsCollection] = useState("");
  const [endFillRingsCollection, setEndFillRingsCollection] = useState("");
  const [btnCopyPost, setBtnCopyPost] = useState(false);

  //EDIT POST
  const [getEditPost, setGetEditPost] = useState();

  const [background, setBackground] = useState();
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  useEffect(() => {
    if (randomNumber === 0) {
      setBackground(
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3873&q=80"
      );
    } else if (randomNumber === 1) {
      setBackground(
        "https://images.unsplash.com/photo-1620866476625-41f4780a578a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3870&q=80"
      );
    } else if (randomNumber === 2) {
      setBackground(
        "https://images.unsplash.com/photo-1504788363733-507549153474?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3729&q=80"
      );
    } else if (randomNumber === 3) {
      setBackground(
        "https://images.unsplash.com/photo-1416230789844-1998de481fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
      );
    } else if (randomNumber === 4) {
      setBackground(
        "https://images.unsplash.com/photo-1473147319958-21c51372f690?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80"
      );
    } else if (randomNumber === 5) {
      setBackground(
        "https://images.unsplash.com/photo-1663001244000-5a8880e2e6b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3200&q=80"
      );
    } else if (randomNumber === 6) {
      setBackground(
        "https://images.unsplash.com/photo-1547038577-da80abbc4f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3310&q=80"
      );
    } else if (randomNumber === 7) {
      setBackground(
        "https://images.unsplash.com/photo-1590880449155-b54f958ce314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3829&q=80"
      );
    } else if (randomNumber === 8) {
      setBackground(
        "https://images.unsplash.com/photo-1620138379310-16b58feb9e89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3870&q=80"
      );
    } else if (randomNumber === 9) {
      setBackground(
        "https://images.unsplash.com/photo-1523652207403-a1835e194623?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3870&q=80"
      );
    } else if (randomNumber === 10) {
      setBackground(
        "https://images.unsplash.com/photo-1489447068241-b3490214e879?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3870&q=80"
      );
    } else if (randomNumber === 11) {
      setBackground(
        "https://images.unsplash.com/photo-1457269449834-928af64c684d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3093&q=80"
      );
    }
  }, [randomNumber]);
  const [updateDB, setUpdateDB] = useState();
  const [lists, setLists] = useState();
  const [postList, setPostList] = useState();
  const [filteredPostList, setFilteredPostList] = useState();
  const [postOppsett, setPostOppsett] = useState();

  const [openSearchList, setOpenSearchList] = useState(false);

  const [headerPostOppsett, setHeaderPostOppsett] = useState();

  const [startRingsPostOppsett, setStartRingsPostOppsett] = useState();
  const [rawRingsPostOppsett, setRawRingsPostOppsett] = useState();
  const [endRingsPostOppsett, setEndRingsPostOppsett] = useState();
  const [bladstamme, setBladstamme] = useState();
  const [createDate, setCreateDate] = useState();

  const [dated, setDated] = useState();

  const [getIdforDelete, setGetIdforDelete] = useState();
  const [getIdForEdit, setGetIdForEdit] = useState();
  const [postBredde, setPostBredde] = useState();
  const [post2, setPost2] = useState();

  // Data til postoppsett

  const [antallStokk, setAntallStokk] = useState();
  const [antallKubikk, setAntallKubikk] = useState();
  const [postKlasse, setPostKlasse] = useState();
  const [postTreslag, setPostTreslag] = useState();
  const [postKlType, setPostklType] = useState();
  const [postKlBordMkv, setPostklBordMkv] = useState();
  const [postAnm2, setPostAnm2] = useState();

  const [updateDate, setUpdateDate] = useState();

  // Rediger
  const [treslag, setTreslag] = useState();
  const [klasse, setKlasse] = useState();
  const [klasseType, setKlasseType] = useState();
  const [klasseGrense, setKlasseGrense] = useState();
  const [antall, setAntall] = useState();
  const [kubikk, setKubikk] = useState();
  const [status, setStatus] = useState();
  const [post, setPost] = useState();
  const [breddePlank, setBreddePlank] = useState();
  const [xLog, setXLog] = useState();
  const [prosent, setProsent] = useState();
  const [anm1, setAnm1] = useState();
  const [anm2, setAnm2] = useState();
  const [vs66Ty, setVs66Ty] = useState();
  const [vs66Br, setVs66Br] = useState();
  const [vs66xtraTy, setVs66xtraTy] = useState();
  const [vs66XtraBr, setVs66XtraBr] = useState();
  const [mkvTy, setMkvTy] = useState();
  const [mkvBr, setMkvBr] = useState();
  const [sagblad, setSagblad] = useState();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [getIdField, setGetIdField] = useState();
  const [getProgress, setGetProgress] = useState();
  const [editMode, setEditMode] = useState(false);
  const [editModeColor, setEditModeColor] = useState();

  // Update

  const [showEditTools, setShowEditTools] = useState(false);

  const [antallSum, setAntallSum] = useState();
  const [kubikkSum, setKubikkSum] = useState();

  useEffect(() => {
    if (lists) {
      setAntallSum(lists.map((item) => item.ant));
      setKubikkSum(lists.map((item) => item.m3));
    }
  }, [lists]);

  useEffect(() => {
    if (klasse === "2") {
      setKlasseGrense("128-137");
    } else if (klasse === "3") {
      setKlasseGrense("138-149");
    } else if (klasse === "4") {
      setKlasseGrense("157-165");
    } else if (klasse === "5") {
      setKlasseGrense("166-171");
    } else if (klasse === "6") {
      setKlasseGrense("163-171");
    } else if (klasse === "7") {
      setKlasseGrense("171-181");
    } else if (klasse === "8") {
      setKlasseGrense("182-187");
    } else if (klasse === "9") {
      setKlasseGrense("188-192");
    } else if (klasse === "10") {
      setKlasseGrense("193-199");
    } else if (klasse === "11") {
      setKlasseGrense("200-208");
    } else if (klasse === "12") {
      setKlasseGrense("209-217");
    } else if (klasse === "13") {
      setKlasseGrense("211-227");
    } else if (klasse === "14") {
      setKlasseGrense("226-231");
    } else if (klasse === "15") {
      setKlasseGrense("228-240");
    } else if (klasse === "16") {
      setKlasseGrense("252-259");
    } else if (klasse === "17") {
      setKlasseGrense("138-149");
    } else if (klasse === "18") {
      setKlasseGrense("260-266");
    } else if (klasse === "19") {
      setKlasseGrense("267-277");
    } else if (klasse === "20") {
      setKlasseGrense("278-293");
    } else if (klasse === "21") {
      setKlasseGrense("294-304");
    } else if (klasse === "22") {
      setKlasseGrense("308-318");
    } else if (klasse === "23") {
      setKlasseGrense("319-328");
    } else if (klasse === "24") {
      setKlasseGrense("329-341");
    } else if (klasse === "25") {
      setKlasseGrense("342-374");
    } else if (klasse === "26") {
      setKlasseGrense("375-470");
    }
  }, [klasse]);

  useEffect(() => {
    if (lists) {
      const getDates = lists.map((item) => item.date);
      setDated(
        getDates.reduce(function (a, b) {
          return a > b ? a : b;
        })
      );
    }
  }, [lists]);

  const createFieldHandler = () => {
    if (!post) {
      alert("Du må legge inn post uttak");
    } else if (
      !post.includes("1x") &&
      !post.includes("2x") &&
      !post.includes("3x") &&
      !post.includes("4x") &&
      !post.includes("5x") &&
      !post.includes("6x")
    ) {
      alert("Postuttak må begynne med 1-6x, bruk liten x");
    } else if (!breddePlank) {
      alert("Du må legg inn bredde plank");
    } else if (!prosent) {
      alert("Du må legg inn tørkeprosent");
    } else {
      api
        .post(`/api/skurlister/createField?user=${getUser.sub}`, {
          treslag: treslag,
          klasse: klasse,
          klgr: klasseGrense,
          klType: klasseType,
          klgr: klasseGrense,
          ant: antall,
          m3: kubikk,
          status: status,
          post: post,
          breddePost: breddePlank,
          xLog: xLog,
          prosent: prosent,
          anm: anm1,
          anm2: anm2,
          vs66: vs66Ty,
          vs66Xtra: vs66xtraTy,
          vs66Br: vs66Br,
          vs66XtraBr: vs66XtraBr,
          blad: sagblad,
          mkvBord: mkvTy,
          mkvBr: mkvBr,
          date: new Date(),
          progress: "",
        })
        .then(function (response) {
          if (response.status === 200) {
            setUpdateDB(Math.random());
            setTreslag();
            setKlasse();
            setKlasseGrense();
            setKlasseType();
            setAntall();
            setKubikk();
            setStatus();
            setPost();
            setBreddePlank();
            setXLog();
            setProsent();
            setAnm1();
            setAnm2();
            setVs66Ty();
            setVs66xtraTy();
            setVs66Br();
            setVs66XtraBr();
            setMkvTy();
            setMkvBr();
            setGetProgress("");
            setSagblad();
          }
        });
    }
  };
  useEffect(() => {
    if (breddePlank > 50 && breddePlank <= 130) {
      setSagblad("4.0");
    } else if (breddePlank > 130 && breddePlank <= 160) {
      setSagblad("4.2");
    } else if (breddePlank > 160 && breddePlank <= 175) {
      setSagblad("4.4");
    } else if (breddePlank > 175) {
      setSagblad("4.6");
    }
  }, [breddePlank]);

  useEffect(() => {
    try {
      api.get(`/api/skurlister/getList`).then((res) => {
        setLists(res.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [updateDB]);

  useEffect(() => {
    try {
      api.get(`/api/postarkiv/post_btn_search`).then((res) => {
        setPostList(res.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [updateDB]);
  const deleteFieldHandler = () => {
    api
      .delete(
        `/api/skurlister/deleteField/?del=${getIdField}&user=${getUser.sub}`
      )
      .then((res) => {
        if (res.status === 200) {
          setUpdateDB(Math.random());
          setOpenDeleteModal(false);
        }
      });
  };
  const saveUpdateField = () => {
    api
      .patch(
        `/api/skurlister/updateField?ids=${getIdField}&user=${getUser.sub}`,
        {
          treslag: treslag,
          klasse: klasse,
          klgr: klasseGrense,
          klType: klasseType,
          ant: antall,
          m3: kubikk,
          status: status,
          post: post,
          breddePost: breddePlank,
          xLog: xLog,
          prosent: prosent,
          anm: anm1,
          anm2: anm2,
          vs66: vs66Ty,
          vs66Br: vs66Br,
          vs66Xtra: vs66xtraTy,
          vs66XtraBr: vs66XtraBr,
          blad: sagblad,
          mkvBord: mkvTy,
          mkvBr: mkvBr,
          date: new Date(),
          progress: getProgress,
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setShowEditTools(false);
          setEditMode(false);
          setEditModeColor("");
          setUpdateDB(Math.random());
          setTreslag();
          setKlasse();
          setKlasseGrense();
          setKlasseType();
          setAntall();
          setKubikk();
          setStatus();
          setPost();
          setBreddePlank();
          setXLog();
          setProsent();
          setAnm1();
          setAnm2();
          setVs66Ty();
          setVs66xtraTy();
          setVs66Br();
          setVs66XtraBr();
          setMkvTy();
          setMkvBr();
          setGetProgress("");
          setSagblad();
        }
      });
  };

  const deletePostHandler = () => {
    api
      .delete(
        `/api/postarkiv/deletePost/?del=${getIdforDelete}&user=${getUser.sub}`
      )
      .then((res) => {
        // setUpdate(Math.random());
        router.push("/postarkiv");
        setOpenDeleteModal(false);
        console.log(res);
        setUpdateDB(Math.random());
      })
      .catch((error) => {
        console.log(error);
      });
    router.push("/postarkiv");
    setOpenDeleteModal(false);
  };

  const [overflow, setOverflow] = useState("");

  useEffect(() => {
    if (router.pathname === "/postoppsett") {
      setOverflow("hidden");
    } else {
      setOverflow("none");
    }
  }, [router]);

  return (
    <body style={{ overflow: `${overflow}` }}>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={typeof window !== "undefined" && window.location.origin}
      >
        <AppData.Provider value={{ lists }}>
          <Component
            {...pageProps}
            postList={postList}
            setFilteredPostList={setFilteredPostList}
            filteredPostList={filteredPostList}
            setPostOppsett={setPostOppsett}
            postOppsett={postOppsett}
            setHeaderPostOppsett={setHeaderPostOppsett}
            headerPostOppsett={headerPostOppsett}
            setStartRingsPostOppsett={setStartRingsPostOppsett}
            startRingsPostOppsett={startRingsPostOppsett}
            setRawRingsPostOppsett={setRawRingsPostOppsett}
            rawRingsPostOppsett={rawRingsPostOppsett}
            setEndRingsPostOppsett={setEndRingsPostOppsett}
            endRingsPostOppsett={endRingsPostOppsett}
            setBladstamme={setBladstamme}
            bladstamme={bladstamme}
            setOpenSearchList={setOpenSearchList}
            openSearchList={openSearchList}
            setTreslag={setTreslag}
            treslag={treslag}
            setKlasse={setKlasse}
            klasse={klasse}
            setKlasseType={setKlasseType}
            klasseType={klasseType}
            setAntall={setAntall}
            antall={antall}
            setKubikk={setKubikk}
            kubikk={kubikk}
            setStatus={setStatus}
            status={status}
            setPost={setPost}
            post={post}
            setBreddePlank={setBreddePlank}
            breddePlank={breddePlank}
            setXLog={setXLog}
            xLog={xLog}
            setProsent={setProsent}
            prosent={prosent}
            setAnm1={setAnm1}
            anm1={anm1}
            setAnm2={setAnm2}
            anm2={anm2}
            setVs66Ty={setVs66Ty}
            vs66Ty={vs66Ty}
            setVs66Br={setVs66Br}
            vs66Br={vs66Br}
            setMkvTy={setMkvTy}
            mkvTy={mkvTy}
            setMkvBr={setMkvBr}
            mkvBr={mkvBr}
            setVs66xtraTy={setVs66xtraTy}
            vs66xtraTy={vs66xtraTy}
            setVs66XtraBr={setVs66XtraBr}
            vs66XtraBr={vs66XtraBr}
            sagblad={sagblad}
            klasseGrense={klasseGrense}
            createFieldHandler={createFieldHandler}
            setOpenDeleteModal={setOpenDeleteModal}
            openDeleteModal={openDeleteModal}
            setGetIdField={setGetIdField}
            getIdField={getIdField}
            deleteFieldHandler={deleteFieldHandler}
            showEditTools={showEditTools}
            setShowEditTools={setShowEditTools}
            saveUpdateField={saveUpdateField}
            dated={dated}
            antallSum={antallSum}
            kubikkSum={kubikkSum}
            background={background}
            setRandomNumber={setRandomNumber}
            randomNumber={randomNumber}
            setGetProgress={setGetProgress}
            setEditMode={setEditMode}
            editMode={editMode}
            editModeColor={editModeColor}
            setEditModeColor={setEditModeColor}
            setGetUser={setGetUser}
            setGetIdforDelete={setGetIdforDelete}
            deletePostHandler={deletePostHandler}
            setCreateDate={setCreateDate}
            createDate={createDate}
            setGetIdForEdit={setGetIdForEdit}
            getIdForEdit={getIdForEdit}
            startFillringsCollection={startFillringsCollection}
            setStartFillringsCollection={setStartFillringsCollection}
            endFillRingsCollection={endFillRingsCollection}
            setEndFillRingsCollection={setEndFillRingsCollection}
            btnCopyPost={btnCopyPost}
            setBtnCopyPost={setBtnCopyPost}
            rawRingsCollection={rawRingsCollection}
            setRawRingsCollection={setRawRingsCollection}
            getEditPost={getEditPost}
            setGetEditPost={setGetEditPost}
            setPostBredde={setPostBredde}
            postBredde={postBredde}
            post2={post2}
            setPost2={setPost2}
            antallStokk={antallStokk}
            setAntallStokk={setAntallStokk}
            antallKubikk={antallKubikk}
            setAntallKubikk={setAntallKubikk}
            postKlasse={postKlasse}
            setPostKlasse={setPostKlasse}
            postTreslag={postTreslag}
            setPostTreslag={setPostTreslag}
            postKlType={postKlType}
            setPostklType={setPostklType}
            setPostklBordMkv={setPostklBordMkv}
            postKlBordMkv={postKlBordMkv}
            setPostAnm2={setPostAnm2}
            postAnm2={postAnm2}
            lists={lists}
          />
        </AppData.Provider>
      </Auth0Provider>
    </body>
  );
}

export default MyApp;
