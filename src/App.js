import { useState } from "react"
import Search from "./Search/Search"
import { SearchContext, MovieContext } from "./context/context"
import './App.css';

let OMBD_API = "d22e2d17"

// http://omdbapi.com/?apikey=d22e2d17&s=$

function App() {
  const [searchValue, setSearchValue] = useState("")
  const [movieArray, setMovieArray] = useState([])

  async function handleOnChange(value) {
    setSearchValue(value)

    const response = await fetch(
      `http://omdbapi.com/?apikey=${OMBD_API}&s=${searchValue}`
    )

    const data = await response.json()
      console.log(data)
    setMovieArray(data.Search || [])

  }

  const searchContextValueObj = {
    movieSearchTitle: searchValue,
    handleOnChange,
    OMBD_API,
  }

  return (
    <div style={{ textAlign: "center" }}>
      <SearchContext.Provider value={searchContextValueObj}>
        <Search />
      </SearchContext.Provider>
    </div>
  )
}


export default App;


