import React, { Component } from 'react';
import CommutForm from 'CommutForm'
import CommutMessage from 'CommutMessage'
import CommutResults from 'CommutResults'
import WeatherMessage from 'WeatherMessage'
import openWeatherMap from 'openWeatherMap'
import tsa_precheck from 'tsa_precheck'
import tsa_wait_time from 'tsa_wait_time'
import googleMaps from 'googleMaps'

////FlightStats Delays
import flightStats_departureTime from 'flightStats_departureTime';
import flightStats_departureGateDelayMinutes from 'flightStats_departureGateDelayMinutes';
import flightStats_departureRunwayDelayMinutes from 'flightStats_departureRunwayDelayMinutes';
import flightStats_arrivalGateDelayMinutes from 'flightStats_arrivalGateDelayMinutes';
import flightStats_arrivalRunwayDelayMinutes from 'flightStats_arrivalRunwayDelayMinutes';

////FlightStats Terminals and Gates
import flightStats_gateDepartureTerminal from 'flightStats_gateDepartureTerminal';
import flightStats_gateDepartureGate from 'flightStats_gateDepartureGate';
import flightStats_gateArrivalTerminal from 'flightStats_gateArrivalTerminal';
import flightStats_gateArrivalGate from 'flightStats_gateArrivalGate';
import flightStats_gateBaggage from 'flightStats_gateBaggage';

var Commut = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,
      startingAddress: '1425 NE 7th Ave., Portland, OR',
      departureAirport: 'PDX',
      carrierCode: 'AA',
      flightNumber: '100',
      duration: "-",
      departureGateDelayMinutes: "0",
      departureRunwayDelayMinutes: " ",
      arrivalGateDelayMinutes: " ",
      arrivalRunwayDelayMinutes: " ",
      departureTime: "-",
      departureTerminal: "-",
      departureGate: "-",
      arrivalGate: "-",
      baggage: "-",
      apiVar3: 44,
      precheck: "-",
      WaitTime: 10,
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

    flightStats_departureGateDelayMinutes.getDepartureGateDelayMinutes(carrierCode, flightNumber).then(function (departureGateDelayMinutes) {
      that.setState({
        carrierCode: carrierCode,
        flightNumber: flightNumber,
        departureGateDelayMinutes: departureGateDelayMinutes
      });
    }, function (errorMessage) {
        alert(errorMessage);
    });

    flightStats_departureRunwayDelayMinutes.getDepartureRunwayDelayMinutes(carrierCode, flightNumber).then(function (departureRunwayDelayMinutes) {
      that.setState({
        carrierCode: carrierCode,
        flightNumber: flightNumber,
        departureRunwayDelayMinutes: departureRunwayDelayMinutes
      });
    }, function (errorMessage) {
        alert(errorMessage);
    });

    flightStats_arrivalGateDelayMinutes.getArrivalGateDelayMinutes(carrierCode, flightNumber).then(function (arrivalGateDelayMinutes) {
      that.setState({
        carrierCode: carrierCode,
        flightNumber: flightNumber,
        arrivalGateDelayMinutes: arrivalGateDelayMinutes
      });
    }, function (errorMessage) {
        alert(errorMessage);
    });

    flightStats_arrivalRunwayDelayMinutes.getArrivalRunwayDelayMinutes(carrierCode, flightNumber).then(function (arrivalRunwayDelayMinutes) {
      that.setState({
        carrierCode: carrierCode,
        flightNumber: flightNumber,
        arrivalRunwayDelayMinutes: arrivalRunwayDelayMinutes
      });
    }, function (errorMessage) {
        alert(errorMessage);
    });

    flightStats_gateDepartureTerminal.getGetDepartureTerminal(carrierCode, flightNumber).then(function (departureTerminal) {
      that.setState({
        carrierCode: carrierCode,
        flightNumber: flightNumber,
        departureTerminal: departureTerminal
      });
    }, function (errorMessage) {
        alert(errorMessage);
    });

    flightStats_gateDepartureGate.getGetDepartureGate(carrierCode, flightNumber).then(function (departureGate) {
      that.setState({
        carrierCode: carrierCode,
        flightNumber: flightNumber,
        departureGate: departureGate
      });
    }, function (errorMessage) {
        alert(errorMessage);
    });

    flightStats_gateArrivalTerminal.getGetArrivalTerminal(carrierCode, flightNumber).then(function (arrivalTerminal) {
      that.setState({
        carrierCode: carrierCode,
        flightNumber: flightNumber,
        arrivalTerminal: arrivalTerminal
      });
    }, function (errorMessage) {
        alert(errorMessage);
    });

    flightStats_gateArrivalGate.getGetArrivalGate(carrierCode, flightNumber).then(function (arrivalGate) {
      that.setState({
        carrierCode: carrierCode,
        flightNumber: flightNumber,
        arrivalGate: arrivalGate
      });
    }, function (errorMessage) {
        alert(errorMessage);
    });

    flightStats_gateBaggage.getGetBaggage(carrierCode, flightNumber).then(function (baggage) {
      that.setState({
        carrierCode: carrierCode,
        flightNumber: flightNumber,
        baggage: baggage
      });
    }, function (errorMessage) {
        alert(errorMessage);
    });
  },

  render: function () {
    var {startingAddress, departureAirport, carrierCode, departureTime, departureGateDelayMinutes, departureRunwayDelayMinutes, arrivalGateDelayMinutes, arrivalRunwayDelayMinutes, flightNumber, departureTerminal, departureGate, arrivalTerminal, arrivalGate, baggage, duration, normalizedScore, apiVar3, temp, precheck, WaitTime, LastUpdated} = this.state;

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
              <CommutResults duration={duration} normalizedScore={normalizedScore} apiVar3={apiVar3} precheck={precheck} WaitTime={WaitTime} departureTime={departureTime} departureGateDelayMinutes={departureGateDelayMinutes} departureRunwayDelayMinutes={departureRunwayDelayMinutes} arrivalGateDelayMinutes={arrivalGateDelayMinutes} arrivalRunwayDelayMinutes={arrivalRunwayDelayMinutes} departureTerminal={departureTerminal} departureGate={departureGate} arrivalTerminal={arrivalTerminal} arrivalGate={arrivalGate} baggage={baggage} LastUpdated={LastUpdated}/>
            </div>
          </div>
        </div>

      </div>
    )
  }
});

export default Commut;
