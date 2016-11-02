var React = require('react');

var WeatherMessage = React.createClass({
  render: function () {
    var {temp, startingAddress} = this.props;

    return (
      <div>
        <h4>
          It is currently {temp} degrees at {startingAddress}.
        </h4>
      </div>
    );
  }
});

module.exports = WeatherMessage;
