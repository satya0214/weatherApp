import search from "../assets/search.png";
import location from "../assets/location.png";
import LocationData from "./../constants/LocationData";
import React, { useState } from "react";

function Header(props) {
  const [isDropDownRequired, setIsDropDownRequired] = useState(false);
  const [select, setSelect] = useState(LocationData[0].Name);
//   props.onLocationSelection(LocationData[0])
  const handleChange = () => {
    setIsDropDownRequired((prev) => !prev);
  };
  const onInputChange = (e) => {
    setSelect(e.target.value);
  };
  const handleSelection = (data) => {
    // console.log('data',data)
    setSelect(LocationData[data].Name);
    props.onLocationSelection(LocationData[data])
  };
  return (
    <header>
      <div className="row navbar">
        {/* <button className="buttonLocation">
        <img className="buttonIcon" src={location}/>
        <p className="location">Current Location</p>
       </button> */}
        <label>
          <div className="searchDiv">
            <img className="searchIcon" src={search} />
            <input
              type="text"
              placeholder="Search for your Preffered city...."
              value={select}
              onChange={onInputChange}
              name="Search"
              className="inputText"
              onClick={handleChange}
            />
            {isDropDownRequired && (
              <div className="dropdown">
                {LocationData.map((element, i) => {
                  return <span key={i} onClick={(element) => handleSelection(i)}>{element.Name}</span>; 
                })}
              </div>
            )}
          </div>
        </label>
        <button className="buttonLocation">
          <img className="buttonIcon" src={location} />
          <p className="location">{select}</p>
        </button>
      </div>
    </header>
  );
}

export default Header;
