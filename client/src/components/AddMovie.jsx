import React from 'react';

let AddMovie = ({addHandle}) => (
    <div>
        <input type = "text" id="add" />
        <button id = "searchBtn2" onClick={(e) => {e.preventDefault(); addHandle()}}>
        </button>
    </div>
)

export default AddMovie;