var React = require('react');
var CommutForm = require('CommutForm');
var CommutMessage = require('CommutMessage');
var CommutResults = require('CommutResults');
// var TSA = require('TSA');

var Commut = React.createClass({
  getInitialState: function () {
    return {
      startingAddress: this.props.startingAddress,
      departureAirport: this.props.departureAirport,
      flightNumber: this.props.flightNumber
    }
  },
  handleNewData: function (updates) {
      this.setState(updates);
    },

  render: function () {
    var {startingAddress, departureAirport, flightNumber} = this.state;

    return (
      <div>
        <h3>Commut Component</h3>
        <CommutForm onNewData={this.handleNewData}/>
        <CommutMessage startingAddress={startingAddress} departureAirport={departureAirport} flightNumber={flightNumber}/>
        <CommutResults/>
      </div>
    )
  }
});

module.exports = Commut;
