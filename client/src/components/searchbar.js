import React , { useState } from "react";
import "../searchbar.css" ;
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/offre?keyword=${keyword}&location=${location}`);
  };
  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input type="text" 
        name="keyword" 
        placeholder="Search keyword"
         value={keyword}
          onChange={(event) => setKeyword(event.target.value)} />

        <input type="text" 
        name="location"
         placeholder="Location"
           value={location}
          onChange={(event) => setLocation(event.target.value)}/>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;