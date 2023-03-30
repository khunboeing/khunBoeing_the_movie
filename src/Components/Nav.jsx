import React from "react";
import Input from "@mui/joy/Input";
import SearchIcon from "@mui/icons-material/Search";

const Nav = (props) => {
  const { setSearchMovie, searchMovie, handleSearch } = props;

  return (
    <div className="flex justify-between px-6 py-6 items-center absolute top-0 z-10 w-full">
      <div className="text-red-500 text-xl">Boeing Movies</div>
      <div className="w-1/3">
        <Input
          endDecorator={
            <SearchIcon
              className="cursor-pointer"
              onClick={() => handleSearch()}
            />
          }
          variant="outlined"
          className=""
          placeholder="Search"
          onChange={(e) => setSearchMovie(e.target.value)}
          value={searchMovie}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
      </div>
    </div>
  );
};

export default Nav;
