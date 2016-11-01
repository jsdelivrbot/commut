var React = require('react');
var CommutForm = require('CommutForm');
var CommutMessage = require('CommutMessage');
var CommutResults = require('CommutResults');
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
    }
  },
  handleNewData: function (updates) {
      this.setState(updates);
    },

  render: function () {
    var {startingAddress, departureAirport, flightNumber} = this.state;

    var {apiVar1, apiVar2, apiVar3} = this.state;

    return (
      <div>
        <h3>Commut Component</h3>
        <CommutForm onNewData={this.handleNewData}/>
        <CommutMessage startingAddress={startingAddress} departureAirport={departureAirport} flightNumber={flightNumber}/>
        <CommutResults apiVar1={apiVar1} apiVar2={apiVar2} apiVar3={apiVar3}/>
      </div>
    )
  }
});

module.exports = Commut;
