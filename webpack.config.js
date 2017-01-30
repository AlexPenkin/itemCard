var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin =  require('html-webpack-plugin');
new webpack.DefinePlugin({
  "process.env": {
     NODE_ENV: JSON.stringify("production")
   }
})
var cssConfig = {
    name: "css",
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'css/style.css'), path.resolve(__dirname, './templates/index.html')],
    devServer: {
    inline:true,
    port: 9000
  },
    plugins: [

    ],
    module: {

        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('css-loader!postcss-loader')
        },
        {
       test: /\.html$/,
       loader: "html-loader"
     },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },]
    },
    plugins: [
        new ExtractTextPlugin(__dirname, 'prod.css'),
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, './templates/index.html')
      })
    ],
    output: {
        path: path.resolve(__dirname, 'css/'),
        // publicPath: '/css/',
        filename: "bundle.js"
    },
};
cssConfig.plugins.push(new webpack.HotModuleReplacementPlugin())

module.exports = [
    cssConfig
];
