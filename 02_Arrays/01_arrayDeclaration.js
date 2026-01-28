let arr = new Array();
let arr1 = [];

let fruit = ["Apple", "Orange", "Plum"];
console.log(fruit);

console.log( fruit[0] ); 
console.log( fruit[1] ); 
console.log( fruit[2] ); 

fruit[2] = 'Pear'; //replacing an element
console.log(fruit);

fruit[3] = 'Lemon'; //adding new element
console.log(fruit);

console.log(fruit.length);// To find length

console.log(fruit[2]); //accesing characters

console.log( fruit[fruit.length-1] ); //accessing last element
console.log(fruit.at(-1));

// Multidimensional array
let matrix = [ 
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(matrix[0][1]);