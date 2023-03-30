import React, { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import CardMovie from "../Components/CardMovie";
import RecommentMovie from "../Components/RecommentMovie";
import axios from "axios";

const Home = () => {
  const [dataMovies, setDataMovies] = useState(null);
  const [searchMovie, setSearchMovie] = useState("");
  console.log(searchMovie);

  useEffect(() => {
    (async () => {
      const movies = await fireMovieApi();

      setDataMovies(movies.data);
    })();
  }, []);

  const handleSearch = async () => {
    const moviesSearch = await fireSearchMovie(searchMovie);
    console.log(moviesSearch);
    setDataMovies(moviesSearch.data);
  };

  const fireMovieApi = async () => {
    const movieData = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    );

    return movieData;
  };
  const fireSearchMovie = async (nameMovie) => {
    const movieData = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&query=${nameMovie}&page=1&include_adult= true`
    );
    return movieData;
  };

  return (
    <div className="relative">
      <Nav
        searchMovie={searchMovie}
        setSearchMovie={setSearchMovie}
        handleSearch={handleSearch}
      />
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
