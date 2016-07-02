
var describe = require('mocha').describe,
    it = require('mocha').it,
    expect = require('chai').expect,
    //linear = require('../index.js');
    functions = require('../index.js');

describe('Linear & Squares', function () {
    it('Linear 4', function () {
        expect(functions.linear(4)).eql("_____________\n|  1  2  3  4\n|  5  6  7  8\n|  9 10 11 12\n| 13 14 15 16");
    })
    it('Squares 4', function () {
        expect(functions.squares(4)).to.deep.eql("_________________\n| 1     4   9  16\n| 25   36  49  64\n| 81  100 121 144\n| 169 196 225 256");
    })
})