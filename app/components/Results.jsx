var React = require('react');
var Main = require('Main');
var Form = require('Form');
var Nav = require('Nav');
var Details = require('Details');
var Help = require('Help');
var About = require('About');
var ResultsAPI = require('ResultsAPI');

var Results = React.createClass({
  render: function () {
    return (
      <div>
        <h3>Results</h3>
        <Details/>
        <ResultsAPI/>
      </div>
    );
  }
});

module.exports = Results;
