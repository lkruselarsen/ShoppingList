import React from "react";
import { StyledSearchBar, StyledGreenSearchBar } from "./styles";

const SearchBar = ({ keyword, setKeyword, onChange }) => {
  return (
    <StyledSearchBar>
      <input
        className="SearchBar"
        key="random1"
        placeholder={"🔍  search for product"}
        onChange={onChange}
      />
    </StyledSearchBar>
  );
};

export default SearchBar;
