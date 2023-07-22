// Tests for equality and inequality with strings
const fruit: string = 'apple';
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit === 'apple');
console.log("Is fruit != 'orange'? I predict True.");
console.log(fruit !== 'orange');

// Tests using the lower case function
const word: string = 'OpenAI';
console.log("Is word in lowercase 'openai'? I predict False.");
console.log(word.toLowerCase() === 'openai');
console.log("Is word in lowercase 'openai'? I predict True.");
console.log(word.toLowerCase() === 'openai'.toLowerCase());

// Numerical tests
const numberA: number = 10;
const numberB: number = 5;
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
const hasApple: boolean = true;
const hasBanana: boolean = false;
console.log("Do I have an apple and a banana? I predict False.");
console.log(hasApple && hasBanana);
console.log("Do I have an apple or a banana? I predict True.");
console.log(hasApple || hasBanana);

// Test whether an item is in an array
const fruits: string[] = ['apple', 'banana', 'orange'];
const checkFruit: string = 'apple';
console.log("Is 'apple' in the fruits array? I predict True.");
console.log(fruits.includes(checkFruit));

// Test whether an item is not in an array
const checkFruit2: string = 'grape';
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes(checkFruit2));
