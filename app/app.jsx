var React = require('react');
var ReactDOM = require('react-dom');

//Object destructuring that comes from ES6
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Commut = require('Commut');
var Nav = require('Nav');
var Help = require('Help');
var About = require('About');

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