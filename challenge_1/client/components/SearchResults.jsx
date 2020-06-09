import React from 'react';

const SearchResults = ({ events, searched, currentPage, totalResults }) => {

  if (searched) {
    const start = 1 + (currentPage - 1) * 10;
    const end = currentPage * 10;
    return(
      <>
        <h2>Search Results for "{searched}"</h2>
        <span>Displaying results {start} - {end} of {totalResults}.</span>
      </>
    );
  } else {
    return null;
  }
};

export default SearchResults;
