var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'),
    PathRewriterPlugin = require('webpack-path-rewriter');
module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        //'webpack-hot-middleware/client',
        'webpack/hot/only-dev-server',
        "./src/index.tsx"
    ],

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devServer: {
        hot: true,
        // enable HMR on the server

        contentBase: path.resolve(__dirname, 'dist'),
        // match the output path

        publicPath: '/'
        // match the output `publicPath`
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'inline-source-map',

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {test: /\.tsx?$/, use: ['awesome-typescript-loader'] },

            {
                test: /\.(png|gif|jpe?g|svg)$/i,
                use: ['url-loader?limit=2']
            },
            {
              test: /[.]html$/,
              loader: PathRewriterPlugin.rewriteAndEmit({
                name: '[name].html'
              })
            }

        ]
    },

    plugins: [
        new webpack.DefinePlugin({
          '__DEVTOOLS__': true,
          '__INCLUDE_SERVICE_WORKER__': false,
          '__APP_HUB_URL__': '"http://localhost:3000"'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new PathRewriterPlugin()
    ],

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    /*
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        //"babylonjs": "BABYLON"
    }, */
};