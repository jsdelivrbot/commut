var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'Stranger',
      message: 'I am not impressed by your performance'
    };
  },
  render: function () {
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Welcome to commüt, {name}</h1>
        <p>{message}</p>

      <form>
        <input type="text" ref="name"/>
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
