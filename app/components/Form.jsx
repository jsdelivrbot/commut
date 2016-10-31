var React = require('react');
var Main = require('Main');
var Results = require('Results');
var Nav = require('Nav');
var Help = require('Help');

var Form = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var updates = {};
    var startAddRef = this.refs.startingAddress;
    var depAirRef = this.refs.departureAirport;
    var flightNumRef = this.refs.flightNumber;

    var startingAddress = startAddRef.value;
    var departureAirport = depAirRef.value;
    var flightNumber = flightNumRef.value;

    if (startingAddress.length > 0) {
      this.refs.startingAddress = '';
      updates.startingAddress = startingAddress;
    }
    if (departureAirport.length > 0) {
      this.refs.departureAirport = '';
      updates.departureAirport = departureAirport;
    }
    if (flightNumber.length > 0) {
      this.refs.flightNumber = '';
      updates.flightNumber = flightNumber;
    }

    this.props.onNewInput(updates);
  },

  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>

        <div>
          <input type="text" ref="startingAddress" placeholder="Starting Address"/>
        </div>

        <div>
          <input type="text" ref="departureAirport" placeholder="Departure Airport"/>
        </div>

        <div>
          <input type="text" ref="flightNumber" placeholder="Flight Number"/>
        </div>

        <button>Submit</button>
      </form>
    );
  }
});

module.exports = Form;
