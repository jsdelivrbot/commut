var React = require('react');

var CommutResults = React.createClass({
  render: function() {
    var {apiVar1, apiVar2, apiVar3, apiVar4} = this.props;
      return (
          <div>
              <h5 className="page-title">Your results:</h5>
              <h6 className="details">Travel time: </h6>
              <h6>{apiVar1}</h6>
              <h6 className="details">Delay time: </h6>
              <h6>{apiVar2}</h6>
              <h6 className="details">Total commute time: </h6>
              <h6>{apiVar3}</h6>
              <h6 className="details">Temperature at destination: </h6>
              <h6>{apiVar4}</h6>
              <h6 className="details">TSA PreCheck: </h6>
              <h6>Yes or No</h6>
              <h6 className="details">TSA Wait Time: </h6>
              <h6>TBD</h6>
          </div>
      )
  }
});

module.exports = CommutResults;
