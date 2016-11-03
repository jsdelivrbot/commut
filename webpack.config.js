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
      About: 'app/components/About.jsx',
      Commut: 'app/components/Commut.jsx',
      CommutForm: 'app/components/CommutForm.jsx',
      CommutMessage: 'app/components/CommutMessage.jsx',
      CommutResults: 'app/components/CommutResults.jsx',
      Help: 'app/components/Help.jsx',
      Main: 'app/components/Main.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      Nav: 'app/components/Nav.jsx',
      TSA: 'app/api/TSA.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx',
      applicationStyles: 'app/styles/app.css'
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
