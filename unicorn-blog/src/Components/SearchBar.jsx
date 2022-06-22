import React from "react";

const SearchBar = (props) => {
    return (
        <input className='Searchbar-Input' onChange={props.handleSearchText} value={props.value} />
    )
}

export default SearchBar