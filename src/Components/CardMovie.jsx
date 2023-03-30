import React, { useState } from "react";
import MovieOverview from "./MovieOverview";

const CardMovie = () => {
  const [toggleOverview, setToggleOverview] = useState(false);

  const handleOnMouseOver = () => {
    setToggleOverview(true);
  };
  const handleOnMouseLeave = () => {
    setToggleOverview(false);
  };

  return (
    <>
      <div
        className="bg-gradient-to-r from-indigo-500  w-[300px] h-[350px] rounded-lg hover:shadow-slate-100/40 hover:shadow-2xl hover:scale-110 transition delay-200 duration-300 ease-in-out hover:cursor-pointer relative"
        // onClick={() => handleOverview()}
        onMouseOver={() => handleOnMouseOver()}
        onMouseLeave={() => handleOnMouseLeave()}
      >
        <img
          src="https://image.tmdb.org/t/p/w500/ovM06PdF3M8wvKb06i4sjW3xoww.jpg"
          className="object-cover h-[300px] rounded-t-lg"
        />

        <div className="flex justify-between items-center mt-3 mx-4">
          <span className="text-white">Movie Name</span>
          <div className="text-white">rate</div>
        </div>

        {toggleOverview && <MovieOverview />}
      </div>
    </>
  );
};

export default CardMovie;
