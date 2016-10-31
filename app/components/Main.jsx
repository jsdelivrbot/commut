var React = require('react');
var Nav = require('Nav');

//Where the hero image goes
var Main = React.createClass({
  handleSearch: function (startingAddress, departureAirport, flightNumber) {
    alert(startingAddress);
    alert(departureAirport);
  },
  render: function () {
    return (
      <div>
        <Nav/>
        <h1>Welcome to commüt</h1>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;
