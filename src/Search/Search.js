import React, { useContext } from 'react'
import { SearchContext } from "../context/context"



const Search = () => {
    // let fromAppComponent = useContext(SearchContext)
    // console.log(fromAppComponent)
    const { handleOnChange, movieSearchTitle } = useContext(SearchContext)

    return (
        <div>
            <input
                type="search"
                name="movie-search"
                value={movieSearchTitle}
                onChange={(e) => handleOnChange(e.target.value)}

            />
        </div>
    )
}



export default Search