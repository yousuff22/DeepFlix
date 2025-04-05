import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/moviesSlice";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWVkZmNmYmIyZjk5YzllNTVhMmNiMGY3ZTQ4N2Q2MSIsIm5iZiI6MTc0MzAwMDczNC41Mzc5OTk5LCJzdWIiOiI2N2U0MTQ5ZTBlZTUzZDRlNzFmMGM1ZjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NGs7yGCfVCewhQBd42RbFzylNxe2dAjZbIW0b2mW92I",
  },
};

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        options
      );
      const json = await response.json();

      dispatch(addTopRatedMovies(json.results));
    } catch (error) {
      console.error("Error fetching top-rated movies:", error);
    }
  };

  useEffect(() => {
    getTopRatedMovies();
  }, [dispatch]);
};

export default useTopRatedMovies;
