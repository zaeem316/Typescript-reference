/* Basic  */
var age = 27;
var full_name = 'zaeem';
var is_male = true;
/* Array  */
var arr = [1, 2, 3, 4];
/* Tuples  */
var bio = ['Zaeem', 27, true];
/* Tuple Array  */
var employee = [
    ['zaeem', 27],
    ['hassan', 28],
    ['farhan', 34]
];
/* Union  */
var uid = 2;
/* Enums  */
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
/* Objects  */
var user = {
    id: 3,
    name: 'zaeem'
};
var user2 = {
    id: 2,
    name: 'zaeem'
};
/* Type Assertion or Type Casting */
var unique_key = '33';
var key1 = unique_key; /* syntax 1 */
var key2 = unique_key; /* syntax 2 */
/* Function  */
function addSum(x, y) {
    return x + y;
}
var user3 = {
    id: 3,
    name: 'zaeem',
    age: 27 /* optional property */
};
var add = function (x, y) { return x + y; };
/* Classes */
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id,
            this.name = name;
    }
    return Person;
}());
var zaeem = new Person(4, 'zaeem');
/* Generics */
function reverseArr(x, y, z) {
    return ([z, y, x]);
}
console.log(reverseArr(1, 2, 6));
console.log(reverseArr('zaeem', 'farhan', 'talha'));
console.log(reverseArr(true, true, false));
