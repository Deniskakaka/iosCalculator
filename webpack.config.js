const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {
    CleanWebpackPlugin,
} = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = (env, argv) => {
    const isProduction = argv.mode === "production";
    const config = {
        resolve: {
            extensions: [".js", ".tsx", ".ts"],
        },
        entry: "./src/index.tsx",
        output: {
            path: __dirname + "/pages",
            filename: "bundle.js",
            publicPath: "/",
        },
        module: {
            rules: [
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    loader: "file-loader",
                    options: {
                        name: "[path][name].[ext]",
                    },
                },
                {
                    test: /.jsx?$/,
                    use: ["babel-loader"],
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        'style-loader',
                        // Translates CSS into CommonJS
                        'css-loader',
                        // Compiles Sass to CSS
                        'sass-loader',
                    ],
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        plugins: [
            new webpack.ProgressPlugin(),
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: "./src/index.html",
            }),
        ],
        devServer: {
            hot: true,
            historyApiFallback: true,
        },
    };

    if (isProduction) {
        config.plugins.push(
            new MiniCssExtractPlugin({
                filename: "[name].css",
            })
        );
    }

    return config;
};