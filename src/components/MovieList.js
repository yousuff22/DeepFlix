import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  
  return (
    <div className="px-6 ">
        <h2 className=" text-white font-bold text-lg md:text-2xl py-3">{title}</h2>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} title={title}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;