import React from 'react';
import ReactPaginate from 'react-paginate';

import Event from './Event.jsx';

import styles from '../css/searchResults.css';

const SearchResults = ({ events, searched, currentPage, totalResults, handlePageClick }) => {

  if (searched) {
    const start = 1 + (currentPage - 1) * 10;
    const end = currentPage * 10;
    const pageCount = Math.ceil(totalResults/10);
    const eventList = events.map((event, index) => {
      return <Event key={index} item={event} />
    });
    return(
      <>
        <h2>Search Results for "{searched}"</h2>
        <span>Displaying results {start} - {end > totalResults ? totalResults : end} of {totalResults}.</span>
        <ReactPaginate
          previousLabel={'prev'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={styles['pagination']}
          subContainerClassName={`${styles['pages']} ${styles['pagination']}`}
          activeClassName={styles['active']}
        />
        <div>
          {eventList}
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default SearchResults;
