import React from "react";
import "./SearchBox.css";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="searchbox">
      <input
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
