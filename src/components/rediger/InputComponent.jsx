import React from "react";

const InputComponent = ({
  setTreslag,
  setKlasse,
  setKlasseType,
  setAntall,
  setKubikk,
  setStatus,
  setPost,
  setBreddePlank,
  setXLog,
  setProsent,
  setAnm1,
  setAnm2,
  setVs66Ty,
  setVs66Br,
  setMkvTy,
  setMkvBr,
  setVs66xtraTy,
  setVs66XtraBr,
  editModeColor,
}) => {
  return (
    <>
      {editModeColor === "edit-mode-color" ? (
        <h4 className="edit-header">Rediger klasse</h4>
      ) : (
        <h4>Sett inn verdier</h4>
      )}
      <div className="container">
        <div className={`form-box ${editModeColor}`}>
          <p>Treslag</p>
          <select onChange={(e) => setTreslag(e.target.value)}>
            <option value="">Velg</option>
            <option value="Gran">Gran</option>
            <option value="Furu">Furu</option>
          </select>
        </div>
        <div className={`form-box ${editModeColor}`}>
          <p>Klasse</p>
          <select onChange={(e) => setKlasse(e.target.value)}>
            <option selected disabled hidden value="">
              Velg
            </option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
          </select>
        </div>
        <div className={`form-box ${editModeColor}`}>
          <p>Klassetype</p>
          <select onChange={(e) => setKlasseType(e.target.value)}>
            <option value="">Velg</option>
            <option value="Spesial">Spesial</option>
            <option value="Panel">Panel</option>
            <option value="Kort">Kort</option>
            <option value="Lang">Lang</option>
            <option value="Malm">Malm</option>
            <option value="X-ray">X-ray</option>
            <option value="Krok">Krok</option>
          </select>
        </div>
        <div className={`form-box ${editModeColor}`}>
          <p>Antall</p>
          <input
            onChange={(e) => setAntall(e.target.value)}
            className="input"
          />
        </div>
        <div className={`form-box ${editModeColor}`}>
          <p>M3</p>
          <input
            onChange={(e) => setKubikk(e.target.value)}
            className="input"
          />
        </div>
        <div className={`form-box ${editModeColor}`}>
          <p>Status</p>
          <select onChange={(e) => setStatus(e.target.value)}>
            <option value="">Velg</option>
            <option value="tøm">tøm</option>
            <option value="stopp">stopp</option>
          </select>
        </div>
        <div className={`form-box ${editModeColor}`}>
          <p>Post</p>
          <input onChange={(e) => setPost(e.target.value)} className="input" />
        </div>
        <div className={`form-box ${editModeColor}`}>
          <p>Br. plank</p>
          <select onChange={(e) => setBreddePlank(e.target.value)}>
            <option value="">Velg</option>
            <option value="84">84</option>
            <option value="85">85</option>
            <option value="92">92</option>
            <option value="95">95</option>
            <option value="100">100</option>
            <option value="105">105</option>
            <option value="112">112</option>
            <option value="125">125</option>
            <option value="127">127</option>
            <option value="128">128</option>
            <option value="130">130</option>
            <option value="132">132</option>
            <option value="135">135</option>
            <option value="140">140</option>
            <option value="142">142</option>
            <option value="150">150</option>
            <option value="152">152</option>
            <option value="155">155</option>
            <option value="165">165</option>
            <option value="166">166</option>
            <option value="170">170</option>
            <option value="172">172</option>
            <option value="175">175</option>
            <option value="180">180</option>
            <option value="185">185</option>
            <option value="186">186</option>
            <option value="195">195</option>
            <option value="200">200</option>
            <option value="210">210</option>
            <option value="215">215</option>
            <option value="225 ">225</option>
          </select>
        </div>
        <div className={`form-box ${editModeColor}`}>
          <p>X-log</p>
          <select onChange={(e) => setXLog(e.target.value)}>
            <option value="">Velg</option>
            <option value="1X">1X</option>
            <option value="2X">2X</option>
            <option value="3X">3X</option>
            <option value="4X">4X</option>
            <option value="5X">5X</option>
            <option value="2X/OS">2X/OS</option>
            <option value="3X/OS">3X/OS</option>
          </select>
        </div>
        <div className={`form-box ${editModeColor}`}>
          <p>Tørkeprosent</p>
          <select onChange={(e) => setProsent(e.target.value)}>
            <option value="">Velg</option>
            <option value="18">18</option>
            <option value="12">12</option>
            <option value="12/18">12/18</option>
            <option value="18/12">18/12</option>
            <option value="16">16</option>
          </select>
        </div>
        <div className={`form-box ${editModeColor}`}>
          <p>Anm 1</p>
          <input onChange={(e) => setAnm1(e.target.value)} className="input" />
        </div>
        <div className={`form-box ${editModeColor}`}>
          <p>Anm 2</p>
          <input onChange={(e) => setAnm2(e.target.value)} className="input" />
        </div>
        <div className={`form-box ${editModeColor}`}>
          <p>VS-66 ty</p>
          <select onChange={(e) => setVs66Ty(e.target.value)}>
            <option value="">Velg</option>
            <option value="16">16</option>
            <option value="19">19</option>
            <option value="22">22</option>
            <option value="25">25</option>
            <option value="32">32</option>
          </select>
        </div>
        <div className={`form-box ${editModeColor}`}>
          <p>VS-66 br</p>
          <select onChange={(e) => setVs66Br(e.target.value)}>
            <option value="">Velg</option>
            <option value="75">75</option>
            <option value="100">100</option>
            <option value="125">125</option>
            <option value="75, 100">75, 100</option>
            <option value="100, 125">100, 125</option>
            <option value="125, 150">125, 150</option>
            <option value="75, 100, 125">75, 100, 125</option>
            <option value="100, 125, 150">100, 125, 150</option>
            <option value="125, 150, 175">125, 150, 175</option>
            <option value="75, 100, 125, 150">75, 100, 125, 150</option>
            <option value="100, 125, 150, 175">100, 125, 150, 175</option>
          </select>
        </div>
        <div className="form-box xtra-box">
          <p>VS-66 Xtra ty</p>
          <select onChange={(e) => setVs66xtraTy(e.target.value)}>
            <option value="">Velg</option>
            <option value="16">16</option>
            <option value="19">19</option>
            <option value="22">22</option>
            <option value="25">25</option>
          </select>
        </div>

        <div className="form-box xtra-box">
          <p>VS-66 Xtra br</p>
          <select onChange={(e) => setVs66XtraBr(e.target.value)}>
            <option value="">Velg</option>
            <option value="75">75</option>
            <option value="100">100</option>
            <option value="125">125</option>
            <option value="75, 100">75, 100</option>
            <option value="100, 125">100, 125</option>
            <option value="125, 150">125, 150</option>
            <option value="75, 100, 125">75, 100, 125</option>
            <option value="75, 100, 125, 150">75, 100, 125, 150</option>
            <option value="100, 125, 150">100, 125, 150</option>
            <option value="125, 150, 175">125, 150, 175</option>
            <option value="100, 125, 150, 175">100, 125, 150, 175</option>
          </select>
        </div>
        <div className={`form-box ${editModeColor}`}>
          <p>MKV ty</p>
          <select onChange={(e) => setMkvTy(e.target.value)}>
            <option value="">Velg</option>
            <option value="16">16</option>
            <option value="19">19</option>
            <option value="22">22</option>
            <option value="25">25</option>
            <option value="32">32</option>
          </select>
        </div>
        <div className={`form-box ${editModeColor}`}>
          <p>MKV br</p>
          <select onChange={(e) => setMkvBr(e.target.value)}>
            <option value="">Velg</option>
            <option value="75">75</option>
            <option value="100">100</option>
            <option value="125">125</option>
            <option value="75, 100">75, 100</option>
            <option value="100, 125">100, 125</option>
            <option value="125, 150">125, 150</option>
            <option value="75, 100, 125">75, 100, 125</option>
            <option value="75, 100, 125, 150">75, 100, 125, 150</option>
            <option value="100, 125, 150">100, 125, 150</option>
            <option value="125, 150, 175">125, 150, 175</option>
            <option value="100, 125, 150, 175">100, 125, 150, 175</option>
          </select>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            flex-wrap: wrap;
          }
          .form-box {
            border: 1px solid black;
            padding: 0.5rem;
            margin: 0.1rem;
            border-radius: 5px;
            background-image: linear-gradient(#f6d365 0%, #fda085 100%);
          }
          .input {
            width: 3rem;
          }
          .xtra-box {
            background-image: linear-gradient(to top, #9890e3 0%, #b1f4cf 100%);
          }
          .edit-header {
            color: red;
          }
          .edit-mode-color {
            background-image: linear-gradient(#fdfad8 0%, #f9f523 100%);
          }
        `}
      </style>
    </>
  );
};

export default InputComponent;
