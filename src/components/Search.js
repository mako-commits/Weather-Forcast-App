import React, { useState } from "react";

const Search = ({ search, query, setQuery }) => {
  return (
    <>
      <section className="search">
        <form>
          <p>Your city</p>
          <input
            type="text"
            className="form-control"
            placeholder="Search Location"
            aria-label="Your city"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </form>
      </section>
      {/* <h1>{text}</h1> */}
    </>
  );
};
export default Search;
