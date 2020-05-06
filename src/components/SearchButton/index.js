import React from "react"
import "./index.scss"

const SearchButton = props => {
  return (
    <div className="searchButton">
      <button onClick={props.clicked}>Apply Filter</button>
    </div>
  )
}
export default SearchButton
