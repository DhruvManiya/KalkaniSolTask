import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full h-[100vh] fixed -z-30">
      <img
        src="/bg2.jpg"
        alt=""
        className="absolute h-full w-full object-cover -z-20 blur-[4px]"
      />
      <div className="absolute h-full w-full bg-black/80 -z-20 flex flex-col justify-center items-center text-white Permanent text-[10rem]">404: Page NotFound<Link to={`/`} className="Shadows text-[2rem] text-Green">Go home</Link></div>
    </div>
  );
};

export default NotFound;
