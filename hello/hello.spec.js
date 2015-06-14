/**
 * Created by james on 6/14/15.
 */
var hello = require('./hello');
var assert = require('assert');

describe('hello', function(){
   it('will say "Hello James!"', function(){
       assert(hello('James') === 'Hello James!');
   });
});