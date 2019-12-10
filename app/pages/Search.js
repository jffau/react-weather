import React from "react";
import SearchBar from "../components/SearchBar";
import styled from "styled-components";

const Search = () => {
  return (
    <SearchContainer>
      <SearchBar />
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default Search;
