module.exports = function (grunt) {
    "use strict";

    var moduleName = "storage";
    var loadConfig = function (name, module) {
        var result = {};
        module = module || moduleName || "module";
        name = name.indexOf(".") > -1 ? name : name + ".conf";
        result[module] = require("./config/" + name + ".js");
        return result;
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        webpack: loadConfig("webpack"),
        uglify: loadConfig("uglify"),
        karma: {storage: {configFile: "./config/karma.conf.js"}}
    });

    grunt.registerTask("default", ["webpack"]);
    grunt.registerTask("build", ["webpack", "uglify"]);
    grunt.registerTask("test", ["karma"]);

    require('load-grunt-tasks')(grunt, {
        pattern: ['grunt-*', "!grunt-cli"]
    });
};
