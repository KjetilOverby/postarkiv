import React, { useState, useEffect } from "react";
import CreateMainPage from "../src/components/common/create/CreateMainPage";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import EditPost from "../src/components/editpost/EditPost";

const api = axios.create({
  baseURL: process.env.api,
});

const Editpost = ({
  startRingsPostOppsett,
  rawRingsPostOppsett,
  endRingsPostOppsett,
  bladstamme,
  headerPostOppsett,
  getIDforDe,
  getIdForEdit,
  getEditPost,
  setGetEditPost,
  setPost2
}) => {
 
  const [startFillringsCollection, setStartFillringsCollection] = useState();

  const [rawRingsCollection, setRawRingsCollection] = useState("");
  const [endFillRingsCollection, setEndFillRingsCollection] = useState("");
  const [bladeDimension, setBladeDimension] = useState({
    bladStamme: bladstamme,
  });
  const [headerString, setHeaderString] = useState(headerPostOppsett);

  const [prosentValg, setProsentValg] = useState("");
  const [plankeTykkelse, setPlankeTykkelse] = useState("");
  const [startRingLabel, setStartRingLabel] = useState();
  const [endRingLabel, setEndRingLabel] = useState();

  const [saveConfirmed, setSaveConfirmed] = useState();

  const [postArkivCheck, setPostArkivCheck] = useState();
  const [headerDuplicate, setHeaderDuplicate] = useState();
  const [updatePostCheck, setUpdatePostCheck] = useState();

  const { user, isAuthenticated } = useAuth0();

  
const [updateEditPost, setUpdateEditPost] = useState(false)
  

  useEffect(() => {
    try {
      api.get(`/api/postarkiv/edit_post?id=${getIdForEdit}`).then((res) => {
        setGetEditPost(res.data.data);
        if(res.status === 200) {

          setUpdateEditPost(!updateEditPost)
        }
      });
    
    } catch (error) {
      console.log(error);
    }
  }, [getIdForEdit]);

  const saveUpdatedPost = () => {
    api.patch(`api/postarkiv/save_edit_post?ids=${getIdForEdit}`, 
    {
      header: headerString,
      planker: plankeTykkelse,
      prosent: prosentValg,
      
    })
  }
// Kan rediger stringHeader. Mangler å bytte ut utfylling foran og bak samt råmål.
  

  useEffect(() => {
    if(getEditPost) {

      setProsentValg(getEditPost.map(item => item.prosent))
      setPlankeTykkelse(getEditPost.map(item => item.planker))
    }
  }, [updateEditPost])



  return (
    <>
      <div className="container">
        <EditPost
          /*  saveCreatedPost={saveCreatedPost} */
          getEditPost={getEditPost}
          
          startFillringsCollection={startFillringsCollection}
          setStartFillringsCollection={setStartFillringsCollection}
          setRawRingsCollection={setRawRingsCollection}
          rawRingsCollection={rawRingsCollection}
          endFillRingsCollection={endFillRingsCollection}
          setEndFillRingsCollection={setEndFillRingsCollection}
          bladeDimension={bladeDimension}
          setBladeDimension={setBladeDimension}
          setHeaderString={setHeaderString}
          saveConfirmed={saveConfirmed}
          setProsentValg={setProsentValg}
          prosentValg={prosentValg}
          setPlankeTykkelse={setPlankeTykkelse}
          plankeTykkelse={plankeTykkelse}
          startRingLabel={startRingLabel}
          setStartRingLabel={setStartRingLabel}
          endRingLabel={endRingLabel}
          setEndRingLabel={setEndRingLabel}
          headerDuplicate={headerDuplicate}
          saveUpdatedPost={saveUpdatedPost}
          setPost2={setPost2}
        />
      </div>
      <style jsx>
        {`
          .container {
           
          }
          .btn {
            margin: 1rem;
          }
        `}
      </style>
    </>
  );
};

export default Editpost;
