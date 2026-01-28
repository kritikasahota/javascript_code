

//pop operation
let fruits = ["Apple", "Orange", "Pear"];
console.log( fruits.pop() ); //removes element from end 
console.log( fruits ); 

//push operation
fruits = ["Apple", "Orange"];
fruits.push("Pear"); //adds an element to end
console.log( fruits ); 

//shift operation
fruits = ["Apple", "Orange", "Pear"];
console.log( fruits.shift() ); // remove element from front
console.log( fruits ); 

//unshift operation
fruits = ["Orange", "Pear"];
fruits.unshift('Apple'); // adds element in front
console.log( fruits ); 

//toString 
let arr3 = [1, 2, 3]; 
console.log( arr3 ); // 1,2,3
console.log( String(arr3) ); 

//SLICE METHOD
let marvelHeroes = [ "thor", "spiderman", "ironman", "antman", "Dr.Strange"];
console.log(marvelHeroes.slice(1,3));

//SPLICE METHOD
let arr4 = [1, 2, 3, 4, 5, 6, 7];
arr4.splice(2, 2, 101, 102);
//arr4.splice(2,0,101); //add
//arr4.splice(2,1);   // delete
//arr4.splice(2,3,104);  // replace
console.log(arr4); 

//CONCATENATION
let arr5 = [1, 2];
console.log( arr5.concat([3, 4]) ); // create an array from: arr5 and [3,4]
console.log( arr5.concat([3, 4], [5, 6]) ); // create an array from: arr5 and [3,4] and [5,6]
console.log( arr5.concat([3, 4], 5, 6) ); // create an array from: arr5 and [3,4], then add values 5 and 6

//TASK 1
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
//console.log(companies);
//console.log(companies.shift());

//companies.splice(2,1,"Ola");
//companies[2]="Ola";
//console.log(companies);

companies.push("Amazon");
console.log(companies);

/* MAP */
let nums = [67, 52, 39];
nums.map((val) => {
    console.log(val);
});

let newArr = nums.map((val) => {
    return val * val;
});
console.log(newArr);

/* FILTER */
let nums_ = [1, 2, 3, 4, 5, 6, 7];
let evenArr = nums_.filter((val) => {
    return val % 2 == 0;
});
console.log(evenArr);

/* REDUCE */
let num_1 = [1, 2, 3, 4];
const output = num_1.reduce((res, curr) => {
    return res + curr;
});
console.log( output);