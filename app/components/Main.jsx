var React = require('react');
var Form = require('Form');
var Results = require('Results');
var Nav = require('Nav');
var Help = require('Help');

//Where the hero image goes
var Main = React.createClass({
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
