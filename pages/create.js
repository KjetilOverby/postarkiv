import React, { useState, useEffect } from "react";
import CreateMainPage from "../src/components/common/create/CreateMainPage";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const api = axios.create({
  baseURL: process.env.api,
});

const Create = ({startFillringsCollection, setStartFillringsCollection, btnCopyPost, getIdForEdit, endFillRingsCollection, setEndFillRingsCollection, rawRingsCollection, setRawRingsCollection}) => {
  
  const [copyPost, setCopyPost] = useState()
  



  
  
  const [bladeDimension, setBladeDimension] = useState({ bladStamme: "" });
  const [headerString, setHeaderString] = useState();

  const [prosentValg, setProsentValg] = useState("");
  const [plankeTykkelse, setPlankeTykkelse] = useState("");
  const [startRingLabel, setStartRingLabel] = useState();
  const [endRingLabel, setEndRingLabel] = useState();

  const [saveConfirmed, setSaveConfirmed] = useState();

  const [postArkivCheck, setPostArkivCheck] = useState();
  const [headerDuplicate, setHeaderDuplicate] = useState();
  const [updatePostCheck, setUpdatePostCheck] = useState();

  const [startFillRingsId, setStartFillRingsId] = useState()

  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
  if(btnCopyPost) {
    try {
      api.get(`/api/postarkiv/edit_post?id=${getIdForEdit}`).then((res) => {
        setCopyPost(res.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  }
  }, [btnCopyPost]);

 const [getCopyStamme, setGetCopyStamme] = useState()

const [updateCopy, setUpdateCopy] = useState(false)

useEffect(() => {
  if(copyPost) {
    setGetCopyStamme(copyPost && copyPost.map(item => item.blades.bladStamme))
    setUpdateCopy(!updateCopy)
   
  }
}, [copyPost])

  useEffect(() => {

 
      
      setBladeDimension({ bladStamme: getCopyStamme && getCopyStamme[0]});
   /*
      setProsentValg(copyPost && copyPost.map(item => item.header.charAt(2) + item.header.charAt(3) + item.header.charAt(4) + item.header.charAt(5) + item.header.charAt(6) + item.header.charAt(7) + item.header.charAt(8) + + item.header.charAt(9) + item.header.charAt(10) + item.header.charAt(11) + item.header.charAt(12) + item.header.charAt(13) + item.header.charAt(14) + item.header.charAt(15) + item.header.charAt(16) + item.header.charAt(17) + item.header.charAt(18) ))
      /* setPlankeTykkelse(copyPost && copyPost.map(item => item.header.charAt(2) + item.header.charAt(3) + item.header.charAt(4))) */
   



  

  }, [updateCopy]);

console.log(getCopyStamme && getCopyStamme[0])


  useEffect(() => {
    if(copyPost) {

    
        setStartFillringsCollection([...copyPost[0].startRings])
        setRawRingsCollection([...copyPost[0].rawInput])
        setEndFillRingsCollection([...copyPost[0].endRings])
    }
  }, [copyPost])

 

  const saveCreatedPost = () => {
    if (!prosentValg) {
      alert("Du må velge prosent.");
    } else if (!plankeTykkelse) {
      alert("Du må legge inn planketykkelse i overskriften.");
    } else if (startRingLabel > 0.05 || startRingLabel < -0.05) {
      alert("Utfylling foran er ikke riktig.");
    } else if (endRingLabel > 0.05 || endRingLabel < -0.05) {
      alert("Utfylling bak er ikke riktig.");
    } else if (headerDuplicate.includes(true)) {
      alert("Denne posten finnes allerede");
    } else {
      api
        .post(`/api/postarkiv/save_created_post?user=${user.sub}`, {
          header: headerString,
          startRings: startFillringsCollection,
          rawInput: rawRingsCollection,
          endRings: endFillRingsCollection,
          blades: bladeDimension,
          date: new Date(),
        })
        .then(function (response) {
          if (response.status === 200) {
            setSaveConfirmed("Posten ble lagret");
            setTimeout(() => {
              setUpdatePostCheck(Math.random());
              setTimeout(() => {
                setUpdatePostCheck(Math.random());
              }, 2000);
            }, 200);
          } else {
            setSaveConfirmed("Error: posten ble ikke lagret");
          }
        });
    }
  };

  

  useEffect(() => {
    try {
      api.get(`/api/postarkiv/post_btn_search`).then((res) => {
        setPostArkivCheck(res.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [updatePostCheck]);
  useEffect(() => {
    if (postArkivCheck) {
        setHeaderDuplicate(
          postArkivCheck.map((item) => item.header === String(headerString))
        );
    
    }

    
  }, [
    bladeDimension,
    rawRingsCollection,
    prosentValg,
    plankeTykkelse,
    headerString,
    updatePostCheck,
  ]);

  return (
    <>
      <div className="container">
        <CreateMainPage
          saveCreatedPost={saveCreatedPost}
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
          btnCopyPost={btnCopyPost}
        />
      </div>
      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </>
  );
};

export default Create;
