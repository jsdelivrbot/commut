var React = require('react');
var CommutForm = require('CommutForm');
var CommutMessage = require('CommutMessage');
var Main = require('Main');
var Help = require('Help');
var About = require('About');

//ES6 destructuring
var {Link, IndexLink} = require('react-router');


var Nav = React.createClass({
  render: function () {
    return (
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu" data-dropdown-menu>
              <li className="menu-text">
                <IndexLink to="/" activeClassName="active">
                  <img src="http://i.imgur.com/8ZW2fKD.png" alt="logo" className="img-responsive"/>
                </IndexLink>
              </li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <li>
                <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
              </li>
              <li>
                <Link to="/help" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Help</Link>
              </li>
            </ul>
          </div>
        </div>
    );
  }
});

module.exports = Nav;
