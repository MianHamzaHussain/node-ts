// Programe 1
var personName = 'Ahmad Asghar'; // storing person name in a constant
var message = "Hello ".concat(personName, ", would you like to learn some Python today?"); // adding person name in message and storiing it in a new constant variable message
console.log('====================================');
console.log("Output:", message); // printing value of message
console.log('====================================');
// Programe 2
var upperCaseName = personName.toUpperCase(); // converting personName to upperCase using toUpperCase method
var lowerCaseName = personName.toLowerCase(); // converting personName to lowerCase using toLowerCase method
var titleCase = personName // 'personName' is the input string containing the name in lowercase or mixed case.
    .split(" ") // Split the 'personName' string into an array of words using space as the separator.
    .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); })
    // The 'map' function is used to process each word in the array.
    // For each word, it takes the first character (charAt(0)) and converts it to uppercase (toUpperCase()).
    // Then, it concatenates the uppercase first character with the rest of the word (word.slice(1)),
    // which starts from the second character until the end of the word.
    // The result is an array of words in title case.
    .join(" ");
// Priniting the all outputs
console.log('====================================');
console.log("Uppercase:", upperCaseName);
console.log("Lowercase:", lowerCaseName);
console.log("TitleCase:", titleCase);
console.log('====================================');
