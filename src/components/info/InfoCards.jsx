import React from "react";
import Image from "next/image";

const InfoCards = ({ img, side1, side2, title, text, link }) => {
  return (
    <>
      <div className="container">
        <div className="text-container">
          <h4 className="header">{title}</h4>
          <p className="text">
            {text}
            {link}
          </p>
        </div>
        <div className="img-container">
          <Image src={img} />
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-areas: "left right";
            grid-column-gap: 5rem;
            border-bottom: 1px solid #33333345;
            padding-bottom: 5rem;
            margin-bottom: 5rem;
            grid-template-columns: 1fr 1fr;
          }
          .header {
            color: #313131;
            font-size: 1.8rem;
            margin-bottom: 1.2rem;
            font-weight: normal;
            font-family: var(--font);
          }
          .text {
            color: #2e2e2e;
          }
          .img-container {
            grid-area: ${side1};
            overflow: hidden;
            border-radius: 20px;
          }
          .text-container {
            grid-area: ${side2};
          }
          @media (max-width: 910px) {
            .container {
              grid-template-areas:
                "left"
                "right";
              grid-template-columns: 1fr;
            }
            .text-container {
              margin-bottom: 1rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default InfoCards;
