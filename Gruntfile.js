/**
 * Created by carlos.matheu on 13/10/2015.
 */
module.exports = function (grunt) {
    'use strict';

    // stupid task
    grunt.registerTask('stupid', function() {
        console.log('stupid task going on!');
    });

    // default task
    grunt.registerTask('default', function () {
        console.log('\n\nBUILD OK');
    });
};