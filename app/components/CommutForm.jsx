var React = require('react');

var CommutForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var startingAddress = this.refs.startingAddress.value;
    var departureAirport = this.refs.departureAirport.value;
    var flightNumber = this.refs.flightNumber.value;

    if (startingAddress.length > 0) {
      this.refs.startingAddress.value = '';
      this.prop.onSearch(startingAddress);
    }
    if (departureAirport.length > 0) {
      this.refs.departureAirport.value = '';
      this.prop.onSearch(departureAirport);
    }
    if (flightNumber.length > 0) {
      this.refs.flightNumber.value = '';
      this.prop.onSearch(flightNumber);
    }
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>

        <div>
          <input type="text" ref="startingAddress" placeholder="Starting Address"/>
          <input type="text" ref="departureAirport" placeholder="Departure Airport"/>
          <input type="text" ref="flightNumber" placeholder="Flight Number"/>
        </div>

        <button>Submit</button>
      </form>
    );
  }
});

module.exports = CommutForm;
