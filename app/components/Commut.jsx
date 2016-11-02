var React = require('react');
var CommutForm = require('CommutForm');
var CommutMessage = require('CommutMessage');
var CommutResults = require('CommutResults');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
// var TSA = require('TSA');

var Commut = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,
      startingAddress: '123 Main St',
      departureAirport: 'PDX',
      flightNumber: 'US123',
      apiVar1: "Foo",
      apiVar2: "Bar",
      apiVar3: "Baz",
      temp: 88
    }
  },
  handleNewData: function (updates) {
    this.setState(updates);
  },
  handleSearch: function (startingAddress) {
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
  },

  render: function () {
    var {startingAddress, departureAirport, flightNumber} = this.state;

    var {apiVar1, apiVar2, apiVar3} = this.state;

    var {temp, startingAddress} = this.state;

    return (
      <div className="row">
        <div className="small-12 large-expand columns">
          <div className="large-4 columns">
            <CommutForm onNewData={this.handleNewData} onSearch={this.handleSearch}/>
          </div>
          <div>
            <div className="large-4 columns">
              <CommutMessage startingAddress={startingAddress} departureAirport={departureAirport} flightNumber={flightNumber}/>
            </div>
            <div className="large-4 columns">
              <CommutResults apiVar1={apiVar1} apiVar2={apiVar2} apiVar3={apiVar3}/>
            </div>
            <div>
              <WeatherMessage temp={temp} startingAddress={startingAddress}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Commut;
