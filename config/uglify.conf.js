module.exports = {
    options: {
        compress: true,
        mangle: true,
        sourceMap: true,
        sourceMapIn: "dist/storage.js.map"
    },
    files: {
        "dist/storage.min.js": "dist/storage.js"
    }
};
