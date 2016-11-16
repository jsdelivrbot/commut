import React, { Component } from 'react';

var CommutResults = ({duration, normalizedScore, apiVar3, departureTime, departureGateDelayMinutes, departureRunwayDelayMinutes, arrivalGateDelayMinutes, arrivalRunwayDelayMinutes, precheck, WaitTime, LastUpdated}) => {
  return (
    <div>
      <h5 className="page-title">Your results:</h5>
      <h6 className="details">Travel time: </h6>
      <h6>{duration}</h6>
      <h6 className="details">Departure time: </h6>
      <h6>{departureTime}</h6>
      <h6 className="details">Delay time: </h6>
      <h6>Departure Gate Delay Minutes: {departureGateDelayMinutes}</h6>
      <h6>Departure Runway Delay Minutes: {departureRunwayDelayMinutes}</h6>
      <h6>Arrival Gate Delay Minutes: {arrivalGateDelayMinutes}</h6>
      <h6>Arrival Runway Delay Minutes: {arrivalRunwayDelayMinutes}</h6>
      <h6 className="details">Total commute time: </h6>
      <h6>{duration} + X</h6>
      <h6 className="details">TSA PreCheck: </h6>
      <h6>{precheck}</h6>
      <h6 className="details">TSA Wait Time: </h6>
      <h6>{WaitTime}</h6>
      <h8>Last updated: {LastUpdated}</h8>
    </div>
  )
};


export default CommutResults;
