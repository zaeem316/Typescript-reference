"use strict";
/* Basic  */
let age = 27;
let full_name = 'zaeem';
let is_male = true;
/* Array  */
let arr = [1, 2, 3, 4];
/* Tuples  */
let bio = ['Zaeem', 27, true];
/* Tuple Array  */
let employee = [
    ['zaeem', 27],
    ['hassan', 28],
    ['farhan', 34]
];
/* Union  */
let uid = 2;
/* Enums  */
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
/* Objects  */
let user = {
    id: 3,
    name: 'zaeem'
};
let user2 = {
    id: 2,
    name: 'zaeem'
};
/* Type Assertion or Type Casting */
let unique_key = '33';
let key1 = unique_key; /* syntax 1 */
let key2 = unique_key; /* syntax 2 */
/* Function  */
function addSum(x, y) {
    return x + y;
}
let user3 = {
    id: 3,
    name: 'zaeem',
    age: 27 /* optional property */
};
let add = (x, y) => x + y;
/* Classes */
class Person {
    constructor(id, name) {
        this.id = id,
            this.name = name;
    }
}
const zaeem = new Person(4, 'zaeem');
/* Generics */
function reverseArr(x, y, z) {
    return ([z, y, x]);
}
console.log(reverseArr(1, 2, 6));
console.log(reverseArr('zaeem', 'farhan', 'talha'));
console.log(reverseArr(true, true, false));
