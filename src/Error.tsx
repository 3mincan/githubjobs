import React from "react";
import Lottie from "react-lottie";
import animationData from "./assets/github.json";

export const Error = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <h3>There's an error. You shouldn't be here.</h3>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};
