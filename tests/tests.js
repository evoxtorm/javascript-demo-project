// testing code goes here

'use strict'

var chai = require('chai');
var assert = chai.assert;

var myApp = require('../app/library.js');

describe("Arithmetic Functionality", function() {
  it("should return 2 as average for 1, 2, 3", function() {
    assert(myApp.computeAverage(1,2,3) == 2);
  })
  it("should return 5 as average for 3, 7, 5", function() {
    assert(myApp.computeAverage(3, 7, 5) == 5);
  })
  it("should return 120 as factorial for 5", function() {
    assert(myApp.computeFactorial(5) == 120);
  })
})


describe("Temperature Conversion Functionality", function() {
  it("should return X for Celcius value Y", function() {
    assert(myApp.convertTempCtoF(40) == 104);
  })
  it("should return X for Celcius value Y", function() {
    assert(myApp.convertTempCtoF(60) == 140);
  })
  it("should return Y for Fahrenheit value X", function() {
    assert(myApp.convertTempFtoC(140) == 60);
  })
  it("should return Y for Fahrenheit value X", function() {
    assert(myApp.convertTempFtoC(104) == 40);
  })
})
