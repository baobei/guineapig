'use strict';
module.exports = {

    // Testsuite name
    name: 'Cookie - DalekJS guinea pig',

    'Can set & read a cookie (OK, jQuery style, no message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .setCookie('atestcookie', 'foobar=baz')
            .assert.cookie('atestcookie', 'foobar=baz')
            .done();
    }
}