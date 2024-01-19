import React,{ memo } from "react";

const NickNamesCard = ({ name }) => {
  let randomNumber = Math.random() * 100;
  return (
    <li
      key={name}
      className={`${
        randomNumber > 40
          ? randomNumber > 60
            ? randomNumber > 80
              ? "bg-Yellow"
              : "bg-Orange"
            : "bg-Teal"
          : randomNumber > 20
          ? "bg-Green"
          : "bg-Blue"
      } text-white px-6 py-1 rounded-[1.5rem] Indie`}
    >
      {name}
    </li>
  );
};

export default memo(NickNamesCard);
