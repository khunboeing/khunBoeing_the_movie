import React, { useState } from "react";
import MovieOverview from "./MovieOverview";

const CardMovie = (props) => {
  const [toggleOverview, setToggleOverview] = useState(false);
  const { movie } = props;

  const handleOnMouseOver = () => {
    setToggleOverview(true);
  };
  const handleOnMouseLeave = () => {
    setToggleOverview(false);
  };

  return (
    <div
      className="bg-gradient-to-r from-indigo-500  w-[300px] h-[380px] rounded-lg hover:shadow-slate-100/40 hover:shadow-2xl hover:scale-110 transition delay-200 duration-300 ease-in-out hover:cursor-pointer relative "
      // onClick={() => handleOverview()}
      onMouseOver={() => handleOnMouseOver()}
      onMouseLeave={() => handleOnMouseLeave()}
    >
      <div className="h-[300px]">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className="object-cover  rounded-t-lg w-full h-full"
        />
      </div>

      <div className="flex justify-between items-center mt-3 mx-4">
        <span className="text-white">{movie.title || movie.name}</span>
        <div className="text-white bg-gray-600/40 p-1 rounded-lg">
          {Number(movie.vote_average).toFixed(1)}
        </div>
      </div>

      {toggleOverview && <MovieOverview movieOverview={movie.overview} />}
    </div>
  );
};

export default CardMovie;
