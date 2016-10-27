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
  onButtonClick: function (e) {
    e.preventDefault();

    var startAddRef = this.refs.startingAddress;
    var depAirRef = this.refs.departureAirport;
    var flightNumRef = this.refs.flightNumber;

    var startingAddress = startAddRef.value;
    var departureAirport = depAirRef.value;
    var flightNumber = flightNumRef.value;

    if (typeof startingAddress === 'string' && startingAddress.length > 0) {
      this.setState({
        startingAddress: startingAddress
      });
    }
    if (typeof departureAirport === 'string' && departureAirport.length > 0) {
      this.setState({
        departureAirport: departureAirport
      });
    }
    if (typeof flightNumber === 'string' && flightNumber.length > 0) {
      this.setState({
        flightNumber: flightNumber
      });
    }
  },

  render: function () {
    var name = this.props.name;
    var message = this.props.message;
    var startingAddress = this.state.startingAddress;
    var departureAirport = this.state.departureAirport;
    var flightNumber = this.state.flightNumber;

    return (
      <div>
        <h1>Welcome to commüt, {name}</h1>
        <p>{message}</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="startingAddress"/>
          <input type="text" ref="departureAirport"/>
          <input type="text" ref="flightNumber"/>

          <button>Submit</button>
        </form>

        <div>
          <h2>Your details:</h2>
          <h3>{startingAddress}</h3>
          <h3>{departureAirport}</h3>
          <h3>{flightNumber}</h3>
        </div>
      </div>
    );
  }
});


ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);
