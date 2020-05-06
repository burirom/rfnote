var path    = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  entry: "./js/main.tsx",
  module: {
    rules: [{
      test: /\.tsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'ts-loader',
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }]
      }]
    },
    output: {
      path: __dirname + "/dist/",
      filename: "main.min.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    devServer: {
      historyApiFallback: true,
    }
};