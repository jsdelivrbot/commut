var React = require('react');
var Main = require('Main');
var Form = require('Form');
var Nav = require('Nav');
var Details = require('Details');
var Help = require('Help');

var Results = React.createClass({
  render: function () {
    return (
      <div>
        <Details/>
        <h3>MATTY ENTER YOUR INFO HERE!</h3>
      </div>
    );
  }
});

module.exports = Results;
