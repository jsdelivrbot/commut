var React = require('react');
var CommutForm = require('CommutForm');
var CommutMessage = require('CommutMessage');

var Commut = React.createClass({
  getInitialState: function () {
    return {
      startingAddress: '123 Main St',
      departureAirport: 'PDX',
      flightNumber: 'UA123'
    }
  },
  handleSearch: function (startingAddress) {
    this.setState({
      startingAddress: startingAddress,
      departureAirport: departureAirport,
      flightNumber: flightNumber
    });
  },
  render: function () {
    var {startingAddress, departureAirport, flightNumber} = this.state;

    return (
      <div>
        <h3>Commut Component</h3>
        <CommutForm onSearch={this.handleSearch}/>
        <CommutMessage startingAddress={startingAddress} departureAirport={departureAirport} flightNumber={flightNumber}/>
      </div>
    );
  }
});

module.exports = Commut;
