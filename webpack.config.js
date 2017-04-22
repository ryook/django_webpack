var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = [{
    context: __dirname,
    entry: './src/app.js',
    output: {
        // filename: 'bundle.js',
        // path: path.resolve(__dirname, 'mysite/polls/static/polls')
        path: path.resolve('./assets/webpack-bundles/'),
        filename: "[name]-[hash].js"
    },

    plugins: [
      new BundleTracker({filename: './webpack_stats.json'})
    ]
}];
