// 1. Create an array of books
let books = ["HTML Basics", "CSS Mastery", "JavaScript Guide", "React Handbook", "Node.js Essentials"];

// 2. Check if the array contains a JavaScript book
let hasJavaScript = books.includes("JavaScript Guide");

// 3. Print a message
if (hasJavaScript) {
    console.log("Yes..! The array contains a JavaScript book.");
}
else {
    console.log("No..! The array does not contain a JavaScript book.");
}