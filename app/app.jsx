import React from 'react'
import ReactDOM from 'react-dom'

//Object destructuring that comes from ES6
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import Main from 'Main'
import Commut from 'Commut'
import Nav from 'Nav'
var Help = require('Help');
var About = require('About');
var WeatherMessage = require('WeatherMessage');
var TsaPrecheckMessage = require('TsaPrecheckMessage');
var TsaWaitTimeMessage = require('TsaWaitTimeMessage');
//Load foundation that will be refactored later on
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//App css
require('style!css!applicationStyles')


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="help" component={Help}/>
      <Route path="about" component={About}/>
      <IndexRoute component={Commut}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
