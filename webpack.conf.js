module.exports = {
    entry: "./lib/storage.js",
    output: {
        filename: "./dist/storage.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                query: { presets: ["es2015"] },
                exclude: /(node_modules|dist|bower_components)/
            }
        ]
    }
};
