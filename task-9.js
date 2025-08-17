// 1. Create an array of 6 numbers
let numbers = [10, 20, 30, 40, 50, 60];
console.log(numbers);

// 2. Use slice method to copy the first 3 numbers into a new array
let slicedArray = numbers.slice(0, 3);
console.log(slicedArray);

// 3. Use splice method to remove 2 elements starting from index 2
let removedElements = numbers.splice(2, 2);
console.log(numbers);

// 4. Use splice method to insert elements without removing anything
numbers.splice(2, 0, 99, 100);
console.log("After Insert:", numbers);

// 5. Use splice method to replace elements (remove 2, add 2 new)
numbers.splice(2, 2, 111, 222);
console.log("After Replace:", numbers);