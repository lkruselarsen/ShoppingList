import React from "react";

const SearchBar = ({ keyword, setKeyword, onChange }) => {
  return (
    <input
      className="SearchBar"
      key="random1"
      placeholder={"search for product"}
      onChange={onChange}
    />
  );
};

export default SearchBar;
