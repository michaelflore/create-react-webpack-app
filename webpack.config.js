const path = require("path");

const config = {
    devtool: "cheap-module-source-map",
    devServer: {
        contentBase: path.join(__dirname, '/public'),
        port: 3000,
        hot: true
    },
    entry: path.join(__dirname, 'src/main.js'),
    output: {
        path: path.join(__dirname, '/dist'),
        filename: "bundle.js",
        publicPath: "/dist/"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    }
}

module.exports = config