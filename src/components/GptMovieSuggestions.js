import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { moiveNames, movieResults } = useSelector((store) => store.gpt);
  if (!moiveNames) return null;

  return (
    <div className="p-4 m-4 text-white bg-black/50">
      <div>
        {moiveNames.map((moiveName, index) => (
          <MovieList
            key={moiveName}
            title={moiveName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;