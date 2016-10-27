var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'Stranger',
      message: 'I am not impressed by your performance'
    };
  },
  onButtonClick: function (e) {
    e.preventDefault();

    var startingAddress = this.refs.startingAddress.value;
    var departureAirport = this.refs.departureAirport.value;
    var flightNumber = this.refs.flightNumber.value;

    alert(startingAddress);
    alert(departureAirport);
    alert(flightNumber);
  },

  render: function () {
    var name = this.props.name;
    var message = this.props.message;

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
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);
