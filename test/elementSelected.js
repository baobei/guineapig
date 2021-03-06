'use strict';
module.exports = {

    // Testsuite name
    name: 'Selected - DalekJS guinea pig',

    'Can assert that checkbox is selected (OK, jQuery style, no message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.selected('#checked_checkbox')
            .done();
    },

    'Can assert that unchecked checkbox is not selected (OK, jQuery style, no message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.notSelected('#unchecked_checkbox')
            .done();
    },

    'Can assert that checked option is selected (OK, jQuery style, no message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.selected('#select_elm option:nth-child(2)')
            .done();
    },

    'Can assert that unchecked option is not selected (OK, jQuery style, no message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.notSelected('#select_elm option:last-child')
            .done();
    }
};