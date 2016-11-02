var React = require('react');

var CommutForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var updates = {};

    var startingAddress = this.refs.startingAddress.value;
    var departureAirport = this.refs.departureAirport.value;
    var flightNumber = this.refs.flightNumber.value;

    if (startingAddress.length > 0) {
      this.refs.startingAddress.value = '';
      // this.props.onSearch(startingAddress);
      updates.startingAddress = startingAddress;
    }
    if (departureAirport.length > 0) {
      this.refs.departureAirport.value = '';
      // this.props.onSearch(departureAirport);
      updates.departureAirport = departureAirport;
    }
    if (flightNumber.length > 0) {
      this.refs.flightNumber.value = '';
      // this.props.onSearch(flightNumber);
      updates.flightNumber = flightNumber;
    }
    this.props.onNewData(updates);

  },
  render: function () {
    return (
      <div>
        <h4 className="page-title">Calculate your commüt</h4>
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

          <button className="button small">Submit</button>
        </form>
      </div>
    );
  }
});

module.exports = CommutForm;
