import React, { Component } from 'react';

var WeatherMessage = ({temp, startingAddress}) => {
  return (
    <div>
      <div>
        <h6 className="details">Current temperature (&deg;F): </h6>
        <h6>{temp}</h6>
      </div>
    </div>
  )
};

module.exports = WeatherMessage;
