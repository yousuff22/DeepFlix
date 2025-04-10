import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { Netflix_bgIMG } from "../utils/Netflix";

const GptSearch = () => {
  return (
    <>
      <div className=" fixed -z-10">
        <img className="w-full h-screen object-cover sm:h-auto" src={Netflix_bgIMG} />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
