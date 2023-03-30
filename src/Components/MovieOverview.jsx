import React from "react";

const MovieOverview = (props) => {
  const { movieOverview } = props;

  return (
    <div className="w-[300px] bg-black/60 py-5 px-3 absolute bottom-0">
      <p className="text-stone-200 text-[12px] indent-3">{movieOverview}</p>
    </div>
  );
};

export default MovieOverview;
