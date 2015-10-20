module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: ['test/**/*.spec.js'],
        exclude: [],
        preprocessors: {
            'index.js': ['webpack'],
            'test/**/*.spec.js': ['webpack']
        },
        webpack: {},
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['Chrome'],
        singleRun: true
    })
};
