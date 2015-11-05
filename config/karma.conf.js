module.exports = function (config) {
    config.set({
        basePath: '../',
        files: [ 'test/**/*.spec.js' ],
        preprocessors: {
            'lib/**/*.js': ['webpack'],
            'test/**/*.spec.js': ['webpack']
        },
        webpack: { module: require("./webpack.conf.js").module },
        webpackMiddleware: { stats: false },
        frameworks: ['jasmine'],
        reporters: ['mocha'],
        browsers: ['Chrome', 'Firefox', 'Safari'],
        singleRun: true
    })
};
