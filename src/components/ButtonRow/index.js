import React, { useState } from "react"
import "./index.scss"

const ButtonRow = props => {
  // const [show, setShow] = useState({})

  //   const toggleShow = e => {
  //     e.preventDefault()
  //     //setShow(show => !show)
  //   }

  return (
    <div>
      <ul>
        <li>
          <div>
            <button>Working Region</button>
            <ul>
              <li>
                <input
                  type="checkbox"
                  value={["workingRegion", "Africa"]}
                  id="Africa"
                  onClick={props.clicked}
                  onChange={props.changed}
                />
                <label id="Africa">Africa</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["workingRegion", "Asia"]}
                  id="Asia"
                  onClick={props.clicked}
                  onChange={props.changed}
                />
                <label id="Asia">Asia</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["workingRegion", "Europe"]}
                  id="Europe"
                  onClick={props.clicked}
                  onChange={props.changed}
                />
                <label id="Europe">Europe</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["workingRegion", "Middle East"]}
                  id="Middle East"
                  onClick={props.clicked}
                  onChange={props.changed}
                />
                <label id="Middle East">Middle East</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["workingRegion", "Global"]}
                  id="Global"
                  onClick={props.clicked}
                  onChange={props.changed}
                />
                <label id="Global">Global</label>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            <button>Themes</button>
            <ul>
              <li>
                <input
                  type="checkbox"
                  value="Private sector and investment"
                  id="Private sector and investment"
                  onClick={props.clicked}
                  onChange={props.changed}
                />
                <label id="Private sector and investment">
                  Private sector and investment
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value="Disaster risk reduction"
                  id="Disaster risk reduction"
                  onClick={props.clicked}
                  onChange={props.changed}
                />
                <label id="Disaster risk reduction">
                  Disaster risk reduction
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value="Innovation and scaling"
                  id="Innovation and scaling"
                  onClick={props.clicked}
                  onChange={props.changed}
                />
                <label id="Innovation and scaling">
                  Innovation and scaling
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value="Food and water security"
                  id="Food and water security"
                  onClick={props.clicked}
                  onChange={props.changed}
                />
                <label id="Food and water security">
                  Food and water security
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value="Information and technology"
                  id="Information and technology"
                  onClick={props.clicked}
                  onChange={props.changed}
                />
                <label id="Information and technology">
                  Information and technology
                </label>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            <button>Headquarters</button>
          </div>
        </li>
        <li>
          <div>
            <button>Organization Type</button>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ButtonRow
