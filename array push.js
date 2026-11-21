//push adds an element to the end of an array
const fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits); // Output: ["apple", "banana", "orange"]
const fruits1 = ["apple", "banana","orange"];
fruits1.shift(); // removes the first element from the array
console.log(fruits1); // Output: ["banana", "orange"]
const fruits2 = ["apple", "banana","orange"];
fruits2.unshift("grape"); // adds an element to the beginning of the array
console.log(fruits2); // Output: ["grape", "apple", "banana", "orange"]
//find the index of an element in an array
const vehicles = ["car", "bike", "bus"];
console.log(vehicles.indexOf("bus")); // Output: 2
console.log(vehicles.indexOf("train")); // Output: -1
//splice method can be used to add or remove elements from an array
const marks=[10,20,30,40,50];
marks.splice(1,3,5);
console.log(marks); // Output: [10, 20, 40, 50]
console.log(Array.isArray(a))
marks[0]=100
console.log(marks)
console.log(marks[-1])
console.log(typeof marks)
var a=10
console.log(typeof a)