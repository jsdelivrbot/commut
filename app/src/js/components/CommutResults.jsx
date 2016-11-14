import React, { Component } from 'react';

var CommutResults = ({duration, normalizedScore, apiVar3, apiVar4}) => {
  return (
    <div>
      <h5 className="page-title">Your results:</h5>
      <h6 className="details">Travel time: </h6>
      <h6>{duration}</h6>
      <h6 className="details">Delay time: </h6>
      <h6>{normalizedScore}</h6>
      <h6 className="details">Total commute time: </h6>
      <h6>{apiVar3}</h6>
      <h6 className="details">TSA PreCheck: </h6>
      <h6>Yes or No</h6>
      <h6 className="details">TSA Wait Time: </h6>
      <h6>TBD</h6>
    </div>
  )
};


export default CommutResults;
