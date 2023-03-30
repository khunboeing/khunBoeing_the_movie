import React, { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import CardMovie from "../Components/CardMovie";
import RecommentMovie from "../Components/RecommentMovie";
import axios from "axios";

const Home = () => {
  const [dataMovies, setDataMovies] = useState(null);

  useEffect(() => {
    (async () => {
      const movies = await fireMovieApi();

      setDataMovies(movies.data);
    })();
  }, []);

  const fireMovieApi = async () => {
    const movieData = await axios.get(
      "https://api.themoviedb.org/3/trending/all/week?api_key=229a6a0f891df5bf1176a4668af885c6"
    );

    return movieData;
  };

  return (
    <div className="relative">
      <Nav />
      <RecommentMovie dataMovies={dataMovies?.results} />
      <div className="flex justify-center">
        <div className="grid grid-cols-1 grid-flow-rows gap-7 md:grid-col-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {dataMovies?.results.map((movie, idx) => {
            return <CardMovie movie={movie} key={idx} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
