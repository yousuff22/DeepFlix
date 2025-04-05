import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const ApiOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWVkZmNmYmIyZjk5YzllNTVhMmNiMGY3ZTQ4N2Q2MSIsIm5iZiI6MTc0MzAwMDczNC41Mzc5OTk5LCJzdWIiOiI2N2U0MTQ5ZTBlZTUzZDRlNzFmMGM1ZjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NGs7yGCfVCewhQBd42RbFzylNxe2dAjZbIW0b2mW92I",
  },
};

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      ApiOptions
    );
    const json = await data.json();
    
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;