var path  = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var Open = require('open-browser-webpack-plugin');
var webpack  = require('webpack')
const config = {
  entry:'./src/index.js',
    output:{
      filename:'bundle.js',
        path:path.resolve('./dist')
    },
    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
        ]
    },
    devServer:{
        contentBase: path.join(__dirname, "dist"),
        inline:true,
        hot:true
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
        /*new Open({
            url: 'http://localhost:8080'
        })*/
    ]
};

module.exports = config;