var React = require('react');
var Form = require('Form');
var Results = require('Results');
var Main = require('Main');
var Help = require('Help');
var About = require('About');
var ResultsAPI = require('ResultsAPI');

//ES6 destructuring
var {Link, IndexLink} = require('react-router');


//Where the hero image goes
var Nav = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Nav component</h2>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Calculate your commüt</IndexLink>
        <br></br>
        <Link to="/help" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Help</Link>
        <br></br>
        <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
      </div>
    );
  }
});

module.exports = Nav;
