import React, { useState } from "react"
import "./index.scss"
import Sort from "../../data/sort.json"
import Input from "./input"
import Arrow from "./arrow.svg"
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
        <div className="inputWrap">
          <button onClick={() => setWorkReg(!workReg)} onFocus={() => void 0}>
            Working Region
            <img src={Arrow} alt="Arrow" />
          </button>
          <ul
            style={workReg ? { display: "block" } : { display: "none" }}
            onMouseLeave={() => setWorkReg(!workReg)}
          >
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
          <button onClick={() => setThemes(!themes)} onFocus={() => void 0}>
            Themes
            <img src={Arrow} alt="Arrow" />
          </button>
          <ul
            style={themes ? { display: "block" } : { display: "none" }}
            onMouseLeave={() => setThemes(!themes)}
          >
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
          <button onClick={() => setHq(!hq)} onFocus={() => void 0}>
            Headquarters
            <img src={Arrow} alt="Arrow" />
          </button>
          <ul
            style={hq ? { display: "block" } : { display: "none" }}
            onMouseLeave={() => setHq(!hq)}
          >
            {Sort.hq.map(input => {
              return (
                <Input
                  value={input.value}
                  change={props.changed}
                  display={input.value[1]}
                  key={input.value.indexOf() * Math.random()}
                  _clicked
                />
              )
            })}
          </ul>
        </div>
        <div className="inputWrap">
          <button onClick={() => setTypes(!types)} onFocus={() => void 0}>
            Organization Type
            <img src={Arrow} alt="Arrow" />
          </button>
          <ul
            style={types ? { display: "block" } : { display: "none" }}
            onMouseLeave={() => setTypes(!types)}
          >
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
        <h3 className="reset__button">
          <button onClick={props.clickReset}>
            <img src={reset} alt="reset button" height="20" width="20" />
          </button>{" "}
          Search query: <h5>{props.query}</h5>
        </h3>

        <SearchButton clicked={props._clicked} />
      </span>
    </div>
  )
}

export default ButtonRow
