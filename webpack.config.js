const path = require("path");
const Dotenv = require('dotenv-webpack');

const config = {
    mode: "development",
    devtool: "source-map",
    devServer: {
        static: {
            directory: path.join(__dirname, '/public')
        },
        port: 3000,
        hot: true
    },
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, '/dist'),
        filename: "bundle.js",
        publicPath: "/dist/"
    },
    module: {
        rules: [
            {
                test: /\.(ttf|eot|svg|gif|jpg|png|ico)(\?[\s\S]+)?$/,
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                }
              },
              {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
              },
              {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
              },
              {
                test: /\.(scss)$/,
                include: /src/,
                use: [
                    {
                        loader: 'style-loader', // inject CSS to page
                    }, 
                    {
                        loader: 'css-loader', // translates CSS into CommonJS modules
                        options: {
                            sourceMap: true
                        }
                    }, 
                    {
                        loader: 'postcss-loader', // Run post css actions
                        options: {
                            postcssOptions: {
                                plugins: [ require("autoprefixer") ]
                            }
                        }
                    }, 
                    {
                        loader: 'sass-loader', // compiles Sass to CSS
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new Dotenv()
    ]
}

module.exports = config;