import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const ApiOptions = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWVkZmNmYmIyZjk5YzllNTVhMmNiMGY3ZTQ4N2Q2MSIsIm5iZiI6MTc0MzAwMDczNC41Mzc5OTk5LCJzdWIiOiI2N2U0MTQ5ZTBlZTUzZDRlNzFmMGM1ZjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NGs7yGCfVCewhQBd42RbFzylNxe2dAjZbIW0b2mW92I",
    },
  };
  const dispatch = useDispatch();

  const fetchTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      ApiOptions
    );

    const json = await data.json();
    const trailer = json.results?.[0];

    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    fetchTrailer();
  }, []);
};

export default useMovieTrailer;
