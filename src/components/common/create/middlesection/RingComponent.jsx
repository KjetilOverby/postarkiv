import React from "react";

const RingComponent = ({ children, color }) => {
  return (
    <>
      <div className="ring">{children}</div>
      <style jsx>
        {`
          .container {
          }
          .ring {
            height: 8.5rem;
            width: 3.5rem;
            background-image: ${color};
            border-radius: 5px;
            display: grid;
            place-items: center;
            margin-bottom: 1rem;
            border: 1px solid #8d8d8d;
            font-size: 0.8rem;
            margin-right: 0.3rem;
            transition: 0.5s;
            color: #ffffff;
            box-shadow: 5px 5px 5px #7e7e7eba;
            font-weight: 100;
          }
        `}
      </style>
    </>
  );
};

export default RingComponent;
