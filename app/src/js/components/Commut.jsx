import React, { Component } from 'react';
import CommutForm from 'CommutForm'
import CommutMessage from 'CommutMessage'
import CommutResults from 'CommutResults'
import WeatherMessage from 'WeatherMessage'
import openWeatherMap from 'openWeatherMap'
import tsa_precheck from 'tsa_precheck'
import tsa_wait_time from 'tsa_wait_time'
import TsaWaitTimeMessage from 'TsaWaitTimeMessage'
import TsaPrecheckMessage from 'TsaPrecheckMessage'
import googleMaps from 'googleMaps'
import flightStats from 'flightStats'

var Commut = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,
      startingAddress: '123 Main St',
      departureAirport: 'PDX',
      flightNumber: 'US123',
      duration: "34 minutes",
      normalizedScore: "TBD",
      apiVar3: 44,
      precheck: "TBD",
      WaitTime: 10,
      temp: 53
    }
  },
  handleNewData: function (updates) {
    this.setState(updates);
  },
  handleSearch: function (startingAddress, departureAirport) {
    //We're setting that to this because the "this" binding get's lost when we set setState below. Setting that to this, fixes that temporarily
    var that = this;

    openWeatherMap.getTemp(startingAddress).then(function (temp) {
      that.setState({
        startingAddress: startingAddress,
        temp: temp
      });
    }, function (errorMessage) {
        alert(errorMessage);
    });

    googleMaps.getGmap(startingAddress, departureAirport).then(function (duration) {
      that.setState({
        startingAddress: startingAddress,
        departureAirport: departureAirport,
        duration: duration
      });
    }, function (errorMessage) {
        alert(errorMessage);
    });

    tsa_precheck.getPrecheck(departureAirport).then(function (precheck) {
      that.setState({
        departureAirport: departureAirport,
        precheck: precheck
      });
    }, function (errorMessage) {
        alert(errorMessage);
    });

    tsa_wait_time.getWaitTime(departureAirport).then(function (WaitTime) {
      that.setState({
        departureAirport: departureAirport,
        WaitTime: WaitTime
      });
    }, function (errorMessage) {
        alert(errorMessage);
    });

    flightStats.getDelay(departureAirport).then(function (normalizedScore) {
      that.setState({
        departureAirport: departureAirport,
        normalizedScore: normalizedScore
      });
    }, function (errorMessage) {
        alert(errorMessage);
    });
  },

  render: function () {
    var {startingAddress, departureAirport, flightNumber} = this.state;

    var {duration, normalizedScore, apiVar3} = this.state;

    var {temp, startingAddress, precheck, WaitTime} = this.state;

    return (
      <div className="row">
        <div className="small-12 large-expand columns">
          <div className="large-4 columns">
            <CommutForm onNewData={this.handleNewData} onSearch={this.handleSearch}/>
          </div>
          <div>
            <div className="large-4 columns">
              <CommutMessage startingAddress={startingAddress} departureAirport={departureAirport} flightNumber={flightNumber}/>
              <WeatherMessage temp={temp} startingAddress={startingAddress}/>
            </div>
            <div className="large-4 columns">
              <CommutResults duration={duration} normalizedScore={normalizedScore} apiVar3={apiVar3} precheck={precheck} WaitTime={WaitTime}/>
              <TsaPrecheckMessage/>
              <TsaWaitTimeMessage/>

            </div>
          </div>
        </div>

      </div>
    )
  }
});

export default Commut;
