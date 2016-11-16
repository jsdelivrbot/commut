import React, { Component } from 'react';

var CommutForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var updates = {};

    var startingAddress = this.refs.startingAddress.value;
    var departureAirport = this.refs.departureAirport.value;
    var carrierCode = this.refs.carrierCode.value;
    var flightNumber = this.refs.flightNumber.value;

    if (startingAddress.length > 0 && departureAirport.length > 0 && flightNumber.length > 0 && carrierCode.length > 0) {
      this.refs.startingAddress.value = '';
      this.refs.departureAirport.value = '';
      this.refs.carrierCode.value = '';
      this.refs.flightNumber.value = '';
      this.props.onSearch(startingAddress, departureAirport, carrierCode, flightNumber);
      updates.startingAddress = startingAddress;
      updates.departureAirport = departureAirport;
      updates.carrierCode = carrierCode;
      updates.flightNumber = flightNumber;
    }

    this.props.onNewData(updates);

  },
  render: function () {
    return (
      <div>
        <h4 className="page-title">Calculate your commüt</h4>
        <form onSubmit={this.onFormSubmit}>

          <div>
            <input type="text" ref="startingAddress" placeholder="Starting Address"/>
          </div>
          <div>
            <input type="text" ref="departureAirport" placeholder="Departure Airport"/>
          </div>
          <div>
            <input type="text" ref="carrierCode" placeholder="Carrier Code"/>
          </div>
          <div>
            <input type="text" ref="flightNumber" placeholder="Flight Number"/>
          </div>

          <button className="button small">Submit</button>
        </form>
      </div>
    );
  }
});

module.exports = CommutForm;
