module.exports = {
    options: {
        compress: true,
        mangle: true,
        sourceMap: true,
        sourceMapIn: "dist/showcar-storage.js.map"
    },
    files: {
        "dist/showcar-storage.min.js": "dist/showcar-storage.js"
    }
};
