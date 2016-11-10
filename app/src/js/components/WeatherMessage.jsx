import React from 'react'

var WeatherMessage = ({temp, startingAddress}) => {
  return (
    <div>
      <div>
        <h6 className="details">Current temperature: </h6>
        <h6>{temp}&deg;F</h6>
      </div>
    </div>
  )
};

module.exports = WeatherMessage;
