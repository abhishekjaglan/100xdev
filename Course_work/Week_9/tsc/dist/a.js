"use strict";
let a = 5;
console.log(a);
function helloWorld(firstName, lastName) {
    console.log(`Hello fellow coder ${firstName}`);
}
;
const user = {
    firstName: "abhishek",
    lastName: "jaglan",
    email: "abhishek@gmail.com",
    age: 24,
};
;
class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    ;
    greet(phrase) {
        console.log(`${phrase} - ${this.name}`);
    }
}
;
var Direction;
(function (Direction) {
    Direction["Up"] = "Up";
    Direction["Down"] = "Down";
    Direction["Left"] = "Left";
    Direction["Right"] = "Right";
})(Direction || (Direction = {}));
;
console.log(Direction.Up, Direction.Left);
const abhi = new Employee('Abhishek', 24);
console.log(abhi.greet('Hey wasssuuppppp'));
function isLegal(input) {
    return input.age >= 18 ? true : false;
}
function runAfterOneSec(fn) {
    setTimeout(fn, 1000);
}
;
runAfterOneSec(() => {
    console.log("Inside runAfterOneSec!");
});
console.log(isLegal(user));
helloWorld('abhishek');
