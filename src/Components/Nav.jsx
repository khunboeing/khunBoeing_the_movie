import React from "react";
import Input from "@mui/joy/Input";
import SearchIcon from "@mui/icons-material/Search";

const Nav = () => {
  return (
    <div className="flex justify-between px-6 py-6 items-center absolute top-0 z-10 w-full">
      <div className="text-white text-2xl">Boeing Movies</div>
      <div className="w-1/3">
        <Input
          endDecorator={<SearchIcon />}
          variant="outlined"
          className=""
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Nav;
