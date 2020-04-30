import React from "react"

const Form = () => {
  return (
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
        <input type="text" name="interest" />
      </label>
      <input type="submit" value="submit" />
    </form>
  )
}

export default Form
