'use strict';

var path = require('path');
var http = require('http');
var express = require('express');

module.exports = setup;

setup.consumes = [];

setup.provides = ['grevil.libs'];

function setup(options, imports, register) {
  return register(null, {
    'grevil.libs': {
      foo: function () {
        console.log('foo');
      }
    }
  })
}
