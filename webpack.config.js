var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: "source-map",
    resolve: {
      extensions: ['.js', '.json', '.ts', '.tsx'],
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: "awesome-typescript-loader",
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
            },
        ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        hash: true,
        filename: './index.html',
        template: './src/index.html',
        title: 'Oppressiolyzer'
      })
    ]
};