var React = require('react');
var Form = require('Form');
var Results = require('Results');
var Main = require('Main');
var Help = require('Help');

//ES6 destructuring
var {Link} = require('react-router');


//Where the hero image goes
var Nav = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Nav component</h2>
        <Link to="/">Calculate your commüt</Link>
        <br></br>
        <Link to="/help">Help</Link>
      </div>
    );
  }
});

module.exports = Nav;
