import React from "react";

const Fillrings = ({ value }) => {
  return (
    <>
      <div className="container">
        <div className="fillRing">{value}</div>
      </div>
      <style jsx>
        {`
          .container {
          }
          .fillRing {
            height: 14rem;
            width: 5.5rem;
            background: linear-gradient(
                rgba(66, 100, 133, 0.8),
                rgba(0, 0, 0, 0.4),
                rgba(80, 95, 109, 0.8)
              ),
              url("https://images.unsplash.com/photo-1464639351491-a172c2aa2911?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80");
            margin: 0 0.2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            z-index: 100;
            border-radius: 5px;
            font-size: 1.8rem;

            font-weight: 600;

            border: 1px solid #cacaca;
            background-size: cover;
            background-position: center;
          }
          @media (max-width: 1500px) {
            .fillRing {
              height: 12rem;
              width: 4.8rem;
              font-size: 1.4rem;
            }
          }
          @media (max-width: 1350px) {
            .fillRing {
              height: 9rem;
              width: 4rem;
              font-size: 1.2rem;
            }
          }
          @media (max-width: 1000px) {
            .fillRing {
              height: 7rem;
              width: 3rem;
              font-size: 0.9rem;
            }
          }
          @media (max-width: 550px) {
            .fillRing {
              height: 4rem;
              width: 1.8rem;
              font-size: 0.7rem;
              font-weight: 100;
              border-radius: 2px;
              margin: 0 0.1rem;
            }
            .sagsnitt {
              font-size: 0.8rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default Fillrings;
