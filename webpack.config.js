module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Nav: 'app/components/Nav.jsx',
      Form: 'app/components/Form.jsx',
      Main: 'app/components/Main.jsx',
      Results: 'app/components/Results.jsx',
      Details: 'app/components/Details.jsx',
      Help: 'app/components/Help.jsx'
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
