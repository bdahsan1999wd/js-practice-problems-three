// 1. Create different variables with array and non-array values
let fruits = ["apple", "banana", "mango"];
let number = 25;
let city = "Dhaka";
let mixed = [10, "hello", true];
let isStudent = false;


// 2. Use Array.isArray() to check each variable
console.log(Array.isArray(fruits));

console.log(Array.isArray(number));

console.log(Array.isArray(city));

console.log(Array.isArray(mixed));

console.log(Array.isArray(isStudent));


// 3. Print a message indicating if it's an array or not using -----> if-else
if (Array.isArray(fruits)) {
    console.log("fruits is an array");
}
else {
    console.log("fruits is not an array");
}

if (Array.isArray(number)) {
    console.log("number is an array");
}
else {
    console.log("number is not an array");
}

if (Array.isArray(city)) {
    console.log("city is an array");
}
else {
    console.log("city is not an array");
}

if (Array.isArray(mixed)) {
    console.log("mixed is an array");
}
else {
    console.log("mixed is not an array");
}

if (Array.isArray(isStudent)) {
    console.log("isStudent is an array");
}
else {
    console.log("isStudent is not an array");
}



// 3. Print a message indicating if it's an array or not using -----> ternary operator

/*
console.log(Array.isArray(fruits) ? "fruits is an array" : "fruits is not an array");

console.log(Array.isArray(number) ? "number is an array" : "number is not an array");

console.log(Array.isArray(city) ? "city is an array" : "city is not an array");

console.log(Array.isArray(mixed) ? "mixed is an array" : "mixed is not an array");

console.log(Array.isArray(isStudent) ? "isStudent is an array" : "isStudent is not an array");
*/