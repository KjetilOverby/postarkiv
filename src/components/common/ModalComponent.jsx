import React from "react";

const ModalComponent = ({
  setOpenDeleteModal,
  deleteHandler,
  klasse,
  header,
}) => {
  return (
    <>
      <div className="container">
        <div className="modal-box">
          <h2>{header}?</h2>
          <div className="btn-box">
            <button
              className="btn cancelBtn"
              onClick={() => setOpenDeleteModal(false)}
            >
              Avbryt
            </button>
            <button className="btn deleteBtn" onClick={deleteHandler}>
              Slett
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .btn {
            height: 3rem;
            width: 6rem;
            border: none;
          }
          .btn:hover {
            cursor: pointer;
          }
          .btn-box {
            margin-top: 4rem;
            width: 100%;
            display: flex;
            justify-content: space-around;
          }
          .container {
            width: 100vw;
            height: 100vh;
            position: fixed;
            top: 0;
            background: #333333be;
            display: grid;
            place-items: center;
            z-index: 9999;
          }
          .deleteBtn {
            background: red;
            transition: 0.5s;
            color: white;
          }
          .deleteBtn:hover {
            background: #a10404;
          }
          .modal-box {
            height: 15rem;
            width: 20rem;
            background: #ffffff;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            padding: 2rem;
          }
        `}
      </style>
    </>
  );
};

export default ModalComponent;
