import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input className="m-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="text" placeholder="Search notes..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
  );
};

export default SearchBar;
