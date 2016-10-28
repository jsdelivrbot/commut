var React = require('react');
var ReactDOM = require('react-dom');
var Hero = require('./components/Hero');
var Form = require('./components/Form');
var Results = require('./components/Results');

var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'Stranger',
      message: 'I am not impressed by your performance',
      startingAddress: '123 Main St',
      departureAirport: 'PDX',
      flightNumber: 'US123'
    };
  },
  getInitialState: function () {
    return {
      startingAddress: this.props.startingAddress,
      departureAirport: this.props.departureAirport,
      flightNumber: this.props.flightNumber
    };
  },
  handleNewInput: function (updates) {
    this.setState(updates);
  },
  render: function () {

    return (
      <div>

        <Hero/>
        <Form onNewInput={this.handleNewInput}/>

        <div>
          <h2>Your details:</h2>
          <h3>{this.state.startingAddress}</h3>
          <h3>{this.state.departureAirport}</h3>
          <h3>{this.state.flightNumber}</h3>
        </div>

        <Results/>
      </div>

    );
  }
});


ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);
