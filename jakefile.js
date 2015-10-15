/**
 * Created by carlos.matheu on 13/10/2015.
 */
(function () {
    'use strict';

    var EXPECTED_NODE_VERSION = 'v0.10.33';

    desc('default build');
    task('default', ['version'], function () {
        console.log('\n\nBUILD OK');
    });

    desc('check node version');
    task('version', function () {
        console.log('Checking node version...');

        var actualVersion = process.version;
        if(actualVersion !== EXPECTED_NODE_VERSION) {
            fail('Incorrect node version: expected ' + EXPECTED_NODE_VERSION + ' but found ' + actualVersion);
        }

    });
}());
