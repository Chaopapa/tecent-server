const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js"
  },

  output: {
    path: path.join(__dirname, "./dist"),
    filename: "javascript/[name].[hash].js"
  },

  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: "./lib",
        to: "lib"
      }
    ]),

    new HtmlWebpackPlugin({
      template: "./views/index.html",
      filename: "index.html"
    })
  ],

  module: {
    rules: [
      {
        test: /\.html$/,
        use: "string-loader"
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {

            presets: [
              ["@babel/preset-env", {useBuiltIns:'usage',corejs:3}]
            ]
          }
        }
      },
      {
          test:/\.(png|jpg|jpeg|gif)$/,
          use:{
              loader:'url-loader',
              options:{
                  limit:100000
              }
          }
      },
      {
        test: /\.(ttf|svg|woff|woff2|eot)$/,
        use: 'file-loader'
      },
      {
        test: /\.hbs$/,
        use: 'handlebars-loader'
      }
    ]
  }
};
