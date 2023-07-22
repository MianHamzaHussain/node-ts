var personNameWithWhitespace = "\t\n   John Doe    \t\n";
console.log("Name with whitespace: \"".concat(personNameWithWhitespace, "\""));
var strippedName = personNameWithWhitespace.trim();
console.log("Stripped name: \"".concat(strippedName, "\""));
