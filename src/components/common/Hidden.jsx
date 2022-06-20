import React from "react";
import { useMediaQuery } from "react-responsive";

const Hidden = ({ children }) => {
  const small = useMediaQuery({ query: `(max-width: 550px)` });
  return (
    <>
      <div className="container">{!small && children}</div>

      <style jsx>{`
        .container {
        }
      `}</style>
    </>
  );
};

export default Hidden;
