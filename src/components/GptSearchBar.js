import { useRef, useState } from "react";
import { addGptMovieResult } from "../utils/gptSlice";
import { useDispatch } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  // const lang = {
  //   en: {
  //     search: "Search",
  //     gptSearchPlaceholder: "What would you like to watch today?",
  //   },
  //   hindi: {
  //     search: "खोज",
  //     gptSearchPlaceholder: "आज आप क्या देखना चाहेंगे?",
  //   },
  //   spanish: {
  //     search: "buscar",
  //     gptSearchPlaceholder: "Qué te gustaría ver hoy?",
  //   },
  // };

  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWVkZmNmYmIyZjk5YzllNTVhMmNiMGY3ZTQ4N2Q2MSIsIm5iZiI6MTc0MzAwMDczNC41Mzc5OTk5LCJzdWIiOiI2N2U0MTQ5ZTBlZTUzZDRlNzFmMGM1ZjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NGs7yGCfVCewhQBd42RbFzylNxe2dAjZbIW0b2mW92I",
      },
    };
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    const json = await data.json();

    return json.results;
  };

  const handlGPTSearchClick = async (e) => {
    e.preventDefault();

    const DeepSeekQuery =
      "Act as a Movie Recommnedation System and suggest some movies for the query : " +
      searchText.current.value +
      ". only give name of 5 movies, comma seperated. like the example result give head. Example Result: Gadar, Sholay, Golmaal, kick, Don";

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer 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",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo",
          messages: [{ role: "user", content: DeepSeekQuery }],
        }),
      }
    );

    if (!response.choices) {
    }

    const data = await response.json();
    console.log(data);

    const deepMovies = data.choices[0].message.content.split(",");

    const promiseArray = deepMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieNames: deepMovies, movieResult: tmdbResults })
    );
  };

  return (
    <div className="pt-[10%] flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">
        Movie Recommendation System
      </h1>
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 bg-white rounded-lg col-span-9"
          placeholder={lang.en.gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-md col-span-3"
          onClick={handlGPTSearchClick}
        >
          {lang.en.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
