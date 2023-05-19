import React from "react";

const PageNotFound = () => {
  const style = {
    main: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
    },
    h1: {
      fontFamily: "circular-bold",
    },
  };
  return (
    <div style={style.main}>
      <h1 style={style.h1}>Page not found!</h1>
    </div>
  );
};

export default PageNotFound;
