import React, { Component } from 'react';

var CommutResults = ({duration, normalizedScore, apiVar3, departureTime, departureGateDelayMinutes, departureRunwayDelayMinutes, arrivalGateDelayMinutes, arrivalRunwayDelayMinutes, departureTerminal, departureGate, arrivalTerminal, arrivalGate, baggage, precheck, WaitTime, LastUpdated}) => {
  return (
    <div>
      <h5 className="page-title">Your results:</h5>
      <div className="details">Travel time: </div>
      <h6>{duration}</h6>
      <h6 className="details">Departure Info: </h6>
      <div>Departure Time: {departureTime}</div>
      <div>Departure Terminal: {departureTerminal}</div>
      <div>Departure Gate: {departureGate}</div>
      <div>Arrival Terminal: {arrivalTerminal}</div>
      <div>Arrival Gate: {arrivalGate}</div>
      <div>Baggage: {baggage}</div>
      <div className="details">Total Delay time: </div>
      <div>{departureGateDelayMinutes} minutes</div>
      <div className="details">TSA PreCheck: </div>
      <div>{precheck}</div>
    </div>
  )
};


export default CommutResults;
