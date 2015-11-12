module.exports = {
    entry: "./src/storage.js",
    output: {filename: "./dist/showcar-storage.js"},
    module: {
        loaders: [{test: /\.js$/, loader: "babel?presets[]=es2015"}]
    },
    devtool: "source-map"
};
