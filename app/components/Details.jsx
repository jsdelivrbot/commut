var React = require('react');
var Form = require('Form');
var Results = require('Results');
var Nav = require('Nav');
var Help = require('Help');

//Where the hero image goes
var Details = React.createClass({
  render: function () {
    return (
      <div>
        <h3>Details: Soon to come</h3>
        //DOES NOT WORK YET
        // <h2>Your details:</h2>
        // <h3>{this.state.startingAddress}</h3>
        // <h3>{this.state.departureAirport}</h3>
        // <h3>{this.state.flightNumber}</h3>
      </div>
    );
  }
});

module.exports = Details;
