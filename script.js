// Instantiate a new array and add 5 numeric values to it 
let myArray = [10, 20, 30, 40, 50];

console.log("First value:", myArray[0]); // Output: 10
console.log("Last value:", myArray[myArray.length - 1]); // Output: 50

//output each of the values in the array
for (let i = 0; i < myArray.length; i++) 
    console.log("Value at index", i, ":", myArray[i]);
}

// push() method to add 5 more values to the array
myArray.push(60, 70, 80, 90, 100);

console.log("Array after pushing 5 more values:", myArray); // The new values appear at the end of the array

myArray.pop();
myArray.pop();
myArray.pop();
console.log("Array after popping 3 values:", myArray);
// Output: [10, 20, 30, 40, 50, 60, 70]

let myString = "Hello, World!";
console.log("Length of myString:", myString.length); 
// Output: 13
