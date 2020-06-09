import React from 'react';
import ReactPaginate from 'react-paginate';

const SearchResults = ({ events, searched, currentPage, totalResults, handlePageClick }) => {

  if (searched) {
    const start = 1 + (currentPage - 1) * 10;
    const end = currentPage * 10;
    const pageCount = Math.ceil(totalResults/10);
    return(
      <>
        <h2>Search Results for "{searched}"</h2>
        <span>Displaying results {start} - {end > totalResults ? totalResults : end} of {totalResults}.</span>

        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </>
    );
  } else {
    return null;
  }
};

export default SearchResults;
