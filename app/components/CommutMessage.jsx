var React = require('react');

var CommutMessage = React.createClass({
  render: function () {
    var {startingAddress, departureAirport, flightNumber} = this.props;

    return (
      <div>
        <h5 className="page-title">Your details:</h5>
        <h6 className="details">Start: </h6>
        <h6>{startingAddress}</h6>
        <h6 className="details">Departing from:</h6>
        <h6>{departureAirport}</h6>
        <h6 className="details">Flight Number:</h6>
        <h6>{flightNumber}</h6>
      </div>
    )
  }
});

module.exports = CommutMessage;
