import React from 'react'

import './SearchBox.css'

const Search = (props) => {

    return (

        <input
            className='search__box'
            type='search'
            placeholder='search a monster...'
            onChange={props.onSearchChange}
        />

    )
}

export default Search;