var React = require('react');
var ReactDOM = require('react-dom');

//Object destructuring that comes from ES6
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Commut = require('Commut');
var Nav = require('Nav');
var Help = require('Help');
var About = require('About');

// var Greeter = React.createClass({
//   getDefaultProps: function () {
//     return {
//       name: 'Stranger',
//       message: 'I am not impressed by your performance',
//       startingAddress: '123 Main St',
//       departureAirport: 'PDX',
//       flightNumber: 'US123'
//     };
//   },
//   getInitialState: function () {
//     return {
//       startingAddress: this.props.startingAddress,
//       departureAirport: this.props.departureAirport,
//       flightNumber: this.props.flightNumber
//     };
//   },
//   handleNewInput: function (updates) {
//     this.setState(updates);
//   },
//   render: function () {
//
//     return (
//       <div>
//
//         <Main/>
//         <Form onNewInput={this.handleNewInput}/>
//
//       <Results/>
//       </div>
//     );
//   }
// });


ReactDOM.render(
  // <Greeter/>,
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="help" component={Help}/>
      <Route path="about" component={About}/>
      <IndexRoute component={Commut}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
