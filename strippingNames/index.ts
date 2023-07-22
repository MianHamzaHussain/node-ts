const personNameWithWhitespace: string = "\t\n   John Doe    \t\n";
console.log(`Name with whitespace: "${personNameWithWhitespace}"`);

const strippedName: string = personNameWithWhitespace.trim();
console.log(`Stripped name: "${strippedName}"`);
