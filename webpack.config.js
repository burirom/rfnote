var path    = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  entry: ['@babel/polyfill', './js/main.tsx'],
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
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader',
          loader: 'css-loader?modules',
        }]
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }
      }
    ]
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