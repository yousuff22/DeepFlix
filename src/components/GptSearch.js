import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { Netflix_bgIMG } from "../utils/Netflix";

const GptSearch = () => {
  return (
    <div>
      <div className=" fixed -z-10">
        <img src={Netflix_bgIMG} />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;