import React, { Component } from 'react';
import CommutForm from 'CommutForm'
import CommutMessage from 'CommutMessage'
import CommutResults from 'CommutResults'
import WeatherMessage from 'WeatherMessage'
import openWeatherMap from 'openWeatherMap'
import tsa_precheck from 'tsa_precheck'
import tsa_wait_time from 'tsa_wait_time'
import googleMaps from 'googleMaps'
// import flightStats from 'flightStats'
import flightStats_departureTime from 'flightStats_departureTime'
import flightStats_delayTime from 'flightStats_delayTime';


var Commut = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,
      startingAddress: '1425 NE 7th Ave., Portland, OR',
      departureAirport: 'PDX',
      carrierCode: 'AA',
      flightNumber: '100',
      duration: 15,
      departureGateDelayMinutes: " ",
      normalizedScore: "TBD",
      apiVar3: 44,
      precheck: " ",
      WaitTime: "Approximately: 10 minutes",
      LastUpdated: "11/12/2016 8:51:27 AM",
      temp: 53
    }
  },
  handleNewData: function (updates) {
    this.setState(updates);
  },
  handleSearch: function (startingAddress, departureAirport, carrierCode, flightNumber) {
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

    flightStats_departureTime.getDepartureTime(carrierCode, flightNumber).then(function (departureTime) {
      that.setState({
        carrierCode: carrierCode,
        flightNumber: flightNumber,
        departureTime: departureTime
      });
    }, function (errorMessage) {
        alert(errorMessage);
    });

    flightStats_delayTime.getDelayTime(carrierCode, flightNumber).then(function (departureGateDelayMinutes) {
      that.setState({
        carrierCode: carrierCode,
        flightNumber: flightNumber,
        departureGateDelayMinutes: departureGateDelayMinutes
      });
    }, function (errorMessage) {
        alert(errorMessage);
    });
  },

  // tsa_wait_time.getWaitTime(departureAirport).then(function (WaitTime) {
  //   that.setState({
  //     departureAirport: departureAirport,
  //     WaitTime: WaitTime
  //   });
  // }, function (errorMessage) {
  //     alert(errorMessage);
  // });

  // flightStats.getDelay(departureAirport).then(function (normalizedScore) {
  //   that.setState({
  //     departureAirport: departureAirport,
  //     normalizedScore: normalizedScore
  //   });
  // }, function (errorMessage) {
  //     alert(errorMessage);
  // });

  render: function () {
    var {startingAddress, departureAirport, carrierCode, departureTime, departureGateDelayMinutes, flightNumber, departureTerminal, duration, normalizedScore, apiVar3, temp, precheck, WaitTime, LastUpdated} = this.state;


    return (
      <div className="row">
        <div className="small-12 large-expand columns">
          <div className="large-4 columns">
            <CommutForm onNewData={this.handleNewData} onSearch={this.handleSearch}/>
          </div>
          <div>
            <div className="large-4 columns">
              <CommutMessage startingAddress={startingAddress} departureAirport={departureAirport} carrierCode={carrierCode} flightNumber={flightNumber}/>
              <WeatherMessage temp={temp} startingAddress={startingAddress}/>
            </div>
            <div className="large-4 columns">
              <CommutResults duration={duration} normalizedScore={normalizedScore} apiVar3={apiVar3} precheck={precheck} WaitTime={WaitTime} departureTime={departureTime} departureGateDelayMinutes={departureGateDelayMinutes} LastUpdated={LastUpdated}/>
            </div>
          </div>
        </div>

      </div>
    )
  }
});

export default Commut;
