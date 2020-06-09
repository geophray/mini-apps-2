import React from 'react';

const SearchForm = ({ query, updateVal, submit }) => {
  return(
    <form onSubmit={submit}>
      <label>
        Search:
        <input type="text" value={query} name="query" onChange={updateVal} />
      </label>
      <input type="submit" value="Search" />
    </form>
  )
};

export default SearchForm;
