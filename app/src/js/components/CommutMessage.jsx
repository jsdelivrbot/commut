import React, { Component } from 'react';

var CommutMessage = ({startingAddress, departureAirport, carrierCode, flightNumber}) => {
  return (
    <div>
      <h5 className="page-title">Your details:</h5>
      <h6 className="details">Start: </h6>
      <h6>{startingAddress}</h6>
      <h6 className="details">Departing from:</h6>
      <h6>{departureAirport}</h6>
      <h6 className="details">Carrier Code:</h6>
      <h6>{carrierCode}</h6>
      <h6 className="details">Flight Number:</h6>
      <h6>{flightNumber}</h6>
    </div>
  )
};


module.exports = CommutMessage;
