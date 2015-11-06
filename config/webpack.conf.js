module.exports = {
    entry: "./lib/storage.js",
    output: {filename: "./dist/storage.js"},
    module: {
        loaders: [{test: /\.js$/, loader: "babel?presets[]=es2015"}]
    },
    devtool: "source-map"
};
