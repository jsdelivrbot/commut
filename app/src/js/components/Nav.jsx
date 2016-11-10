import React, { Component } from 'react';
import CommutForm from 'CommutForm'
import CommutMessage from 'CommutMessage'
import Main from 'Main'
import Help from 'Help'
import About from 'About'

//ES6 destructuring
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu" data-dropdown-menu>
          <li className="menu-text">
            <IndexLink to="/" activeClassName="active">
              commüt
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
  )
};

module.exports = Nav;
