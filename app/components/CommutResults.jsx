var React = require('react');

var CommutResults = React.createClass({
  render: function() {
    var {apiVar1, apiVar2, apiVar3} = this.props;
      return (
          <div>
              <h5 className="page-title">Your results:</h5>
              <h6>{apiVar1}</h6>
              <h6>{apiVar2}</h6>
              <h6>{apiVar3}</h6>
          </div>
      )
  }
});

module.exports = CommutResults;
