import React from "react"
import "./index.scss"

const Form = () => {
  return (
    <div className="formcontainer">
      <form>
        <label>
          Organisation Name:
          <input type="text" name="name" />
        </label>
        <label>
          Area of Work:
          <select id="area" name="area">
            <option value="Area"></option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Africa">Africa</option>
            <option value="SouthAmerica">SouthAmerica</option>
            <option value="NorthAmerica">NorthAmerica</option>
            <option value="Australia">Australia</option>
          </select>
        </label>
        <label>
          Working Region:
          <select id="area" name="area">
            <option value="Area"></option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Africa">Africa</option>
            <option value="SouthAmerica">SouthAmerica</option>
            <option value="NorthAmerica">NorthAmerica</option>
            <option value="Australia">Australia</option>
          </select>
        </label>
        <label>
          Why Would You Like to Join GRP?
          <input type="text" name="interest" id="interestbox" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Form
