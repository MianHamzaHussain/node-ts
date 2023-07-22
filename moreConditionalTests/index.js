// Tests for equality and inequality with strings
var fruit = 'apple';
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit === 'apple');
console.log("Is fruit != 'orange'? I predict True.");
console.log(fruit !== 'orange');
// Tests using the lower case function
var word = 'OpenAI';
console.log("Is word in lowercase 'openai'? I predict False.");
console.log(word.toLowerCase() === 'openai');
console.log("Is word in lowercase 'openai'? I predict True.");
console.log(word.toLowerCase() === 'openai'.toLowerCase());
// Numerical tests
var numberA = 10;
var numberB = 5;
console.log("Is numberA equal to numberB? I predict False.");
console.log(numberA === numberB);
console.log("Is numberA not equal to numberB? I predict True.");
console.log(numberA !== numberB);
console.log("Is numberA greater than numberB? I predict True.");
console.log(numberA > numberB);
console.log("Is numberA less than numberB? I predict False.");
console.log(numberA < numberB);
console.log("Is numberA greater than or equal to numberB? I predict True.");
console.log(numberA >= numberB);
console.log("Is numberA less than or equal to numberB? I predict False.");
console.log(numberA <= numberB);
// Tests using "and" and "or" operators
var hasApple = true;
var hasBanana = false;
console.log("Do I have an apple and a banana? I predict False.");
console.log(hasApple && hasBanana);
console.log("Do I have an apple or a banana? I predict True.");
console.log(hasApple || hasBanana);
// Test whether an item is in an array
var fruits = ['apple', 'banana', 'orange'];
var checkFruit = 'apple';
console.log("Is 'apple' in the fruits array? I predict True.");
console.log(fruits.includes(checkFruit));
// Test whether an item is not in an array
var checkFruit2 = 'grape';
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes(checkFruit2));
