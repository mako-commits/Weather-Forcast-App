import React, { useRef, Fragment } from "react";

const Search = (props) => {
  const cityInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const cityName = cityInputRef.current.value;
    props.onSubmitHandler(cityName);
  };
  return (
    <Fragment>
      <section className="search">
        <form onSubmit={submitHandler}>
          <label htmlFor="city">Your city</label>
          <input
            id="city"
            type="text"
            className="form-control"
            placeholder="Search Location"
            aria-label="Your city"
            ref={cityInputRef}
            // onKeyPress={props.onSubmitHandler}
            // onChange={(e) => setQuery(e.target.value)}
            // value={query}
            // onKeyPress={search}
          />

          <button>Search</button>
        </form>
      </section>
    </Fragment>
  );
};
export default Search;
