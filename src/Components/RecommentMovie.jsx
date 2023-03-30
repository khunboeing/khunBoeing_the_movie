import React, { useEffect, useState } from "react";

const RecommentMovie = (props) => {
  const [indexMovie, setIndexMovie] = useState(0);
  const { dataMovies } = props;

  useEffect(() => {
    let slideMovies;
    if (dataMovies !== undefined) {
      slideMovies = setInterval(() => {
        setIndexMovie((prev) => (prev >= dataMovies.length - 1 ? 0 : prev + 1));
      }, 3000);
    }
    return () => {
      clearInterval(slideMovies);
    };
  }, [dataMovies]);

  return (
    <div className="mb-10">
      <div className="object-cover relative">
        {dataMovies !== undefined && (
          <img
            src={`https://image.tmdb.org/t/p/w500${dataMovies[indexMovie].backdrop_path}`}
            className="w-full"
          />
        )}
        <div className="absolute bottom-0 bg-slate-900/50 p-5">
          <p className="text-white text-xl">
            {dataMovies !== undefined &&
              (dataMovies[indexMovie].title
                ? dataMovies[indexMovie].title
                : dataMovies[indexMovie].name)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecommentMovie;
