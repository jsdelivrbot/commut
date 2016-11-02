var React = require('react');

var CommutMessage = React.createClass({
  render: function () {
    var {startingAddress, departureAirport, flightNumber} = this.props;

    return (
      <div>
        <h5 className="page-title">Your details:</h5>
        <h6>Start: {startingAddress}</h6>
        <h6>Departing from: {departureAirport}</h6>
        <h6>Flight Number: {flightNumber}</h6>
      </div>
    )
  }
});

module.exports = CommutMessage;
