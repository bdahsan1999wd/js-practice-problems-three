const original = [1, 2, 3];
// console.log(original);

// Create a copy of the original array using the spread operator
const copy = [...original];

// Change the first element of the copied array
copy[0] = 99;
// console.log(copy);

console.log('Original:', original, 'Copy:', copy);







// Copy the whole array using slice()----------
const copySlice = original.slice();

copySlice[0] = 99;
// console.log(copySlice);

console.log('Original:', original, 'Copy:', copySlice);