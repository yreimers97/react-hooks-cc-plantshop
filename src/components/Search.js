import React from "react";

function Search({searchPlants, updateSearchPlants}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchPlants}
        onChange={updateSearchPlants}
          //console.log("Searching...")}
      />
    </div>
  );
}

export default Search;
