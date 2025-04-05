import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWVkZmNmYmIyZjk5YzllNTVhMmNiMGY3ZTQ4N2Q2MSIsIm5iZiI6MTc0MzAwMDczNC41Mzc5OTk5LCJzdWIiOiI2N2U0MTQ5ZTBlZTUzZDRlNzFmMGM1ZjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NGs7yGCfVCewhQBd42RbFzylNxe2dAjZbIW0b2mW92I",
  },
};

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getusePopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );

    const json = await data.json();

    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getusePopularMovies();
  }, []);
};

export default usePopularMovies;
