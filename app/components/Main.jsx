var React = require('react');
var Nav = require('Nav');

//Where the hero image goes
var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Nav/>
        <h1>Welcome to commüt</h1>
        <div className="row">
          <div className="columns medium-6 large-4 small-centered">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Main;
