const arr = [
    [1, 2],
    [3, 4],
    [5, 6]
];
console.log('Original:', arr);

// Access the second row (index 1) from the array
const secondRow = arr[1];
// console.log(secondRow);

// Access the first item (index 0) of the second row
const firstItem = secondRow[0];
// console.log(firstItem);

// Update the first item of the second row to 99
secondRow[0] = 99;

console.log('Update:', arr);