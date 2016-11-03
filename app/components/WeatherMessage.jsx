var React = require('react');

var WeatherMessage = React.createClass({
  render: function () {
    var {temp, startingAddress} = this.props;

    return (
      <div>
        <div>
          <h6 className="details">Current temperature: </h6>
          <h6>{temp}&deg;F</h6>
        </div>
      </div>
    );
  }
});

module.exports = WeatherMessage;
