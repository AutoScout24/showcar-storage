module.exports = {
    entry: "./dist/storage.js",
    output: {
        path: "./dist",
        filename: "storage.min.js"
    },
    plugins: [
        new (require("webpack")).optimize.UglifyJsPlugin({minimize: true})
    ]
};
