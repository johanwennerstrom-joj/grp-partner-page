import React, { useState } from "react"
import "./index.scss"
import Sort from "../../data/sort.json"
import Input from "./input"
import SearchButton from "../SearchButton/index"
import reset from "../../images/reset.png"

const ButtonRow = props => {
  const [workReg, setWorkReg] = useState(false)
  const [themes, setThemes] = useState(false)
  const [hq, setHq] = useState(false)
  const [types, setTypes] = useState(false)

  return (
    <div className="wrap">
      <h2 className="filter__heading">Find a Partner</h2>

      <div className="main__container">
        <SearchButton clicked={props._clicked} />
        <div className="inputWrap">
          <button onClick={() => setWorkReg(!workReg)}>Working Region</button>
          <ul style={workReg ? { display: "block" } : { display: "none" }}>
            {Sort.workingRegion.map(input => {
              return (
                <Input
                  value={input.value}
                  change={props.changed}
                  display={input.value[1]}
                  key={input.value.indexOf() * Math.random()}
                />
              )
            })}
          </ul>
        </div>
        <div className="inputWrap">
          <button onClick={() => setThemes(!themes)}>Themes</button>
          <ul style={themes ? { display: "block" } : { display: "none" }}>
            {Sort.themes.map(input => {
              return (
                <Input
                  value={input.value}
                  change={props.changed}
                  display={input.value[1]}
                  key={input.value.indexOf() * Math.random()}
                />
              )
            })}
          </ul>
        </div>
        <div className="inputWrap">
          <button onClick={() => setHq(!hq)}>Headquarters</button>
          <ul style={hq ? { display: "block" } : { display: "none" }}>
            {Sort.hq.map(input => {
              return (
                <Input
                  value={input.value}
                  change={props.changed}
                  display={input.value[1]}
                  key={input.value.indexOf() * Math.random()}
                />
              )
            })}
          </ul>
        </div>
        <div className="inputWrap">
          <button onClick={() => setTypes(!types)}>Organization Type</button>
          <ul style={types ? { display: "block" } : { display: "none" }}>
            {Sort.types.map(input => {
              return (
                <Input
                  value={input.value}
                  change={props.changed}
                  display={input.value[1]}
                  key={input.value.indexOf() * Math.random()}
                />
              )
            })}
          </ul>
        </div>
      </div>
      <span className="search__query">
        <h3>
          <button onClick={props.clickReset}>
            <img src={reset} alt="reset button" height="20" width="20" />
          </button>{" "}
          Search query:
        </h3>
        {props.query}
      </span>
    </div>
  )
}

export default ButtonRow
