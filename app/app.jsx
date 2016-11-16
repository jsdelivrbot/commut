import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//Object destructuring that comes from ES6
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from 'Main';
import Commut from 'Commut';
import Nav from 'Nav';
import Help from 'Help';
import About from 'About';
import WeatherMessage from 'WeatherMessage';
import tsa_precheck from 'tsa_precheck';
import tsa_wait_time from 'tsa_wait_time';
import googleMaps from 'googleMaps';
// import flightStats from 'flightStats';
import flightStats_departureTime from 'flightStats_departureTime';
import flightStats_departureGateDelayMinutes from 'flightStats_departureGateDelayMinutes';
import flightStats_departureRunwayDelayMinutes from 'flightStats_departureRunwayDelayMinutes';
import flightStats_arrivalGateDelayMinutes from 'flightStats_arrivalGateDelayMinutes';
import flightStats_arrivalRunwayDelayMinutes from 'flightStats_arrivalRunwayDelayMinutes';
import flightStats_gateDepartureTerminal from 'flightStats_gateDepartureTerminal';
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
