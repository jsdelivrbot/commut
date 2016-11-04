var React = require('react');
var Nav = require('Nav');
var Help = require('Help');

var About = (props) => {
  return (
    <div>
      <div className="row">
        <div className="small-4 columns small-centered">
          <h1 className="text-center">About</h1>
            <p>
              This is a commuting application build on React. <a href="https://github.com/mwilkin">Matt Wilkin</a> and <a href="https://github.com/maskrap">Sam Park</a> built this app during their five-week internship at DevelopmentNow.
            </p>
            <p>
              Here are some of the tools we used:
            </p>
          <ul>
            <li>
              <a href="https://facebook.github.io/react">React</a> - This was the
                JavaScript framework used.
            </li>
            <li>
              <a href="https://github.com/zurb/foundation-sites">Foundation</a> - This was the
                Front-End framework used.
            </li>
            <li>
              <a href="https://github.com/nodejs/node">Node.js</a> - Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
            </li>
            <li>
              <a href="http://webpack.github.io/">Webpack</a> - Webpack is a module bundler that turns modules with dependencies into static assets.
            </li>
            <li>
              <a href="http://babeljs.io/">Babel</a> - Babel is a JavaScript compiler. We used Babel to convert JSX syntax.
            </li>
            <li>
              <a href="https://developers.google.com/maps/">Google Maps API</a> - Google Maps API was used to search road traffic and direction data.
            </li>
            <li>
              <a href="https://developer.flightstats.com/api-docs/flightstatus/v2">FlightStats API</a> - FlightStats API was used to search flight information data.
            </li>
            <li>
              <a href="https://developer.flightstats.com/api-docs/flightstatus/v2">OpenWeatherMap API</a> - OpenWeatherMap API was used to pull in weather data.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
};

module.exports = About;
