var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      About: 'app/src/js/components/About.jsx',
      Commut: 'app/src/js/components/Commut.jsx',
      CommutForm: 'app/src/js/components/CommutForm.jsx',
      CommutMessage: 'app/src/js/components/CommutMessage.jsx',
      CommutResults: 'app/src/js/components/CommutResults.jsx',
      Help: 'app/src/js/components/Help.jsx',
      Main: 'app/src/js/components/Main.jsx',
      WeatherMessage: 'app/src/js/components/WeatherMessage.jsx',
      Nav: 'app/src/js/components/Nav.jsx',
      openWeatherMap: 'app/src/js/api/openWeatherMap.jsx',
      flightStats: 'app/src/js/api/flightStats.jsx',
      flightStats_departureTime: 'app/src/js/api/flightStats_departureTime.jsx',
      flightStats_departureGateDelayMinutes: 'app/src/js/api/flightStats_departureGateDelayMinutes.jsx',
      flightStats_departureRunwayDelayMinutes: 'app/src/js/api/flightStats_departureRunwayDelayMinutes.jsx',
      flightStats_arrivalGateDelayMinutes: 'app/src/js/api/flightStats_arrivalGateDelayMinutes.jsx',
      googleMaps: 'app/src/js/api/googleMaps.jsx',
      tsa_precheck: 'app/src/js/api/tsa_precheck.jsx',
      tsa_wait_time: 'app/src/js/api/tsa_wait_time.jsx',
      applicationStyles: 'app/styles/app.css',
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query : {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules)|bower_components/
      }
    ]
  }
};
