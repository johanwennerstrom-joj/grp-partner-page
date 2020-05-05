import React, { useState } from "react"
import "./index.scss"

const ButtonRow = props => {
  // const [show, setShow] = useState({})

  //   const toggleShow = e => {
  //     e.preventDefault()
  //     //setShow(show => !show)
  //   }

  return (
    <div className="main__container">
      <li>
        <div>
          <button>Working Region</button>
          <form>
            <ul>
              <li>
                <input
                  type="checkbox"
                  value={["workingRegion", "Africa"]}
                  id="Africa"
                  onChange={props.changed}
                />
                <label htmlFor="Africa" id="Africa">
                  Africa
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["workingRegion", "Asia"]}
                  id="Asia"
                  onChange={props.changed}
                />
                <label htmlFor="Asia" id="Asia">
                  Asia
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["workingRegion", "Europe"]}
                  id="Europe"
                  onChange={props.changed}
                />
                <label htmlFor="Europe" id="Europe">
                  Europe
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["workingRegion", "Middle East"]}
                  id="Middle East"
                  onChange={props.changed}
                />
                <label htmlFor="Middle East" id="Middle East">
                  Middle East
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["workingRegion", "Global"]}
                  id="Global"
                  onChange={props.changed}
                />
                <label htmlFor="Global" id="Global">
                  Global
                </label>
              </li>
            </ul>
            <button onClick={props.buttonClick}>Find</button>
          </form>
        </div>
      </li>
      <li>
        <div>
          <button>Themes</button>
          <form>
            <ul>
              <li>
                <input
                  type="checkbox"
                  value={["themes", "Private sector and investment"]}
                  id="Private sector and investment"
                  onChange={props.changed}
                />
                <label
                  htmlFor="Private sector and investment"
                  id="Private sector and investment"
                >
                  Private sector and investment
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["themes", "Disaster risk reduction"]}
                  id="Disaster risk reduction"
                  onChange={props.changed}
                />
                <label
                  htmlFor="Disaster risk reduction"
                  id="Disaster risk reduction"
                >
                  Disaster risk reduction
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["themes", "Innovation and scaling"]}
                  id="Innovation and scaling"
                  onChange={props.changed}
                />
                <label
                  htmlFor="Innovation and scaling"
                  id="Innovation and scaling"
                >
                  Innovation and scaling
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["themes", "Food and water security"]}
                  id="Food and water security"
                  onChange={props.changed}
                />
                <label
                  htmlFor="Food and water security"
                  id="Food and water security"
                >
                  Food and water security
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["themes", "Information and technology"]}
                  id="Information and technology"
                  onChange={props.changed}
                />
                <label
                  htmlFor="Information and technology"
                  id="Information and technology"
                >
                  Information and technology
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["themes", "finance and markets"]}
                  id="finance and markets"
                  onChange={props.changed}
                />
                <label htmlFor="finance and markets" id="finance and markets">
                  finance and markets
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["themes", "capacity building"]}
                  id="capacity building"
                  onChange={props.changed}
                />
                <label htmlFor="capacity building" id="capacity building">
                  capacity building
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["themes", "poverty alleviation"]}
                  id="poverty alleviation"
                  onChange={props.changed}
                />
                <label htmlFor="poverty alleviation" id="poverty alleviation">
                  poverty alleviation
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["themes", "Climate change adaptation"]}
                  id="Climate change adaptation"
                  onChange={props.changed}
                />
                <label
                  htmlFor="Climate change adaptation"
                  id="Climate change adaptation"
                >
                  Climate change adaptation
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["themes", "knowledge and learning"]}
                  id="knowledge and learning"
                  onChange={props.changed}
                />
                <label
                  htmlFor="knowledge and learning"
                  id="knowledge and learning"
                >
                  knowledge and learning
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["themes", "Research and science"]}
                  id="Research and science"
                  onChange={props.changed}
                />
                <label htmlFor="Research and science" id="Research and science">
                  Research and science
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["themes", "crosscutting"]}
                  id="crosscutting"
                  onChange={props.changed}
                />
                <label htmlFor="crosscutting" id="crosscutting">
                  crosscutting
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["themes", "livelihoods"]}
                  id="livelihoods"
                  onChange={props.changed}
                />
                <label htmlFor="livelihoods" id="livelihoods">
                  livelihoods
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["themes", "Empowering marginalized groups"]}
                  id="Empowering marginalized groups"
                  onChange={props.changed}
                />
                <label
                  htmlFor="Empowering marginalized groups"
                  id="Empowering marginalized groups"
                >
                  Empowering marginalized groups
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["themes", "gender"]}
                  id="gender"
                  onChange={props.changed}
                />
                <label htmlFor="gender" id="gender">
                  gender
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["themes", "peace and conflict "]}
                  id="peace and conflict"
                  onChange={props.changed}
                />
                <label htmlFor="peace and conflict" id="peace and conflict">
                  peace and conflict
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["themes", "climate change adapatation"]}
                  id="climate change adapatation"
                  onChange={props.changed}
                />
                <label
                  htmlFor="climate change adapatation"
                  id="climate change adapatation"
                >
                  climate change adapatation
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["themes", "infrastructure"]}
                  id="infrastructure"
                  onChange={props.changed}
                />
                <label htmlFor="infrastructure" id="infrastructure">
                  infrastructure
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["themes", "nature based solutions"]}
                  id="nature based solutions"
                  onChange={props.changed}
                />
                <label
                  htmlFor="nature based solutions"
                  id="nature based solutions"
                >
                  nature based solutions
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["themes", "ocean"]}
                  id="ocean"
                  onChange={props.changed}
                />
                <label htmlFor="ocean" id="ocean">
                  ocean
                </label>
              </li>
            </ul>
            <button onClick={props.buttonClick}>Find</button>
          </form>
        </div>
      </li>
      <li>
        <div>
          <button>Headquarters</button>
          <form>
            <ul>
              <li>
                <input
                  type="checkbox"
                  value={["hq", "Switzerland"]}
                  id="Switzerland"
                  onChange={props.changed}
                />
                <label htmlFor="Switzerland" id="Switzerland">
                  Switzerland
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["hq", "Kenya"]}
                  id="Kenya"
                  onChange={props.changed}
                />
                <label htmlFor="Kenya" id="Kenya">
                  Kenya
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["hq", "United Kingdom"]}
                  id="United Kingdom"
                  onChange={props.changed}
                />
                <label htmlFor="United Kingdom" id="United Kingdom">
                  United Kingdom
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["hq", "United States of America"]}
                  id="United States of America"
                  onChange={props.changed}
                />
                <label
                  htmlFor="United States of America"
                  id="United States of America"
                >
                  United States of America
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["hq", "Democratic Reupublic of Congo"]}
                  id="Democratic Reupublic of Congo"
                  onChange={props.changed}
                />
                <label
                  htmlFor="Democratic Reupublic of Congo"
                  id="Democratic Reupublic of Congo"
                >
                  Democratic Reupublic of Congo
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["hq", "South Africa"]}
                  id="South Africa"
                  onChange={props.changed}
                />
                <label htmlFor="South Africa" id="South Africa">
                  South Africa
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["hq", "Burkinafaso"]}
                  id="Burkinafaso"
                  onChange={props.changed}
                />
                <label htmlFor="Burkinafaso" id="Burkinafaso">
                  Burkinafaso
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["hq", "Bangladesh"]}
                  id="Bangladesh"
                  onChange={props.changed}
                />
                <label htmlFor="Bangladesh" id="Bangladesh">
                  Bangladesh
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["hq", "Global"]}
                  id="Global"
                  onChange={props.changed}
                />
                <label htmlFor="Global" id="Global">
                  Global
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["hq", "Canada"]}
                  id="Canada"
                  onChange={props.changed}
                />
                <label htmlFor="Canada" id="Canada">
                  Canada
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["hq", "Djibouti"]}
                  id="Djibouti"
                  onChange={props.changed}
                />
                <label htmlFor="Djibouti" id="Djibouti">
                  Djibouti
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["hq", "India"]}
                  id="India"
                  onChange={props.changed}
                />
                <label htmlFor="India" id="India">
                  India
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["hq", "Ethiopia"]}
                  id="Ethiopia"
                  onChange={props.changed}
                />
                <label htmlFor="Ethiopia" id="Ethiopia">
                  Ethiopia
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["hq", "Netherlands"]}
                  id="Netherlands"
                  onChange={props.changed}
                />
                <label htmlFor="Netherlands" id="Netherlands">
                  Netherlands
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["hq", "Germany"]}
                  id="Germany"
                  onChange={props.changed}
                />
                <label htmlFor="Germany" id="Germany">
                  Germany
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["hq", "Bangkok"]}
                  id="Bangkok"
                  onChange={props.changed}
                />
                <label htmlFor="Bangkok" id="Bangkok">
                  Bangkok
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["hq", "Indonesia"]}
                  id="Indonesia"
                  onChange={props.changed}
                />
                <label htmlFor="Indonesia" id="Indonesia">
                  Indonesia
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["hq", "Sweden"]}
                  id="Sweden"
                  onChange={props.changed}
                />
                <label htmlFor="Sweden" id="Sweden">
                  Sweden
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["hq", "Online Platform"]}
                  id="Online Platform"
                  onChange={props.changed}
                />
                <label htmlFor="Online Platform" id="Online Platform">
                  Online Platform
                </label>
              </li>
            </ul>
            <button onClick={props.buttonClick}>Find</button>
          </form>
        </div>
      </li>
      <li>
        <div>
          <button>Organization Type</button>
          <form>
            <ul>
              <li>
                <input
                  type="checkbox"
                  value={["type", "Private Sector"]}
                  id="Private Sector"
                  onChange={props.changed}
                />
                <label htmlFor="Private Sector" id="Private Sector">
                  Private Sector
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["type", "Knowledge & Think Tank"]}
                  id="Knowledge & Think Tank"
                  onChange={props.changed}
                />
                <label
                  htmlFor="Knowledge & Think Tank"
                  id="Knowledge & Think Tank"
                >
                  Knowledge & Think Tank
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["type", "Int NGO"]}
                  id="Int NGO"
                  onChange={props.changed}
                />
                <label htmlFor="Int NGO" id="Int NGO">
                  Int NGO
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["type", "Grantee"]}
                  id="Grantee"
                  onChange={props.changed}
                />
                <label htmlFor="Grantee" id="Grantee">
                  Grantee
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["type", "Regional Agencies"]}
                  id="Regional Agencies"
                  onChange={props.changed}
                />
                <label htmlFor="Regional Agencies" id="Regional Agencies">
                  Regional Agencies
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["type", "Bilateral Agency"]}
                  id="Bilateral Agency"
                  onChange={props.changed}
                />
                <label htmlFor="Bilateral Agency" id="Bilateral Agency">
                  Bilateral Agency
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["type", "Regional NGO"]}
                  id="Regional NGO"
                  onChange={props.changed}
                />
                <label htmlFor="Regional NGO" id="Regional NGO">
                  Regional NGO
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["type", "Multilateral Agency"]}
                  id="Multilateral Agency"
                  onChange={props.changed}
                />
                <label htmlFor="Multilateral Agency" id="Multilateral Agency">
                  Multilateral Agency
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["type", "Alliance"]}
                  id="Alliance"
                  onChange={props.changed}
                />
                <label htmlFor="Alliance" id="Alliance">
                  Alliance
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["type", "Local NGO"]}
                  id="Local NGO"
                  onChange={props.changed}
                />
                <label htmlFor="Local NGO" id="Local NGO">
                  Local NGO
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={["type", "UN Agency"]}
                  id="UN Agency"
                  onChange={props.changed}
                />
                <label htmlFor="UN Agency" id="UN Agency">
                  UN Agency
                </label>
              </li>
            </ul>
            <button onClick={props.buttonClick}>Find</button>
          </form>
        </div>
      </li>
    </div>
  )
}

export default ButtonRow
