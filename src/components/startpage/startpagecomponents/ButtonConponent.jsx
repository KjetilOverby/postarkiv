import React from "react";
import Link from "next/link";
import Image from "next/image";

const ButtonConponent = ({ header, imgWidth, link, image }) => {
  return (
    <>
      <Link href={`${link}`}>
        <div className="container">
          <div className="img-container">
            <Image src={image} />
          </div>
          <h1 className="header">{header}</h1>
        </div>
      </Link>
      <style jsx>
        {`
          .container {
            transition: 0.2s;
            width: 15rem;
            display: grid;
            place-items: center;
          }
          .container:hover {
            cursor: pointer;
            transform: translateY(-2rem);
          }
          .img {
            width: 100%;
          }
          .img-container {
            width: ${imgWidth};
            height: 8rem;
          }
          .header {
            color: #b6b6b6;
            font-weight: 100;
          }
          @media (max-width: 1000px) {
            .img-container {
              width: 4rem;
              height: 4rem;
            }
            .header {
              font-size: 0.8rem;
            }
            .container {
              margin-bottom: 4rem;
              width: 8rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default ButtonConponent;
