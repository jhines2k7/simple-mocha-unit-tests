/**
 * Created by james on 6/14/15.
 */
var Car = require('./car');
var assert = require('assert');

describe('Car module', function(){

    it('will create a blue car with four doors', function(){
        var blueCar = new Car('blue', 4);

        assert(blueCar.doors === 4);
        assert(blueCar.color === 'blue');
    });

    it('will drive forward', function() {
        var greenCar = new Car('green', 2);

        assert(greenCar.driveForward() === 'The green car is driving forward!');
    });
});