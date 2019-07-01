import React from 'react';

let SearchBar = ({searchHandle}) => (
    <div>
        <input type = "text" id="term" />
        <button id = "searchBtn" onClick={(e) => {e.preventDefault(); searchHandle()}}>
        </button>
    </div>
)

export default SearchBar;