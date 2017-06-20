var path = require('path');
var webpack = require('webpack');
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin'),
    PathRewriterPlugin = require('webpack-path-rewriter')
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var CleanWebpackPlugin = require('clean-webpack-plugin');   
module.exports = {
    entry: [
        'babel-polyfill',
        "./src/index.tsx"
    ],

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'cheap-module-inline-source-map',

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js",".css"]
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
            test: /\.css$/,
            use: [ 'file-loader' ]
          },
            {
              test: /\.(html|json)$/,
              loader: PathRewriterPlugin.rewriteAndEmit({
                name: '[name].[ext]'
              })
            }

        ]
    },

    plugins: [
    
          new BundleAnalyzerPlugin({
  // Can be `server`, `static` or `disabled`. 
  // In `server` mode analyzer will start HTTP server to show bundle report. 
  // In `static` mode single HTML file with bundle report will be generated. 
  // In `disabled` mode you can use this plugin to just generate Webpack Stats JSON file by setting `generateStatsFile` to `true`. 
  analyzerMode: 'server',
  // Host that will be used in `server` mode to start HTTP server. 
  analyzerHost: '127.0.0.1',
  // Port that will be used in `server` mode to start HTTP server. 
  analyzerPort: 8888,
  // Path to bundle report file that will be generated in `static` mode. 
  // Relative to bundles output directory. 
  reportFilename: 'report.html',
  // Automatically open report in default browser 
  openAnalyzer: true,
  // If `true`, Webpack Stats JSON file will be generated in bundles output directory 
  generateStatsFile: false,
  // Name of Webpack Stats JSON file that will be generated if `generateStatsFile` is `true`. 
  // Relative to bundles output directory. 
  statsFilename: 'stats.json',
  // Options for `stats.toJson()` method. 
  // For example you can exclude sources of your modules from stats file with `source: false` option. 
  // See more options here: https://github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21 
  statsOptions: null,
  // Log level. Can be 'info', 'warn', 'error' or 'silent'. 
  logLevel: 'info'
          
        }),
      
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          },
          '__DEVTOOLS__': false,
          '__INCLUDE_SERVICE_WORKER__': true,
          '__APP_HUB_URL__': '"https://apphub.tee2.org"'
        }),

        new CleanWebpackPlugin(['dist'], {
        //  root: '/full/project/path',
        //  verbose: true,
        //  dry: false,
        //  exclude: ['shared.js']
        }),

        new webpack.optimize.CommonsChunkPlugin({
          children: true, // Look for common dependencies in all children,
          minChunks: 4 // How many times a dependency must come up before being extracted
        }),

        // This plugins optimizes chunks and modules by
        // how much they are used in your app
        //new webpack.optimize.OccurenceOrderPlugin(),

        // This plugin prevents Webpack from creating chunks
        // that would be too small to be worth loading separately
        //
        /*
        new webpack.optimize.MinChunkSizePlugin({
          minChunkSize: 51200 // ~50kb
        }), */



      
        new SWPrecacheWebpackPlugin(
          {
            cacheId: 'ad-family-pwa',
            filename: 'sw.js',
            maximumFileSizeToCacheInBytes: 104857600, // 100Mb
            staticFileGlobs: [
              'dist/manifest.json',
              'dist/**/*.{html,css,js}',
              'dist/**/*.{png,jpg,jpeg,svg,gif}'
            ],
            runtimeCaching: [
              {
                handler: 'cacheFirst',
                urlPattern: /dynamic\/[\w_-]+\.(gif|jpg|jpeg|png|svg)$/i
              }
            ],
            'stripPrefix': 'dist/'
          }
        ),

        new webpack.NamedModulesPlugin(),
       new webpack.optimize.UglifyJsPlugin({
              compress: {
                warnings: false
              },
              output: {
                comments: false
              },
              sourceMap: false
            }
          ),
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