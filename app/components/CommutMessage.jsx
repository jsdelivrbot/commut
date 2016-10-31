var React = require('react');

var CommutMessage = React.createClass({
  render: function () {
    var {startingAddress, departureAirport, flightNumber} = this.props;

    return (
      <div>
        <h2>Your details:</h2>
        <h3>Start: {startingAddress}</h3>
        <h3>Departing from: {departureAirport}</h3>
        <h3>Flight Number: {flightNumber}</h3>
      </div>
    )
  }
});

module.exports = CommutMessage;
