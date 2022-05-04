import React from "react";
import Link from "next/link";

const ButtonComponent = ({ title, func, ml, type, link }) => {
  return (
    <>
      {!link && (
        <button onClick={func} className={`container ${type} `}>
          {title}
        </button>
      )}
      {link && (
        <Link href={`${link}`}>
          <button className={`container ${type} `}>{title}</button>
        </Link>
      )}

      <style jsx>
        {`
          .container {
            background: dodgerblue;
            min-width: 8rem;
            padding: 0.5rem;
            border: none;
            border-radius: 5px;
            color: white;
            transition: background 0.5s;
            text-transform: uppercase;
            margin: 1rem 1rem 1rem 0;
            margin-left: ${ml};
          }
          .container:hover {
            background: #1973cc;
            cursor: pointer;
          }
          .outline {
            border: 1px solid #1973cc;
            background: transparent;
            color: #1973cc;
          }
          .outline:hover {
            background: #1973cc47;
          }
          .red-outline {
            border: 1px solid #cc2519;
            background: transparent;
            color: #cc2519;
          }
          .red-outline:hover {
            background: #cc25193b;
          }
        `}
      </style>
    </>
  );
};

export default ButtonComponent;
