module.exports = {
  entry: './app/app.jsx',
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
      Help: 'app/components/Help.jsx',
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      TSA: 'app/api/TSA.jsx'
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
