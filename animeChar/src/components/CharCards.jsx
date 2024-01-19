import React from "react";
import Button from "../assets/Button";
import NickNamesCard from "./NickNamesCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const CharCards = ({ data, randomNumber }) => {
  return (
    <div className="Shadows tracking-widest text-[1.75rem] flex justify-between items-center gap-4">
      <div className="flex justify-center gap-8 items-center">
        <img
          className=" max-h-[10rem] aspect-[5/8] h-auto"
          src={data.images.jpg.image_url}
          alt={data.name}
        />
        <div className="flex flex-col justify-between my-4 w-full gap-4">
          <h1>{data.name}</h1>
          <ul className="flex gap-4 w-full flex-wrap">
            {data.nicknames.length !== 0 ? (
              data.nicknames.map((name) => <NickNamesCard name={name} />)
            ) : (
              <NickNamesCard name={data.name} />
            )}
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4">
        <div className="flex justify-center items-center gap-4"><FontAwesomeIcon icon={faHeart} style={{color: "#d94545",}} /> <span>{new Intl.NumberFormat("en-IN").format(data.favorites)}</span></div>
        <Button randomNumber={randomNumber} id={data.mal_id} url={data.url} />
      </div>
    </div>
  );
};

export default CharCards;
