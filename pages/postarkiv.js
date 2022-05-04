import React, { useState, useEffect } from "react";
import PostarkivStartPage from "../src/components/postarkiv/PostarkivStartPage";
import axios from "axios";
import PostarkivStartpage2 from "../src/components/postarkiv/PostarkivStartpage2";

const api = axios.create({
  baseURL: process.env.api,
});

const Postarkiv = ({
  setHeaderPostOppsett,
  setStartRingsPostOppsett,
  setRawRingsPostOppsett,
  rawRingsPostOppsett,
  setEndRingsPostOppsett,
  setBladstamme,
  setGetIdforDelete,
  setCreateDate,
}) => {
  const [postarkiv, setPostarkiv] = useState();
  const [getSearch, setGetSearch] = useState();
  const [getID, setGetID] = useState();
  useEffect(() => {
    try {
      api.get(`/api/postarkiv/post_btn_search`).then((res) => {
        setPostarkiv(res.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [getSearch]);

  return (
    <>
      <div className="container">
        {/* <PostarkivStartPage
          postarkiv={postarkiv}
          setGetSearch={setGetSearch}
          getSearch={getSearch}
          setGetID={setGetID}
          getID={getID}
          setHeaderPostOppsett={setHeaderPostOppsett}
          setStartRingsPostOppsett={setStartRingsPostOppsett}
          setRawRingsPostOppsett={setRawRingsPostOppsett}
          rawRingsPostOppsett={rawRingsPostOppsett}
          setEndRingsPostOppsett={setEndRingsPostOppsett}
          setBladstamme={setBladstamme}
          setGetIdforDelete={setGetIdforDelete}
          setCreateDate={setCreateDate}
        /> */}
        <PostarkivStartpage2
          setGetSearch={setGetSearch}
          getSearch={getSearch}
          setGetID={setGetID}
          getID={getID}
          setHeaderPostOppsett={setHeaderPostOppsett}
          setStartRingsPostOppsett={setStartRingsPostOppsett}
          setRawRingsPostOppsett={setRawRingsPostOppsett}
          rawRingsPostOppsett={rawRingsPostOppsett}
          setEndRingsPostOppsett={setEndRingsPostOppsett}
          setBladstamme={setBladstamme}
          setGetIdforDelete={setGetIdforDelete}
          setCreateDate={setCreateDate}
          postarkiv={postarkiv}
        />
      </div>
      <style jsx>
        {`
           {
            .container {
              background: linear-gradient(
                  rgba(0, 0, 0, 0.5),
                  rgba(0, 0, 0, 0.5)
                ),
                url("https://images.unsplash.com/photo-1617400120050-a1e45fa16c02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80");
              background-repeat: no-repeat;
              background-attachment: fixed;
              background-size: cover;
              min-height: 100vh;
            }
            @media (max-width: 756px) {
              .container {
                overflow: hidden;
              }
            }
          }
        `}
      </style>
    </>
  );
};

export default Postarkiv;
