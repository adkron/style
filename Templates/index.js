// This file is a template, based on the Accelerometer Module

// Copyright 2014 Technical Machine, Inc. See the COPYRIGHT
// file at the top-level directory of this distribution.
//
// Licensed under the Apache License, Version 2.0 <LICENSE-APACHE or
// http://www.apache.org/licenses/LICENSE-2.0> or the MIT license
// <LICENSE-MIT or http://opensource.org/licenses/MIT>, at your
// option. This file may not be copied, modified, or distributed
// except according to those terms.

// Any dependencies, notably the event emitter utility
var util = require('util');
var EventEmitter = require('events').EventEmitter;

// Any variables intrinsic to the hardware
var I2C_ADDRESS = 0x1D;
var OUT_X_MSB = 0x01;

// Constructor function to instantiate the hardware object
function Accelerometer (hardware, callback) {
  var self = this;

  // Set hardware connection of the object
  self.hardware = hardware;
  
  // Object properties (including any settable properties)
  self.outputRate = 12.5;
  self.scaleRange = 2;

  // If relevant, set up I2C/SPI/UART
  self.i2c = hardware.I2C(I2C_ADDRESS);

  // Any errors should be returned to the callback as
  // self.emit('error', error)
  // callback(error)
  
  // Listener handling
  self.on('newListener', function(event) {
    // If we have a new sample listener
    if (event == 'data' || event == 'sample') {
      // Enable interrupts at whatever rate was previously set.
      self.enableDataInterrupts(true, queueNext);
    }
  });

  self.on('removeListener', function(event) {
    // If we have a new || event == 'sample' listener
    if (event == 'data' || event == 'sample') {
      // Disable interrupt.
      self.enableDataInterrupts(false, queueNext);
    }
  });
  
  // Emit the ready event when everything is set up
  setImmediate(function emitReady() {
    self.emit('ready');
    self.queue.next();
  });
  // Call the callback with object
  if (callback) {
    callback(null, self);
  }
}

// Inherit event emission
util.inherits(Accelerometer, EventEmitter);

// Any internal functions should start with _ and not be noted in documentation
Accelerometer.prototype._changeRegister = function(change, callback) {
  var self = this;
  self._modeStandby(function inStandby(err) {
    if (err) {
      return self._failProcedure(err, callback);
    } else {
      change( function setActive(err) {
        if (err) {
          return self._failProcedure(err, callback);
        } else {
          self._modeActive(callback);
        }
      });
    }
  });
};

// Any functions for the API for the device
Accelerometer.prototype.getAcceleration = function (callback) {
  var self = this;
  self.queue.place( function readAccel() {
    self._readRegisters(OUT_X_MSB, 6, function (err, rawData) {
      if (err) throw err;
      var out = [];
      for (var i = 0; i < 3 ; i++) {
        var gCount = (rawData[i*2] << 8) | rawData[(i*2)+1];
        gCount = (gCount >> 4);
        if (rawData[i*2] > 0x7F) {
          gCount = -(1 + 0xFFF - gCount);
        }
        out[i] = gCount / ((1<<12)/(2*self.scaleRange));
      }
      callback(null, out);
      setImmediate(self.queue.next);
    });
  });
};

// Every module needs a use function which calls the constructor
function use (hardware, callback) {
  return new Accelerometer(hardware, callback);
}

// Export functions
exports.Accelerometer = Accelerometer;
exports.use = use;