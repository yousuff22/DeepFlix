import React from "react";
import { useSelector } from "react-redux";
import VideoInfo from "./VideoInfo";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movie = useSelector((store) => store.movies?.nowPlayingMovies);

  if(!movie) return;
  const mainMovies = movie[0];
  
  const {original_title, overview, id} = mainMovies; 
  
  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoInfo title={original_title} overview={overview}/>
      <VideoBackground  movieid={id}/>
    </div>
  );
};

export default MainContainer;
