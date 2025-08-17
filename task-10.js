const statement = 'I am a hard working person';
console.log(statement);

// Split the sentence into an array of words
const wordsArray = statement.split(' ');
// console.log(wordsArray);

// Reverse the array of words
const reversedArray = wordsArray.reverse();
// console.log(reversedArray);

// Join the reversed array back into a string
const reversedSentence = reversedArray.join(' ');
console.log(reversedSentence);