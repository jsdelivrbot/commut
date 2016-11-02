var React = require('react');

var CommutResults = React.createClass({
  render: function() {
    var {apiVar1, apiVar2, apiVar3} = this.props;
      return (
          <div>
              <h4>Your results:</h4>
              <h6>{apiVar1}</h6>
              <h6>{apiVar2}</h6>
              <h6>{apiVar3}</h6>
          </div>
      )
  }
});

module.exports = CommutResults;
