"use strict";
// basic types
let id = 5;
let company = 'Doss Capital';
let isPublished = true;
let x = 'Hello';
let age;
x = true;
age = 30;
let ids = [1, 2, 3, 4, 5];
let arr = [1, 2, 'hello world'];
// Tuple
let person = [1, 'bob', true];
//  Tuple Array 
let employee;
employee = [
    [1, 'jane'],
    [2, 'jill'],
    [3, 'jack'],
    [4, 'john'],
];
let ssid = 22;
ssid = '22';
// Enum
var Dircetion1;
(function (Dircetion1) {
    Dircetion1[Dircetion1["Up"] = 1] = "Up";
    Dircetion1[Dircetion1["Down"] = 2] = "Down";
    Dircetion1[Dircetion1["Left"] = 3] = "Left";
    Dircetion1[Dircetion1["Right"] = 4] = "Right";
})(Dircetion1 || (Dircetion1 = {}));
const user = {
    id: 1,
    name: 'Jacob'
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'Jacob'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id,
            this.name = name;
    }
}
const alex = new Person(1, 'alex');
const mike = new Person(2, 'mike');
//  Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['alex', 'garrett', 'rob']);
numArray.push(1);
