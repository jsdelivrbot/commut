var React = require('react');

var CommutResults = React.createClass({
  render: function() {
    var {apiVar1, apiVar2, apiVar3} = this.props;
      return (
          <div>
              <h2>Your results:</h2>
              <h3>{apiVar1}</h3>
              <h3>{apiVar2}</h3>
              <h3>{apiVar3}</h3>
          </div>
      )
  }
});

module.exports = CommutResults;
