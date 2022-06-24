import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const Hidden = ({ children, size }) => {
  const small = useMediaQuery({ query: `(min-width: 550px)` });
  const medium = useMediaQuery({ query: `(min-width: 1200px)` });
  const large = useMediaQuery({ query: `(min-width: 1900px)` });

  const smallUp = useMediaQuery({ query: `(max-width: 550px)` });
  const mediumUp = useMediaQuery({ query: `(max-width: 1200px)` });
  const largeUp = useMediaQuery({ query: `(max-width: 1900px)` });

  const [sizeDetect, setSizeDetect] = useState(small);

  useEffect(() => {
    if (size === "small-down") {
      setSizeDetect(small);
    } else if (size === "medium-down") {
      setSizeDetect(medium);
    } else if (size === "large-down") {
      setSizeDetect(large);
    } else if (size === "small-up") {
      setSizeDetect(smallUp);
    } else if (size === "medium-up") {
      setSizeDetect(mediumUp);
    } else if (size === "large-up") {
      setSizeDetect(largeUp);
    }
  });

  return (
    <>
      <div className="container">{sizeDetect && children}</div>

      <style jsx>{`
        .container {
        }
      `}</style>
    </>
  );
};

export default Hidden;
