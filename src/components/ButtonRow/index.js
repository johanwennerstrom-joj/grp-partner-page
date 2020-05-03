import React, { useState } from "react"
import "./index.scss"

const ButtonRow = props => {
  const [show, setShow] = useState(true)
  const [show1, setShow1] = useState(true)
  const [show2, setShow2] = useState(true)
  const [show3, setShow3] = useState(true)

  const toggleShow = () => {
    setShow(!show)
  }
  const toggleShow1 = () => {
    setShow1(!show1)
  }
  const toggleShow2 = () => {
    setShow2(!show2)
  }
  const toggleShow3 = () => {
    setShow3(!show3)
  }
  return (
    <div>
      <ul>
        <li>
          <div>
            <button onClick={toggleShow}>Working Region</button>
            <ul style={show ? { display: "none" } : { display: "block" }}>
              <li>
                <input
                  type="checkbox"
                  value="Africa"
                  id="Africa"
                  onChange={props.changed}
                />
                <label id="Africa">Africa</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value="Asia"
                  id="Asia"
                  onChange={props.changed}
                />
                <label id="Asia">Asia</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value="Europe"
                  id="Europe"
                  onChange={props.changed}
                />
                <label id="Europe">Europe</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value="Middle East"
                  id="Middle East"
                  onChange={props.changed}
                />
                <label id="Middle East">Middle East</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value="Global"
                  id="Global"
                  onChange={props.changed}
                />
                <label id="Global">Global</label>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            <button onClick={toggleShow1}>Themes</button>
            <ul style={show1 ? { display: "none" } : { display: "block" }}>
              <li>
                <input
                  type="checkbox"
                  value="Private sector and investment"
                  id="Private sector and investment"
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
            <button onClick={props.clicked}>Headquarters</button>
          </div>
        </li>
        <li>
          <div>
            <button onClick={props.clicked}>Organization Type</button>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ButtonRow
