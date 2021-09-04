import React, { useMemo } from "react";
import { HeroCard } from "../heroes/HeroCard";
import { useForm } from "../../hooks/useForm";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { getHerosByName } from "../../selectors/getHerosByName";

export const SearchScreen = ({ history }) => {
  const location = useLocation();

  const searchs = location.search;

  const { q = "" } = useMemo(() => {
    return queryString.parse(searchs);
  }, [searchs]);

  const { formValues, handleInputChange } = useForm({
    search: q,
  });

  const { search } = formValues;

  const heroesFiltered = useMemo(() => getHerosByName(search), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${search}`);
  };

  return (
    <div>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="search"
              className="form-control"
              placeholder="Find Your Hero"
              onChange={handleInputChange}
              value={search}
              autoComplete="off"
            />

            <button type="submit" className="btn btn-block btn-outline-primary">
              Search...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Result</h4>
          {q === "" && <div className="alert alert-info">Search a Hero</div>}

          {q !== "" && heroesFiltered.length === 0 && (
            <div className="alert alert-danger">
              There is not a hero with {q}
            </div>
          )}

          {heroesFiltered.map((heroe) => (
            <HeroCard key={heroe.id} heroe={heroe} />
          ))}
        </div>
      </div>
    </div>
  );
};
