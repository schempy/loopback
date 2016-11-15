// Copyright IBM Corp. 2013,2016. All Rights Reserved.
// Node module: loopback
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

/**
 * loopback test setup and support.
 */

'use strict';
assert = require('assert');
expect = require('chai').expect;
loopback = require('../');
memoryConnector = loopback.Memory;
GeoPoint = loopback.GeoPoint;
TaskEmitter = require('strong-task-emitter');
request = require('supertest');
var RemoteObjects = require('strong-remoting');

// Speed up the password hashing algorithm
// for tests using the built-in User model
loopback.User.settings.saltWorkFactor = 4;

assertValidDataSource = function(dataSource) {
  // has methods
  assert.isFunc(dataSource, 'createModel');
  assert.isFunc(dataSource, 'discoverModelDefinitions');
  assert.isFunc(dataSource, 'discoverSchema');
  assert.isFunc(dataSource, 'enableRemote');
  assert.isFunc(dataSource, 'disableRemote');
  assert.isFunc(dataSource, 'defineOperation');
  assert.isFunc(dataSource, 'operations');
};

assert.isFunc = function(obj, name) {
  assert(obj, 'cannot assert function ' + name + ' on object that doesnt exist');
  assert(typeof obj[name] === 'function', name + ' is not a function');
};
