import React, { useState, useEffect } from "react";
import Blade from "../src/components/poster/Blade";
import Fillrings from "../src/components/poster/Fillrings";
import RawRings from "../src/components/poster/RawRings";
import Users from "../utils/users";
import { useAuth0 } from "@auth0/auth0-react";
import Link from "next/link";
import ModalComponent from "../src/components/common/ModalComponent";
import dateFormat from "dateformat";
import MenuBtn from "../src/components/postoppsett/MenuBtn";
import { FaClipboardList } from 'react-icons/fa';

const Postoppsett = ({
  headerPostOppsett,
  startRingsPostOppsett,
  rawRingsPostOppsett,
  endRingsPostOppsett,
  bladstamme,
  background,
  openDeleteModal,
  setOpenDeleteModal,
  deletePostHandler,
  createDate,
  setBtnCopyPost,
  btnCopyPost,
  postBredde,
  post2,
  setPost2,
  klasse,
  antallStokk,
  antallKubikk,
  postKlasse,
  postTreslag,
  postKlType,
  postKlBordMkv,
  postAnm2,
  lists
}) => {
  const { user, isAuthenticated } = useAuth0();
  const randomNumber = Math.floor(Math.random() * 2);
  const currentYear = new Date().getFullYear();

  const [openSkurliste, setOpenSkurliste] = useState(true)
  const [iconColor, setIconColor] = useState('off')
  const [cellColor, setCellColor] = useState('')

  const [animation, setAnimation] = useState("");
  useEffect(() => {
    if (randomNumber === 0) {
      setAnimation("ani1");
    } else if (randomNumber === 1) {
      setAnimation("ani2");
    }
  });

 const skurlisteBtnHandler = () => {
   setOpenSkurliste(!openSkurliste)

 
     setIconColor('on')
    setTimeout(() => {
      setIconColor('off')
    }, 5000);

 }

  return (
    <>
      {user && user.sub === process.env.USER_SUB && (
        <MenuBtn
          setBtnCopyPost={setBtnCopyPost}
          deleteBtn={() => setOpenDeleteModal(true)}
          setPost2={setPost2}
        />
      )}
      <div className="container">
        <div className="info-box">
          <Link href="/skurliste">
            <button className="btn btn1">Skurliste</button>
          </Link>
         <div className={`icon-btn-container ${iconColor}`} onClick={skurlisteBtnHandler}>
          <FaClipboardList style={{fontSize: '1.5rem'}} />
         </div>
        </div>
        <div className="info-box2">
        
          <p className="info-text">
            Opprettelsesdato:{" "}
            {createDate === undefined
              ? "Ukjent"
              : dateFormat(createDate, "dd.mm.yyyy HH:MM")}
          </p>
        </div>
        <div className="headerContainer">
          <h1 className="header">{headerPostOppsett}</h1>
        </div>
        <div className={`fillRingContainer ${animation}`}>
          {startRingsPostOppsett &&
            startRingsPostOppsett.map((item) => {
              return (
                <>
                  <div className={`fillRingContainer ${animation}`}>
                    <Fillrings value={item.input} />
                  </div>
                </>
              );
            })}
          {rawRingsPostOppsett &&
            rawRingsPostOppsett.map((item) => {
              return (
                <>
                  <div className={`fillRingContainer ${animation}`}>
                    <RawRings
                      rawValue={item.input}
                      bladstamme={bladstamme}
                      ring={item.ring}
                      shims1={item.shims}
                      shims2={item.shims2}
                      shims3={item.shims3}
                    />
                  </div>
                </>
              );
            })}
          <Blade bladstamme={bladstamme} />
          {endRingsPostOppsett &&
            endRingsPostOppsett.map((item) => {
              return (
                <>
                  <div className={`fillRingContainer ${animation}`}>
                    <Fillrings value={item.input} />
                  </div>
                </>
              );
            })}
        </div>
        <div className="full-post-name">
          {post2 && (
            <h1 className="post-name">
              {post2}x{postBredde}{" "}
              <span style={{ color: "yellow" }}>
                {(bladstamme + 1.4).toFixed(1)}
              </span>
            </h1>
          )}
          {post2 && <div>
            <p className="postText">Klasse: {postKlasse} {postTreslag} {postKlType}</p>
            <p className="postText">Antall stokk: {antallStokk}, m3: {antallKubikk}</p>
           <p className="postText">Anmerkning: {postKlBordMkv} {postAnm2}</p>
            
            </div>}
          
        </div>
        {user && user.sub === Users && (
          <div className="userContainer">
            <p className="bottom-text">
              innlogged som: {user.name} * email: {user.email} * Postarkiv ©
              copyright 2016-{currentYear}
            </p>
          </div>
        )}
        {!user && (
          <div className="userContainer">
            <p className="bottom-text">
              Postarkiv © copyright 2016-{currentYear}
            </p>
          </div>
        )}
        {openDeleteModal && (
          <ModalComponent
            header="Slett denne posten"
            setOpenDeleteModal={setOpenDeleteModal}
            deleteHandler={deletePostHandler}
          />
        )}
{openSkurliste && 
  <div className="skurliste-container">
<p className="skurlisteHeader">SKURLISTE</p> 
  <table>
  <tr >
      <th className="cell">Slag</th>
      <th className="cell">Kl</th>
      <th className="cell">Ant</th>
      <th className="cell">m3</th>
      <th className="cell">status</th>
      <th className="cell">post</th>
      <th className="cell">X-Log</th>
      <th className="cell">VS-66</th>
      <th className="cell">MKV</th>
    </tr>
          {lists && 
            lists.map((item) => {
           
              return (
                <>
                   
   
    <tr key={item._id}>
      <td className={`data-cell ${item.progress}`}>{item.treslag}</td>
      <td className={`data-cell ${item.progress}`}>{item.klasse}</td>
      <td className={`data-cell ${item.progress}`}>{item.ant}</td>
      <td className={`data-cell ${item.progress}`}>{item.m3}</td>
      <td className={`data-cell ${item.progress}`}>{item.status}</td>
      <td className={`data-cell ${item.progress}`}>{item.post}x{item.breddePost}-{item.prosent}%</td>
      <td className={`data-cell ${item.progress}`}>{item.xLog}</td>
      <td className={`data-cell ${item.progress}`}>{item.vs66 ? item.vs66 : 'X'}</td>
      <td className={`data-cell ${item.progress}`}>{item.mkvBord ? item.mkvBord : 'X'}</td>
    </tr>
   
  
                
                </>
              )
            })
          }
          </table> 
     </div>
}
      </div>
   

     
      <style jsx>
        {`
          .header {
            color: #fff;
            animation: bounceInRight 1.2s forwards;
            font-weight: normal;
          }
          .headerContainer {
            grid-area: header;
            display: flex;
            justify-content: center;
            margin-top: 1rem;
          }
          .container {
            position: relative;
            display: grid;
            grid-template-rows: 1fr 30rem 1fr;
            grid-template-areas:
              "header"
              "postContainer"
              ".";
            min-height: 100vh;
            background: linear-gradient(
                90deg,
                rgba(0, 0, 0, 0.8) 35%,
                rgba(0, 0, 0, 0.7) 100%
              ),
              url(${background});
            background-size: cover;
          }
          .postText {
            font-size: .8rem
          }
          .post-name {
            font-weight: 100;
          }
          .full-post-name {
            color: #fff;
            position: absolute;

            bottom: 3rem;
            left: 2rem;
          }
          .utfylling {
            font-weight: 100;
            font-size: 0.8rem;
          }

          .skurliste-container {
            position: absolute;
            bottom: .5rem;
            right: .5rem;
            background: rgba(0,0,0,.3);
            animation: fadeInUp 1s;
          
          }
          .data-cell {
           border-right: 1px solid #3f3f3f;
           border-bottom: 1px solid #3f3f3f;
            padding: 5px;
            color: white;
            font-size: .8rem
          }
          
          .cell {
            border-right: 1px solid #3f3f3f;
            border-bottom: 1px solid #3f3f3f;
            padding: 5px;
            color: orangered;
            font-size: .8rem
          }
          .running {
            color: #37f608   
          }
          .finished {
            color:   #595959  
          }
          .icon-btn-container {
            display: grid;
            place-items: center;
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
           
            
          }
          .icon-btn-container:hover {
           cursor: pointer
          }
          .on {
            background: blue
          }
          .off {
            background: #2e2e2e 
          }
          .skurlisteHeader {
            color: orangered;
            margin: .5rem
          }
          @keyframes slide {
            0% {
              transform: translateY(40rem);
            }
            100% {
              transform: translateY(0rem);
            }
          }
          @keyframes fadeInUp {
             0% { opacity: 0;
               -webkit-transform: translate3d(0, 100%, 0); transform: translate3d(0, 100%, 0); } 100% { opacity: 1; -webkit-transform: none; transform: none; } }

          @keyframes bounceInRight {
            0%,
            60%,
            75%,
            90%,
            100% {
              -webkit-transition-timing-function: cubic-bezier(
                0.215,
                0.61,
                0.355,
                1
              );
              transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
            }

            0% {
              opacity: 0;
              -webkit-transform: translate3d(3000px, 0, 0);
              transform: translate3d(3000px, 0, 0);
            }

            60% {
              opacity: 1;
              -webkit-transform: translate3d(-25px, 0, 0);
              transform: translate3d(-25px, 0, 0);
            }

            75% {
              -webkit-transform: translate3d(10px, 0, 0);
              transform: translate3d(10px, 0, 0);
            }

            90% {
              -webkit-transform: translate3d(-5px, 0, 0);
              transform: translate3d(-5px, 0, 0);
            }

            100% {
              -webkit-transform: none;
              transform: none;
            }
          }

          @keyframes fadeInLeft {
            0% {
              opacity: 0;
              -webkit-transform: translate3d(-100%, 0, 0);
              transform: translate3d(-100%, 0, 0);
            }

            100% {
              opacity: 1;
              -webkit-transform: none;
              transform: none;
            }
          }

          @keyframes rotateIn {
            0% {
              -webkit-transform-origin: center;
              transform-origin: center;
              -webkit-transform: rotate3d(0, 0, 1, -200deg);
              transform: rotate3d(0, 0, 1, -200deg);
              opacity: 0;
            }

            100% {
              -webkit-transform-origin: center;
              transform-origin: center;
              -webkit-transform: none;
              transform: none;
              opacity: 1;
            }
          }
          @keyframes rollIn {
            0% {
              opacity: 0;
              -webkit-transform: translate3d(-100%, 0, 0)
                rotate3d(0, 0, 1, -120deg);
              transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
            }

            100% {
              opacity: 1;
              -webkit-transform: none;
              transform: none;
            }
          }

          .fillRingContainer {
            display: flex;
            position: relative;
            justify-content: center;
            align-items: center;
            grid-area: postContainer;
          }
          .ani1 {
            animation: rollIn 1.2s forwards;
          }
          .ani2 {
            animation: rotateIn 1.2s forwards;
          }
          .userContainer {
            position: absolute;
            bottom: .5rem;
            left: 0;
            color: #bdbdbd;
            animation: move 4s forwards;
            animation-timing-function: linear;
          }
          .info-box {
            color: #bdbdbd;
            position: absolute;
            display: flex;
            flex-direction: column;
            padding: 2rem;
            z-index: 100;
          }
          .info-box2 {
            color: #bdbdbd;
            position: absolute;
            display: flex;
            flex-direction: column;
            padding: 2rem;
            bottom: 0;
          }
          .info-text {
            font-size: 0.8rem;
          }
          .btn {
            height: 3rem;
            width: 12rem;
            border: none;

            margin-bottom: 1rem;
            transition: background 0.3s, color 0.3s;
            background: linear-gradient(120deg, #222 50%, #4a6a76 50%);
            background-size: 220%;
            color: #aaa;
          }
          .btn1 {
            animation: bounceInUp 1.2s;
          }
          .btn2 {
            animation: bounceInUp 1.5s;
          }
          .btn3 {
            animation: bounceInUp 1.7s;
          }
          @keyframes bounceInUp {
            0%,
            60%,
            75%,
            90%,
            100% {
              -webkit-transition-timing-function: cubic-bezier(
                0.215,
                0.61,
                0.355,
                1
              );
              transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
            }

            0% {
              opacity: 0;
              -webkit-transform: translate3d(0, 3000px, 0);
              transform: translate3d(0, 3000px, 0);
            }

            60% {
              opacity: 1;
              -webkit-transform: translate3d(0, -20px, 0);
              transform: translate3d(0, -20px, 0);
            }

            75% {
              -webkit-transform: translate3d(0, 10px, 0);
              transform: translate3d(0, 10px, 0);
            }

            90% {
              -webkit-transform: translate3d(0, -5px, 0);
              transform: translate3d(0, -5px, 0);
            }

            100% {
              -webkit-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0);
            }
          }

          .btn:hover {
            cursor: pointer;
            background-position: 100%;
          }
          .btn-delete {
            transition: background 0.3s, color 0.3s;
            background: linear-gradient(120deg, #222 50%, #a23 50%);
            background-size: 220%;
          }
          .btn-delete:hover {
            background-position: 100%;
          }
          @keyframes move {
            0% {
              transform: translateX(-40rem);
            }
            100% {
              transform: translateX(0rem);
            }
          }

          .btn {
            height: 3rem;
          }
           {
          }
          @media (max-width: 765px) {
            .header {
              font-weight: 100;
              font-size: 0.8rem;
              position: relative;
            }
            .info-box {
              top: 20rem;
            }
            .info-box2 {
              top: 33rem;
            }
            .container {
              grid-template-rows: 3rem 10rem 1fr;
              padding-top: 2.5rem;
              grid-template-areas:
                "header header"
                "postContainer postContainer"
                ". .";
            }
            .header {
              font-size: 1rem;
              margin-top: -3rem;
            }
          }

          @media (max-height: 375px) {
            .container {
              padding-top: 2.5rem;
              grid-template-areas:
                "postContainer postContainer"
                "header ."
                ". .";
            }
            .info-box {
              top: 25rem;
            }
            .info-box2 {
              bottom: 25rem;
            }
            .header {
              font-size: 1rem;
              margin-top: -3rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default Postoppsett;
