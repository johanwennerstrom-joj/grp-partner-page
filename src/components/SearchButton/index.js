import React from "react"
import "./index.scss"
import search from "../../images/search.png"

const SearchButton = props => {
  return (
    <div className="btn-wrap">
      <button className="searchButton" onClick={props.clicked}>
        <img src={search} alt="search button" height="30" width="30" />
      </button>
    </div>
  )
}
export default SearchButton
