import React, { useState } from "react"
import "./index.scss"

const ButtonRow = props => {
  const [show, setShow] = useState({})

  const toggleShow = e => {
    // e.preventDefault()
    // setShow(show => !show)

    console.log(e.target)
  }
  // const submitValue = () => {
  //     const submitDetails = {
  //     input,
  //     }
  // }
  return (
    <div>
      <ul>
        <li>
          <div>
            <button onClick={toggleShow}>Working Region</button>
            <ul style={{ display: "none" }}>
              <li>
                <input type="checkbox" value="Africa" id="Africa" />
                <label id="Africa">Africa</label>
              </li>
              <li>
                <input type="checkbox" value="Asia" id="Asia" />
                <label id="Asia">Asia</label>
              </li>
              <li>
                <input type="checkbox" value="Europe" id="Europe" />
                <label id="Europe">Europe</label>
              </li>
              <li>
                <input type="checkbox" value="Middle East" id="Middle East" />
                <label id="Middle East">Middle East</label>
              </li>
              <li>
                <input type="checkbox" value="Global" id="Global" />
                <label id="Global">Global</label>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            <button onClick={toggleShow}>Themes</button>
            <ul style={show ? { display: "none" } : { display: "block" }}>
              <li>
                <input
                  type="checkbox"
                  value="Private sector and investment"
                  id="Private sector and investment"
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
            <button onClick={props.clicked}>Organization Type</button>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ButtonRow

/*          <ul>
              <li>
                <input
                  type="checkbox"
                  value="Private sector and investment"
                  id="Private sector and investment"
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
                />
                <label id="Information and technology">
                  Information and technology
                </label>
              </li>
            </ul>
          </div> */
