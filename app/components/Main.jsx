var React = require('react');
var Nav = require('Nav');

//Where the hero image goes
var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Nav/>
        <div className="row">
          <div className="columns small-centered">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Main;
