module.exports = {
    entry: "./lib/storage.js",
    output: {
        path: "./dist",
        filename: "storage.min.js"
    },
    plugins: [
        new (require("webpack")).optimize.UglifyJsPlugin({minimize: true})
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                query: {presets: ["es2015"]},
                exclude: /(node_modules|dist|bower_components)/
            }
        ]
    }
};
