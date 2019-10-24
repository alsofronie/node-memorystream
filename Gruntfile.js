module.exports = function(grunt) {
    
    grunt.loadNpmTasks('grunt-mocha-test');
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
              node: true
            },
            main : ["index.js"]
        },
        mochaTest: {
            options: {
                reporter: 'spec'
            },
            src: ['test/*.test.js']
        }
    });

    grunt.registerTask('default', ['mochaTest']);
};