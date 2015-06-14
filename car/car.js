/**
 * Created by james on 6/14/15.
 */
function Car(color, doors) {
    this.doors = doors;
    this.color = color;
}

Car.prototype.driveForward = function() {
    return 'The ' + this.color + ' car is driving forward!';
};

module.exports = Car;