import React, { Component } from 'react';

var CommutResults = ({duration, normalizedScore, apiVar3, precheck, WaitTime}) => {
  return (
    <div>
      <h5 className="page-title">Your results:</h5>
      <h6 className="details">Travel time: </h6>
      <h6>{duration}</h6>
      <h6 className="details">Delay time: </h6>
      <h6>{normalizedScore}</h6>
      <h6 className="details">Total commute time: </h6>
      <h6>({apiVar3} + {duration})</h6>
      <h6 className="details">TSA PreCheck: </h6>
      <h6>{precheck}</h6>
      <h6 className="details">TSA Wait Time: </h6>
      <h6>{WaitTime}</h6>
    </div>
  )
};


export default CommutResults;
