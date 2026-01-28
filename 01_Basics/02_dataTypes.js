"useStrict"; //treat all JS code as newer version

const n = 1234; // number
console.log(n);

const bigInt = 1234567899876n; //bigInt

let str = "hello";  // string

let booleanValue = true; // boolean
let booleanValue_2 = false;

let age = null;

let age2;
console.log(age2);

//Object
let myObj = {
    name: "hitesh",
    age: 22,
}
console.log(myObj);

//symbol
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//typeof Operator
console.log(typeof n);
console.log(typeof bigInt);
console.log(typeof str);
console.log(typeof booleanValue);
console.log(typeof age);
console.log(typeof age2);
