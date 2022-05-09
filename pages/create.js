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



  useEffect(() => {
 if(copyPost) {
  setGetCopyStamme(copyPost && copyPost.map(item => item.blades.bladStamme))

 
}
    setTimeout(() => {
      
      setBladeDimension({ bladStamme:getCopyStamme && getCopyStamme[0] });
   
      setProsentValg(copyPost && copyPost.map(item => item.header.charAt(5) + item.header.charAt(6) + item.header.charAt(7) + item.header.charAt(8)))
      setPlankeTykkelse(copyPost && copyPost.map(item => item.header.charAt(2) + item.header.charAt(3) + item.header.charAt(4)))
   
    }, 1500);
  

  }, [copyPost, btnCopyPost]);

console.log('copy' + getCopyStamme)


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
