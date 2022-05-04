import React from "react";
import ButtonComponent from "../src/components/common/buttons/ButtonComponent";
import Link from "next/link";
import InfoCards from "../src/components/info/InfoCards";
import excel from "../assets/info/excel.png";
import second from "../assets/info/second.png";
import third from "../assets/info/third.png";
import fourth from "../assets/info/fourth.png";

const info = () => {
  return (
    <>
      {/* <div className="container">
        <h1 className="header">Postarkiv</h1>
        <div className="release-container">
          <p className="sub-header">Første utgave, april 2016</p>
          <p className="text">Ble laget med Microsoft Excel.</p>
        </div>
        <div className="release-container">
          <p className="sub-header">Andre utgave, 8 februar 2020</p>
          <p className="text">
            Blir påbegynt desember 2019. Blir laget med JavaScript som en
            webapplikasjon uten database. Er heller ikke responsiv og fungerer
            ikke på små skjermer som mobil og nettbrett.{" "}
            <a href="https://mkv-calculator-awcsqbdb7.vercel.app">
              Andre utgave
            </a>
          </p>
        </div>
        <div className="release-container">
          <p className="sub-header">Tredje utgave, august 2020</p>
          <p className="text">
            Denne utgaven har mulighet til å lagre nye poster rett fra
            programmet fordi den er tilkoblet en database. Det må også være
            innlogging.{" "}
            <a href="https://mkv-calculator-mobile.vercel.app">Tredje utgave</a>
          </p>
        </div>
        <div className="release-container">
          <p className="sub-header">Fjerde utgave, september 2021</p>
          <p className="text">
            Utgaven er appen som du bruker nå. I utgangspunktet het denne appen
            Skurlister, det var bare en egen app som man kunne velge poster rett
            fra ordrelister. Man kunne ikke lage egne poster eller søke manuelt.
            Etterhvert ble det lagt inn manuelt søk og mulighet til å lage nye
            poster å lagre de. Da ble det også innloggin på denne siden. Denne
            appen erstatter etterhvert den tredje utgaven.
          </p>
        </div>

        <ButtonComponent title="Tilbake" type="outline" link="/" />
      </div> */}

      <div className="container">
        <div className="header-component">
          <h3 className="tab-header">Postarkiv</h3>
          <div className="tab-container">
            <Link href="/">
              <p className="tab">Hjem</p>
            </Link>
            <Link href="/skurliste">
              <p className="tab">Skurliste</p>
            </Link>
            <Link href="/postarkiv">
              <p className="tab">Søk</p>
            </Link>
            <Link href="/skimskalkulator">
              <p className="tab">Kalkulator</p>
            </Link>
          </div>
        </div>
        <h4 className="sub-text">Utviklingen av Postarkiv.</h4>
        <InfoCards
          img={excel}
          side1="right"
          side2="left"
          title="Første utgave, april 2016"
          text="Første utgave ble laget med Microsoft Excel."
        />
        <InfoCards
          img={second}
          side1="left"
          side2="right"
          title="Andre utgave, 8 februar 2020"
          text="Blir påbegynt desember 2019. Blir laget med JavaScript som en
          webapplikasjon uten database. Er heller ikke responsiv og fungerer
          ikke på små skjermer som mobil og nettbrett.
        "
          link={
            <a href="https://mkv-calculator-awcsqbdb7.vercel.app">
              Andre utgave
            </a>
          }
        />
        <InfoCards
          img={third}
          side1="right"
          side2="left"
          title="Tredje utgave, august 2020"
          text="Denne utgaven har mulighet til å lagre nye poster rett fra
          programmet fordi den er tilkoblet en database. Det må også være
          innlogging."
          link={
            <a href="https://mkv-calculator-mobile.vercel.app">Tredje utgave</a>
          }
        />
        <InfoCards
          img={fourth}
          side1="left"
          side2="right"
          title="Fjerde utgave, september 2021"
          text="Utgaven er appen som du bruker nå. I utgangspunktet het denne appen
          Skurlister, det var bare en egen app som man kunne velge poster rett
          fra ordrelister. Man kunne ikke lage egne poster eller søke manuelt.
          Etterhvert ble det lagt inn manuelt søk og mulighet til å lage nye
          poster å lagre de. Da ble det også innloggin på denne siden. Denne
          appen erstatter etterhvert den tredje utgaven."
        />
      </div>
      <style jsx>
        {`
          .container {
            margin: 2rem 45rem;
          }
          .header {
            font-weight: 400;
            margin-bottom: 1rem;
          }
          .sub-text {
            text-align: center;
            font-family: var(--font);
            font-size: 2rem;
            font-weight: 100;
            margin-bottom: 5rem;
            color: #333333;
          }

          .sub-header {
            font-weight: 400;
          }
          .text {
            font-weight: 100;
          }

          .header-component {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #33333345;
            margin-bottom: 3rem;
          }
          .tab-container {
            display: flex;
            width: 23rem;
            justify-content: space-between;
            align-items: center;
          }
          .tab {
            color: #8b8b8b;
            font-family: var(--font);
            text-transform: uppercase;
            transition: 0.5s;
          }
          .tab:hover {
            cursor: pointer;
            color: black;
          }
          .tab-header {
            color: #8b8b8b;
            font-size: 2.5rem;
            font-weight: 400;
            font-family: var(--font);
          }
          @media (max-width: 2100px) {
            .container {
              margin: 2rem 32rem;
            }
          }
          @media (max-width: 1700px) {
            .container {
              margin: 2rem 18rem;
            }
          }
          @media (max-width: 1100px) {
            .container {
              margin: 2rem 8rem;
            }
          }
          @media (max-width: 800px) {
            .header-component {
              display: grid;
            }
            .container {
              margin: 2rem 0.5rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default info;
